import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [calls, setCalls] = useState([]);
  const [selectedCall, setSelectedCall] = useState(null);

  useEffect(() => {
    fetchCalls();
  }, []);

  const fetchCalls = async () => {
    try {
      const response = await axios.get("https://trucking-startup.onrender.com/api/call/allCalls");
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

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-3xl font-bold text-[#33333] text-center mb-6">Call Dashboard</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200 text-gray-800">
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Phone</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {calls.map((call) => {
                const structuredData = call?.analysis?.structuredData || {}; // Ensure it exists
                return (
                  <tr
                    key={call.id}
                    className={`border-b hover:bg-gray-100 cursor-pointer ${call.read ? "opacity-50" : ""}`}
                    onClick={() => setSelectedCall(call)}
                  >
                    <td className="p-4">{structuredData.Name || "N/A"}</td>
                    <td className="p-4">{structuredData.Email || "N/A"}</td>
                    <td className="p-4">{call.phoneNumber || "N/A"}</td>
                    <td className="p-4 text-center">
                      {!call.read && (
                        <button
                          className="bg-[#333333] text-white px-4 py-2 rounded-md hover:bg-[#22222] cursor-pointer transition"
                          onClick={(e) => {
                            e.stopPropagation();
                            markAsRead(call.id);
                          }}
                        >
                          Mark as Read
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {selectedCall && (
          <div className="mt-6 p-6 bg-gray-50 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Call Details</h3>
            <p><strong>Name:</strong> {selectedCall?.analysis?.structuredData?.Name || "N/A"}</p>
            <p><strong>Email:</strong> {selectedCall?.analysis?.structuredData?.Email || "N/A"}</p>
            <p><strong>Phone:</strong> {selectedCall?.phoneNumber || "N/A"}</p>
            <p><strong>Summary:</strong> {selectedCall?.analysis?.summary || "No summary available"}</p>
            <p><strong>Haul Type:</strong> {selectedCall?.analysis?.structuredData?.HaulType || "N/A"}</p>
            <p><strong>Max Weight:</strong> {selectedCall?.analysis?.structuredData?.MaxWeight || "N/A"}</p>

            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
              onClick={() => setSelectedCall(null)}
            >
              Close Details
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
