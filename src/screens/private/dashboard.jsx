import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [calls, setCalls] = useState([]);
  const [selectedCall, setSelectedCall] = useState(null);
  const [filter, setFilter] = useState("all"); // "all", "read", "unread"
  const location = useLocation();
  const navigate = useNavigate();
  const { callType } = location.state || { callType: 'successful' }; // Default to successful calls

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
      setCalls(response.data || []); // Ensure calls is always an array
    } catch (error) {
      console.error("Error fetching calls:", error);
    }
  };

  const markAsRead = async (callId) => {
    try {
      await axios.post(`https://trucking-startup.onrender.com/api/call/markRead/${callId}`);
      setCalls((prevCalls) =>
        prevCalls.map((call) => (call.id === callId ? { ...call, read: true } : call))
      );
    } catch (error) {
      console.error("Error marking call as read:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Clear the auth token
    navigate('/login'); // Redirect to login page
  };

  const filteredCalls = calls.filter((call) => {
    if (filter === "read") return call.read;
    if (filter === "unread") return !call.read;
    return true; // "all"
  });

  const renderStructuredData = (data) => {
    if (!data) return null;
    return Object.entries(data).map(([key, value]) => (
      <p key={key}>
        <strong>{key}:</strong> {value || "N/A"}
      </p>
    ));
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold text-[#2c3e50] text-center mb-6">
          {callType === 'successful' ? 'Successful Calls' : 'Unsuccessful Calls'}
        </h2>

        {/* Filter Buttons */}
        <div className="flex justify-end space-x-4 mb-6">
          <button
            className={`px-4 cursor-pointer py-2 rounded-md ${
              filter === "all" ? "bg-[#3498db] text-white" : "bg-[#ecf0f1] text-[#2c3e50]"
            }`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`px-4 cursor-pointer py-2 rounded-md ${
              filter === "read" ? "bg-[#3498db] text-white" : "bg-[#ecf0f1] text-[#2c3e50]"
            }`}
            onClick={() => setFilter("read")}
          >
            Read
          </button>
          <button
            className={`px-4 cursor-pointer py-2 rounded-md ${
              filter === "unread" ? "bg-[#3498db] text-white" : "bg-[#ecf0f1] text-[#2c3e50]"
            }`}
            onClick={() => setFilter("unread")}
          >
            Unread
          </button>
          <button
            className="px-4 py-2 rounded-md bg-[#2c3e50] text-white hover:bg-[#34495e] transition"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#3498db] text-white">
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Phone</th>
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
                        call.read ? "opacity-50" : ""
                      }`}
                      onClick={() => setSelectedCall(isSelected ? null : call)}
                    >
                      <td className="p-4">{structuredData.Name || "N/A"}</td>
                      <td className="p-4">{structuredData.Email || "N/A"}</td>
                      <td className="p-4">{call.phoneNumber || "N/A"}</td>
                    </tr>
                    {isSelected && (
                      <tr>
                        <td colSpan="3" className="p-4 bg-[#f8f9fa]">
                          <div className="space-y-4">
                            {renderStructuredData(structuredData)}
                            <p>
                              <strong>Summary:</strong> {call?.analysis?.summary || "No summary available"}
                            </p>
                            {!call.read && (
                              <button
                                className="bg-[#3498db] text-white px-4 py-2 rounded-md hover:bg-[#2980b9] transition"
                                onClick={() => markAsRead(call.id)}
                              >
                                Mark as Read
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