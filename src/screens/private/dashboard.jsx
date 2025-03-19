import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  ArrowLeftIcon, // For Back button
  ArrowRightOnRectangleIcon, // For Logout button
  CheckIcon, // For Mark as Read button
  StarIcon, // For Favorite button
  EyeIcon, // For Unread filter
  EyeSlashIcon, // For Read filter
  HeartIcon, // For Favorites filter
} from '@heroicons/react/24/solid'; // Updated import path for v2

const Dashboard = () => {
  const [calls, setCalls] = useState([]);
  const [selectedCall, setSelectedCall] = useState(null);
  const [filter, setFilter] = useState('unread'); // "all", "read", "unread", "favorite"
  const location = useLocation();
  const navigate = useNavigate();
  const { callType } = location.state || { callType: 'successful' };

  useEffect(() => {
    fetchCalls();
  }, [callType]);

  const fetchCalls = async () => {
    try {
      const endpoint =
        callType === 'successful'
          ? 'https://trucking-startup.onrender.com/api/call/allCalls'
          : 'https://trucking-startup.onrender.com/api/call/allFalseCalls';
      const response = await axios.get(endpoint);
      setCalls(response.data || []);
    } catch (error) {
      console.error('Error fetching calls:', error);
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

  const markAsFavorite = async (callId) => {
    try {
      await axios.post(
        `https://trucking-startup.onrender.com/api/call/markFavourite/${callId}`
      );
      setCalls((prevCalls) =>
        prevCalls.map((call) =>
          call.id === callId ? { ...call, favorite: true } : call
        )
      );
      console.log('Call marked as favorite:', callId);
    } catch (error) {
      console.error('Error marking call as favorite:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  const handleGoBack = () => {
    navigate('/selection');
  };

  const sortedCalls = [...calls].sort((a, b) =>
    a.read === b.read ? 0 : a.read ? 1 : -1
  );

  const filteredCalls = sortedCalls.filter((call) => {
    if (filter === 'read') return call.read;
    if (filter === 'unread') return !call.read;
    if (filter === 'favorite') return call.favorite;
    return true; // "all"
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

        {/* Back Button */}
        <button
          className='px-4 py-2 rounded-md cursor-pointer bg-[#2c3e50] text-white hover:bg-[#34495e] transition mb-6 flex items-center'
          onClick={handleGoBack}
        >
          <ArrowLeftIcon className='w-5 h-5 mr-2' /> Back
        </button>

        {/* Filter Buttons */}
        <div className='flex justify-end space-x-4 mb-6'>
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
              filter === 'favorite'
                ? 'bg-[#f39c12] text-white'
                : 'bg-[#ecf0f1] text-[#2c3e50]'
            }`}
            onClick={() => setFilter('favorite')}
          >
            <HeartIcon className='w-5 h-5 mr-2' /> Favorites
          </button>
          <button
            className='px-4 py-2 rounded-md bg-[#2c3e50] text-white hover:bg-[#34495e] transition flex items-center'
            onClick={handleLogout}
          >
            <ArrowRightOnRectangleIcon className='w-5 h-5 mr-2' /> Logout
          </button>
        </div>

        {/* Table */}
        <div className='overflow-x-auto'>
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
                      <td className='p-4'>
                        <button
                          className={`px-4 py-2 rounded-md flex items-center ${
                            call.favorite
                              ? 'bg-[#f39c12] text-white'
                              : 'bg-[#ecf0f1] hover:bg-white text-[#2c3e50] cursor-pointer'
                          }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            markAsFavorite(call.id);
                          }}
                        >
                          <StarIcon className='w-5 h-5 mr-2' />
                          {call.favorite ? 'Favorited' : 'Mark as Favorite'}
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
                            {!call.read && (
                              <button
                                className='bg-[#3498db] text-white px-4 py-2 rounded-md hover:bg-[#2980b9] transition flex items-center'
                                onClick={() => markAsRead(call.id)}
                              >
                                <CheckIcon className='w-5 h-5 mr-2' /> Mark as Read
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
      </div>
    </div>
  );
};

export default Dashboard;