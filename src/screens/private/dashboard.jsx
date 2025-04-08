import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  ArrowLeftIcon,
  ArrowRightOnRectangleIcon,
  CheckIcon,
  StarIcon,
  EyeIcon,
  EyeSlashIcon,
  HeartIcon,
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PencilIcon
} from '@heroicons/react/24/solid';

const LoadingSpinner = () => (
  <div className='flex justify-center items-center'>
    <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900'></div>
  </div>
);

const Dashboard = () => {
  const [calls, setCalls] = useState([]);
  const [selectedCall, setSelectedCall] = useState(null);
  const [filter, setFilter] = useState('undialed');
  const [searchPhoneNumber, setSearchPhoneNumber] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [totalItems, setTotalItems] = useState(0);
  const [description, setDescription] = useState('');
  const [isDescriptionModalOpen, setIsDescriptionModalOpen] = useState(false);
  const [selectedUsamaItem, setSelectedUsamaItem] = useState(null);
  const [expandedItems, setExpandedItems] = useState({});
  const [successful, setSuccessful] = useState("undialed");
  const [isFormValid, setIsFormValid] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const { callType } = location.state || { callType: 'successful' };

  useEffect(() => {
    fetchCalls();
    if (callType !== 'usama') {
      fetchTotalCount();
    } else {
      fetchUsamaTotalCount();
    }
  }, [callType, currentPage, itemsPerPage]);

  useEffect(() => {
    setIsFormValid(description.trim().length > 0);
  }, [description]);

  const fetchCalls = async () => {
    setIsLoading(true);
    try {
      let endpoint;
      if (callType === 'successful') {
        endpoint = `https://trucking-startup.onrender.com/api/call/true?page=${currentPage}&limit=${itemsPerPage}`;
      } else if (callType === 'unsuccessful') {
        endpoint = `https://trucking-startup.onrender.com/api/call/false?page=${currentPage}&limit=${itemsPerPage}`;
      } else if (callType === 'usama') {
        endpoint = `https://trucking-startup.onrender.com/api/form/usama/?page=${currentPage}&limit=${itemsPerPage}`;
      }

      const response = await axios.get(endpoint);
      setCalls(callType === 'usama' ? response.data : response.data);
    } catch (error) {
      console.error('Error fetching calls:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchTotalCount = async () => {
    try {
      const countEndpoint =
        callType === 'successful'
          ? 'https://trucking-startup.onrender.com/api/call/trueCount'
          : 'https://trucking-startup.onrender.com/api/call/falseCount';
      const response = await axios.get(countEndpoint);
      const totalItemsFromResponse = response.data.count || 0;
      setTotalItems(totalItemsFromResponse);
      setTotalPages(Math.ceil(totalItemsFromResponse / itemsPerPage));
    } catch (error) {
      console.error('Error fetching total count:', error);
    }
  };

  const fetchUsamaTotalCount = async () => {
    try {
      const response = await axios.get(`https://trucking-startup.onrender.com/api/form/usama/undialed-count`);
      const total = response.data.totalUndialed || 0;
      setTotalItems(total);
      setTotalPages(Math.ceil(total / itemsPerPage));
    } catch (error) {
      console.error('Error fetching Usama total count:', error);
      try {
        const response = await axios.get(`https://trucking-startup.onrender.com/api/form/usama/?page=1&limit=${itemsPerPage}`);
        setTotalItems(response.data.length);
        setTotalPages(Math.ceil(response.data.length / itemsPerPage));
      } catch (fallbackError) {
        console.error('Fallback count failed:', fallbackError);
      }
    }
  };

  const markAsRead = async (callId) => {
    try {
      await axios.post(
        `https://trucking-startup.onrender.com/api/call/markRead/${callId}`
      );
      setCalls((prevCalls) =>
        prevCalls.map((call) =>
          call.id === callId ? { ...call, read: true } : call
        )
      );
    } catch (error) {
      console.error('Error marking call as read:', error);
    }
  };

  const markAsFavourite = async (callId) => {
    try {
      await axios.post(
        `https://trucking-startup.onrender.com/api/call/markFavourite/${callId}`
      );
      setCalls((prevCalls) =>
        prevCalls.map((call) =>
          call.id === callId ? { ...call, favourite: true } : call
        )
      );
    } catch (error) {
      console.error('Error marking call as favourite:', error);
    }
  };

  const updateDescription = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        `https://trucking-startup.onrender.com/api/form/usama/${selectedUsamaItem._id}/update-description`,
        { 
          description, 
          successful 
        }
      );

      setCalls(prevCalls =>
        prevCalls.map(call =>
          call._id === selectedUsamaItem._id ? response.data : call
        )
      );
      setIsDescriptionModalOpen(false);
      setDescription('');
      setSelectedUsamaItem(null);
      setSuccessful("undialed");
    } catch (error) {
      console.error('Error updating description:', error);
      alert('Failed to update description. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  const handleGoBack = () => {
    navigate('/selection');
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (callType === 'usama') {
      alert('Search functionality not available for Usama list');
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post(
        `https://trucking-startup.onrender.com/api/call/mcAndRecording/${searchPhoneNumber}`
      );
      setSearchResult(response.data);
      setIsModalOpen(true);
    } catch (error) {
      console.log('Error fetching search result:', error);
      alert('Failed to fetch data for the provided phone number.');
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSearchResult(null);
  };

  const toggleExpand = (callId) => {
    setExpandedItems((prev) => ({
      ...prev,
      [callId]: !prev[callId],
    }));
  };

  const renderStructuredData = (data) => {
    if (!data) return null;

    if (callType === 'usama') {
      return (
        <div className="space-y-2">
          <p><strong>MC/MX/FF Number:</strong> {data.mc_mx_ff_number || 'N/A'}</p>
          <p><strong>Legal Name:</strong> {data.legal_name || 'N/A'}</p>
          <p><strong>Physical Address:</strong> {data.physical_address || 'N/A'}</p>
          <p><strong>Phone:</strong> {data.phone || 'N/A'}</p>
          <p><strong>Description:</strong> {data.description || 'No description available'}</p>
        </div>
      );
    }

    return (
      <div className="space-y-2">
        {Object.entries(data).map(([key, value]) => (
          <p key={key}>
            <strong>{key}:</strong> {value || 'N/A'}
          </p>
        ))}
      </div>
    );
  };

  const sortedCalls = [...calls].sort((a, b) => {
    if (callType === 'usama') {
      if (a.successful === b.successful) {
        return new Date(b.lastDialedAt || 0) - new Date(a.lastDialedAt || 0);
      }
      return a.successful === "true" ? -1 : 1;
    } else {
      return a.read === b.read ? 0 : a.read ? 1 : -1;
    }
  });

  const filteredCalls = sortedCalls.filter((call) => {
    if (callType === 'usama') {
      if (filter === 'successful') return call.successful === "true";
      if (filter === 'unsuccessful') return call.successful === "false";
      if (filter === 'undialed') return call.successful === "undialed" || !call.successful;
      return true;
    } else {
      if (filter === 'read') return call.read;
      if (filter === 'unread') return !call.read;
      if (filter === 'favourite') return call.favourite;
      return true;
    }
  });

  return (
    <div className='min-h-screen bg-[#f8f9fa] p-6'>
      <div className='max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6'>
        <h2 className='text-3xl font-bold text-[#2c3e50] text-center mb-6'>
          {callType === 'successful'
            ? 'Successful Calls'
            : callType === 'unsuccessful'
            ? 'Unsuccessful Calls'
            : "Usama's List"}
        </h2>

        <div className="flex justify-between items-center mb-6">
          <button
            className='px-4 py-2 rounded-md cursor-pointer bg-[#2c3e50] text-white hover:bg-[#34495e] transition flex items-center'
            onClick={handleGoBack}
          >
            <ArrowLeftIcon className='w-5 h-5 mr-2' /> Back
          </button>

          <button
            className='px-4 py-2 rounded-md bg-[#2c3e50] text-white hover:bg-[#34495e] transition flex items-center'
            onClick={handleLogout}
          >
            <ArrowRightOnRectangleIcon className='w-5 h-5 mr-2' /> Logout
          </button>
        </div>

        {callType !== 'usama' && (
          <form
            onSubmit={handleSearch}
            className='mb-6 w-full flex items-center justify-center'
          >
            <input
              type='text'
              value={searchPhoneNumber}
              onChange={(e) => setSearchPhoneNumber(e.target.value)}
              placeholder='Enter phone number (e.g., +17178751033)'
              className='px-4 py-2 w-[70%] border rounded-md'
              required
            />
            <button
              type='submit'
              className='ml-2 px-4 py-2 bg-[#3498db] cursor-pointer text-white rounded-md flex items-center'
              disabled={isLoading}
            >
              {isLoading ? <LoadingSpinner /> : 'Search'}
            </button>
          </form>
        )}

        {isModalOpen && (
          <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
            <div className='bg-white rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3 p-6'>
              <div className='flex justify-between items-center mb-4'>
                <h3 className='text-xl font-bold'>Search Result</h3>
                <button
                  onClick={closeModal}
                  className='text-gray-500 hover:text-gray-700'
                >
                  <XMarkIcon className='w-6 h-6 cursor-pointer' />
                </button>
              </div>
              <div className='mb-4'>
                {searchResult ? (
                  <>
                    <p>
                      <strong>MC Number:</strong> {searchResult.mcNumber}
                    </p>
                    <p>
                      <strong>Mono Recording:</strong>{' '}
                      <a
                        href={searchResult.monoRecording}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-blue-500 hover:underline'
                      >
                        Listen to Recording
                      </a>
                    </p>
                  </>
                ) : (
                  <p>No data found.</p>
                )}
              </div>
              <div className='flex justify-end'>
                <button
                  onClick={closeModal}
                  className='px-4 py-2 bg-gray-500 cursor-pointer text-white rounded-md hover:bg-gray-600'
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {isDescriptionModalOpen && (
          <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
            <div className='bg-white rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3 p-6'>
              <div className='flex justify-between items-center mb-4'>
                <h3 className='text-xl font-bold'>Update Description</h3>
                <button
                  onClick={() => {
                    setIsDescriptionModalOpen(false);
                    setSelectedUsamaItem(null);
                    setDescription('');
                    setSuccessful("undialed");
                  }}
                  className='text-gray-500 hover:text-gray-700'
                >
                  <XMarkIcon className='w-6 h-6 cursor-pointer' />
                </button>
              </div>
              <div className='mb-4'>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className='w-full p-2 border rounded-md'
                  rows={4}
                  placeholder='Enter description...'
                  required
                />
                {!isFormValid && (
                  <p className='text-red-500 text-sm mt-1'>Please enter a description</p>
                )}
              </div>
              <div className='mb-4'>
                <label className='block text-gray-700'>Call Status</label>
                <select
                  value={successful}
                  onChange={(e) => setSuccessful(e.target.value)}
                  className='w-full p-2 border rounded-md'
                >
                  <option value="undialed">Undialed</option>
                  <option value="true">Successful</option>
                  <option value="false">Unsuccessful</option>
                </select>
              </div>
              <div className='flex justify-end'>
                <button
                  onClick={() => {
                    setIsDescriptionModalOpen(false);
                    setSelectedUsamaItem(null);
                    setDescription('');
                    setSuccessful("undialed");
                  }}
                  className='px-4 py-2 bg-gray-500 cursor-pointer text-white rounded-md hover:bg-gray-600 mr-2'
                >
                  Cancel
                </button>
                <button
                  onClick={updateDescription}
                  disabled={!isFormValid || isLoading}
                  className={`px-4 py-2 rounded-md flex items-center ${
                    !isFormValid || isLoading
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-[#3498db] hover:bg-[#2980b9] cursor-pointer'
                  } text-white`}
                >
                  {isLoading ? 'Updating...' : 'Update'}
                </button>
              </div>
            </div>
          </div>
        )}

        <div className='flex flex-wrap gap-2 justify-center md:justify-end mb-6'>
          {callType === 'usama' ? (
            <>
              <button
                className={`px-4 cursor-pointer py-2 rounded-md flex items-center ${
                  filter === 'undialed'
                    ? 'bg-[#3498db] text-white'
                    : 'bg-[#ecf0f1] text-[#2c3e50]'
                }`}
                onClick={() => setFilter('undialed')}
              >
                Undialed
              </button>
              <button
                className={`px-4 cursor-pointer py-2 rounded-md flex items-center ${
                  filter === 'successful'
                    ? 'bg-[#3498db] text-white'
                    : 'bg-[#ecf0f1] text-[#2c3e50]'
                }`}
                onClick={() => setFilter('successful')}
              >
                <CheckIcon className='w-5 h-5 mr-2' /> Successful
              </button>
              <button
                className={`px-4 cursor-pointer py-2 rounded-md flex items-center ${
                  filter === 'unsuccessful'
                    ? 'bg-[#3498db] text-white'
                    : 'bg-[#ecf0f1] text-[#2c3e50]'
                }`}
                onClick={() => setFilter('unsuccessful')}
              >
                <XMarkIcon className='w-5 h-5 mr-2' /> Unsuccessful
              </button>
            </>
          ) : (
            <>
              <button
                className={`px-4 cursor-pointer py-2 rounded-md flex items-center ${
                  filter === 'all'
                    ? 'bg-[#3498db] text-white'
                    : 'bg-[#ecf0f1] text-[#2c3e50]'
                }`}
                onClick={() => setFilter('all')}
              >
                All
              </button>
              <button
                className={`px-4 cursor-pointer py-2 rounded-md flex items-center ${
                  filter === 'read'
                    ? 'bg-[#3498db] text-white'
                    : 'bg-[#ecf0f1] text-[#2c3e50]'
                }`}
                onClick={() => setFilter('read')}
              >
                <EyeSlashIcon className='w-5 h-5 mr-2' /> Read
              </button>
              <button
                className={`px-4 cursor-pointer py-2 rounded-md flex items-center ${
                  filter === 'unread'
                    ? 'bg-[#3498db] text-white'
                    : 'bg-[#ecf0f1] text-[#2c3e50]'
                }`}
                onClick={() => setFilter('unread')}
              >
                <EyeIcon className='w-5 h-5 mr-2' /> Unread
              </button>
              <button
                className={`px-4 cursor-pointer py-2 rounded-md flex items-center ${
                  filter === 'favourite'
                    ? 'bg-[#f39c12] text-white'
                    : 'bg-[#ecf0f1] text-[#2c3e50]'
                }`}
                onClick={() => setFilter('favourite')}
              >
                <HeartIcon className='w-5 h-5 mr-2' /> Favourites
              </button>
            </>
          )}
        </div>

        <div className='flex justify-between items-center mb-4'>
          <label className='text-[#2c3e50]'>Items per page:</label>
          <select
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className='px-4 py-2 rounded-md border'
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <LoadingSpinner />
          </div>
        ) : (
          <div className='overflow-x-auto mb-4'>
            <table className='w-full border-collapse'>
              <thead>
                <tr className='bg-[#3498db] text-white'>
                  {callType === 'usama' ? (
                    <>
                      <th className='p-4 text-left'>Legal Name</th>
                      <th className='p-4 text-left'>Phone</th>
                      <th className='p-4 text-left'>MC/MX/FF Number</th>
                      <th className='p-4 text-left'>Status</th>
                      <th className='p-4 text-left'>Actions</th>
                    </>
                  ) : (
                    <>
                      <th className='p-4 text-left'>Name</th>
                      <th className='p-4 text-left'>Email</th>
                      <th className='p-4 text-left'>Phone</th>
                      <th className='p-4 text-left'>Status</th>
                      <th className='p-4 text-left'>Actions</th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody>
                {filteredCalls.length > 0 ? (
                  filteredCalls.map((call) => {
                    const isSelected = selectedCall?._id === call._id || selectedCall?.id === call.id;
                    const callId = call._id || call.id;
                    const isExpanded = expandedItems[callId];

                    return (
                      <React.Fragment key={callId}>
                        <tr
                          className={`border-b hover:bg-[#ecf0f1] cursor-pointer ${
                            call.read ? 'opacity-50' : ''
                          }`}
                          onClick={() => toggleExpand(callId)}
                        >
                          {callType === 'usama' ? (
                            <>
                              <td className='p-4'>{call.legal_name || 'N/A'}</td>
                              <td className='p-4'>{call.phone || 'N/A'}</td>
                              <td className='p-4'>{call.mc_mx_ff_number || 'N/A'}</td>
                              <td className='p-4'>
                                <span className={`px-2 py-1 rounded-full text-xs ${
                                  call.successful === "true" 
                                    ? 'bg-green-100 text-green-800' 
                                    : call.successful === "false" 
                                      ? 'bg-red-100 text-red-800'
                                      : 'bg-gray-100 text-gray-800'
                                }`}>
                                  {call.successful === "true" 
                                    ? 'Successful' 
                                    : call.successful === "false" 
                                      ? 'Unsuccessful'
                                      : 'Undialed'}
                                </span>
                              </td>
                            </>
                          ) : (
                            <>
                              <td className='p-4'>{call?.analysis?.structuredData?.Name || 'N/A'}</td>
                              <td className='p-4'>{call?.analysis?.structuredData?.Email || 'N/A'}</td>
                              <td className='p-4'>{call.phoneNumber || 'N/A'}</td>
                              <td className='p-4'>
                                <span className={`px-2 py-1 rounded-full text-xs ${
                                  call.read ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                }`}>
                                  {call.read ? 'Read' : 'Unread'}
                                </span>
                              </td>
                            </>
                          )}
                          <td className='p-4 flex gap-4'>
                            {callType === 'usama' ? (
                              <button
                                className='px-4 py-2 rounded-md bg-[#3498db] text-white hover:bg-[#2980b9] flex items-center'
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedUsamaItem(call);
                                  setDescription(call.description || '');
                                  setSuccessful(call.successful || "undialed");
                                  setIsDescriptionModalOpen(true);
                                }}
                              >
                                <PencilIcon className='w-5 h-5 mr-2' /> Edit
                              </button>
                            ) : (
                              <button
                                className={`px-4 py-2 rounded-md flex items-center ${
                                  call.favourite
                                    ? 'bg-[#f39c12] text-white'
                                    : 'bg-[#ecf0f1] hover:bg-white text-[#2c3e50] cursor-pointer'
                                }`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  markAsFavourite(call.id);
                                }}
                              >
                                <StarIcon className='w-5 h-5 mr-2' />
                                {call.favourite ? 'Favourited' : 'Favourite'}
                              </button>
                            )}
                          </td>
                        </tr>
                        {isExpanded && (
                          <tr>
                            <td colSpan={callType === 'usama' ? 5 : 5} className='p-4 bg-[#f8f9fa]'>
                              <div className='space-y-4'>
                                {callType === 'usama' ? (
                                  renderStructuredData(call)
                                ) : (
                                  <>
                                    {renderStructuredData(call?.analysis?.structuredData)}
                                    <p>
                                      <strong>Summary:</strong>{' '}
                                      {call?.analysis?.summary || 'No summary available'}
                                    </p>
                                    <p>
                                      <strong>Recording:</strong>{' '}
                                      <a
                                        href={call.monoRecording}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='text-blue-500 hover:underline'
                                      >
                                        Listen to Recording
                                      </a>
                                    </p>
                                    {!call.read && (
                                      <button
                                        className='bg-[#3498db] text-white px-4 py-2 rounded-md hover:bg-[#2980b9] transition flex items-center'
                                        onClick={() => markAsRead(call.id)}
                                      >
                                        <CheckIcon className='w-5 h-5 mr-2' /> Mark as Read
                                      </button>
                                    )}
                                  </>
                                )}
                              </div>
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={callType === 'usama' ? 5 : 5} className="p-4 text-center">
                      No data available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}

        <div className='flex justify-between items-center mt-4'>
          <span className='text-[#2c3e50]'>
            Showing {filteredCalls.length} of {totalItems} items
          </span>
          <div className='flex items-center space-x-4'>
            <button
              className={`px-4 py-2 rounded-md flex items-center ${
                currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#2c3e50] text-white hover:bg-[#34495e] cursor-pointer'
              }`}
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeftIcon className='w-5 h-5 mr-2' /> Previous
            </button>
            <span className='text-[#2c3e50]'>
              Page {currentPage} of {totalPages}
            </span>
            <button
              className={`px-4 py-2 rounded-md flex items-center ${
                currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#2c3e50] text-white hover:bg-[#34495e] cursor-pointer'
              }`}
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next <ChevronRightIcon className='w-5 h-5 ml-2' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;