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
  TrashIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/solid';

const LoadingSpinner = () => (
  <div className='flex justify-center items-center'>
    <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900'></div>
  </div>
);

const Dashboard = () => {
  const [calls, setCalls] = useState([]);
  const [selectedCall, setSelectedCall] = useState(null);
  const [filter, setFilter] = useState('unread');
  const [searchPhoneNumber, setSearchPhoneNumber] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [callToDelete, setCallToDelete] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [totalItems, setTotalItems] = useState(0); // State to store total items
  const location = useLocation();
  const navigate = useNavigate();
  const { callType } = location.state || { callType: 'successful' };

  useEffect(() => {
    fetchCalls();
    fetchTotalCount();
  }, [callType, currentPage, itemsPerPage]);

  const fetchCalls = async () => {
    try {
      const endpoint =
        callType === 'successful'
          ? `https://trucking-startup.onrender.com/api/call/true?page=${currentPage}&limit=${itemsPerPage}`
          : `https://trucking-startup.onrender.com/api/call/false?page=${currentPage}&limit=${itemsPerPage}`;
      const response = await axios.get(endpoint);

      // Check if the response is an array
      if (Array.isArray(response.data)) {
        setCalls(response.data);
      } else {
        console.error('Unexpected API response structure:', response.data);
      }
    } catch (error) {
      console.error('Error fetching calls:', error);
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
      console.log('Total Items:', totalItemsFromResponse); // Debugging
      setTotalPages(Math.ceil(totalItemsFromResponse / itemsPerPage));
      console.log(
        'Total Pages:',
        Math.ceil(totalItemsFromResponse / itemsPerPage)
      ); // Debugging
    } catch (error) {
      console.error('Error fetching total count:', error);
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
      console.log('Call marked as favourite:', callId);
    } catch (error) {
      console.error('Error marking call as favourite:', error);
    }
  };

  const deleteCall = async (callId) => {
    try {
      await axios.post(
        `https://trucking-startup.onrender.com/api/call/deleteCall/${callId}`
      );
      setCalls((prevCalls) => prevCalls.filter((call) => call.id !== callId));
      setIsDeleteModalOpen(false);
      setCallToDelete(null);
    } catch (error) {
      console.error('Error deleting call:', error);
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

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setCallToDelete(null);
  };

  const confirmDelete = () => {
    if (callToDelete) {
      deleteCall(callToDelete);
    }
  };

  const sortedCalls = [...calls].sort((a, b) =>
    a.read === b.read ? 0 : a.read ? 1 : -1
  );

  const filteredCalls = sortedCalls.filter((call) => {
    if (filter === 'read') return call.read;
    if (filter === 'unread') return !call.read;
    if (filter === 'favourite') return call.favourite;
    return true;
  });

  const renderStructuredData = (data) => {
    if (!data) return null;
    return Object.entries(data).map(([key, value]) => (
      <p key={key}>
        <strong>{key}:</strong> {value || 'N/A'}
      </p>
    ));
  };

  return (
    <div className='min-h-screen bg-[#f8f9fa] p-6'>
      <div className='max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6'>
        <h2 className='text-3xl font-bold text-[#2c3e50] text-center mb-6'>
          {callType === 'successful'
            ? 'Successful Calls'
            : 'Unsuccessful Calls'}
        </h2>

        <button
          className='px-4 py-2 rounded-md cursor-pointer bg-[#2c3e50] text-white hover:bg-[#34495e] transition mb-6 flex items-center'
          onClick={handleGoBack}
        >
          <ArrowLeftIcon className='w-5 h-5 mr-2' /> Back
        </button>

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

        {isDeleteModalOpen && (
          <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
            <div className='bg-white rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3 p-6'>
              <div className='flex justify-between items-center mb-4'>
                <h3 className='text-xl font-bold'>Confirm Delete</h3>
                <button
                  onClick={closeDeleteModal}
                  className='text-gray-500 hover:text-gray-700'
                >
                  <XMarkIcon className='w-6 h-6 cursor-pointer' />
                </button>
              </div>
              <div className='mb-4'>
                <p>Are you sure you want to delete this call?</p>
              </div>
              <div className='flex justify-end'>
                <button
                  onClick={closeDeleteModal}
                  className='px-4 py-2 bg-gray-500 cursor-pointer text-white rounded-md hover:bg-gray-600 mr-2'
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDelete}
                  className='px-4 py-2 bg-red-500 cursor-pointer text-white rounded-md hover:bg-red-600'
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}

        <div className='flex md:flex-nowrap flex-wrap gap-2 md:gap-0 justify-center items-center md:justify-end space-x-4 mb-6'>
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
          <button
            className='px-4 py-2 rounded-md bg-[#2c3e50] text-white hover:bg-[#34495e] transition flex items-center'
            onClick={handleLogout}
          >
            <ArrowRightOnRectangleIcon className='w-5 h-5 mr-2' /> Logout
          </button>
        </div>

        <div className='flex justify-between items-center mb-4'>
          <label className='text-[#2c3e50]'>Items per page:</label>
          <select
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1); // Reset to first page when items per page changes
            }}
            className='px-4 py-2 rounded-md border'
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </div>

        <div className='overflow-x-auto mb-4'>
          <table className='w-full border-collapse'>
            <thead>
              <tr className='bg-[#3498db] text-white'>
                <th className='p-4 text-left'>Name</th>
                <th className='p-4 text-left'>Email</th>
                <th className='p-4 text-left'>Phone</th>
                <th className='p-4 text-left'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCalls.map((call) => {
                const structuredData = call?.analysis?.structuredData || {};
                const isSelected = selectedCall?.id === call.id;

                return (
                  <React.Fragment key={call.id}>
                    <tr
                      className={`border-b hover:bg-[#ecf0f1] cursor-pointer ${
                        call.read ? 'opacity-50' : ''
                      }`}
                      onClick={() => setSelectedCall(isSelected ? null : call)}
                    >
                      <td className='p-4'>{structuredData.Name || 'N/A'}</td>
                      <td className='p-4'>{structuredData.Email || 'N/A'}</td>
                      <td className='p-4'>{call.phoneNumber || 'N/A'}</td>
                      <td className='p-4 flex gap-4'>
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
                          {call.favourite ? 'Favourited' : 'Mark as Favourite'}
                        </button>
                        <button
                          className='px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 flex items-center ml-2'
                          onClick={(e) => {
                            e.stopPropagation();
                            setCallToDelete(call.id);
                            setIsDeleteModalOpen(true);
                          }}
                        >
                          <TrashIcon className='w-5 h-5 mr-2' />
                          Delete
                        </button>
                      </td>
                    </tr>
                    {isSelected && (
                      <tr>
                        <td colSpan='4' className='p-4 bg-[#f8f9fa]'>
                          <div className='space-y-4'>
                            {renderStructuredData(structuredData)}
                            <p>
                              <strong>Summary:</strong>{' '}
                              {call?.analysis?.summary ||
                                'No summary available'}
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
                                  <CheckIcon className='w-5 h-5 mr-2' /> Mark as
                                  Read
                                </button>
                              
                            )}
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className='flex justify-center items-center space-x-4 mb-6'>
          <button
            className='px-4 py-2 cursor-pointer rounded-md bg-[#2c3e50] text-white hover:bg-[#34495e] transition flex items-center'
            onClick={() => {
              console.log('Previous Page:', currentPage - 1); // Debugging
              setCurrentPage((prev) => Math.max(prev - 1, 1));
            }}
            disabled={currentPage === 1}
          >
            <ChevronLeftIcon className='w-5 h-5 mr-2' /> Previous
          </button>
          <span className='text-[#2c3e50]'>
            Page {currentPage} of {totalPages}
          </span>
          <button
            className='px-4 py-2 cursor-pointer rounded-md bg-[#2c3e50] text-white hover:bg-[#34495e] transition flex items-center'
            onClick={() => {
              console.log('Next Page:', currentPage + 1); // Debugging
              setCurrentPage((prev) => Math.min(prev + 1, totalPages));
            }}
            disabled={currentPage === totalPages}
          >
            Next <ChevronRightIcon className='w-5 h-5 ml-2' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
