import React from 'react';
import { useNavigate } from 'react-router-dom';

const SelectionScreen = () => {
  const navigate = useNavigate();

  const handleSelection = (type) => {
    // Navigate to the dashboard with the selected type
    navigate('/dashboard', { state: { callType: type } });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 text-center">
        <h2 className="text-2xl font-bold mb-6">Select Call Type</h2>
        <button
          className="w-full cursor-pointer bg-[#2ecc71] text-white py-2 rounded-lg mb-4 hover:bg-[#27ae60] transition-colors duration-300"
          onClick={() => handleSelection('successful')}
        >
          Successful Calls
        </button>
        <button
          className="w-full cursor-pointer bg-[#e74c3c] text-white py-2 rounded-lg mb-4 hover:bg-[#c0392b] transition-colors duration-300"
          onClick={() => handleSelection('unsuccessful')}
        >
          Unsuccessful Calls
        </button>
        <button
          className="w-full cursor-pointer bg-[#3498db] text-white py-2 rounded-lg hover:bg-[#2980b9] transition-colors duration-300"
          onClick={() => handleSelection('usama')}
        >
          Usama's List
        </button>
      </div>
    </div>
  );
};

export default SelectionScreen;