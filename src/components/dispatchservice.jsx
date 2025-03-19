import { Check } from "lucide-react";
import Images from "../assets/Images";
import { Link } from "react-router-dom";

const DispatchService = () => {
  const checklist = [
    "PLAN YOUR TRIP/WEEK/MONTH",
    "HELP WITH TECHNICAL SUPPORT",
    "HANDLE UNIT RECOVERY",
    "HANDLE UPDATES & CORRESPONDENCE",
    "WORK WITH PERMITS AND PAPERWORK",
    "NEGOTIATE SPOT AND CONTRACT OFFERS",
  ];

  return (
    <div className=" mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Left: Image */}
      <div>
        <img
          src= {Images.customersupport}  // Change to actual image path
          alt="Dispatcher at work"
          className="rounded-lg shadow-md"
        />
      </div>

      {/* Right: Text Content */}
      <div>
        <h2 className="text-4xl font-bold font-bebas">Seamless 24/7 dispatch service</h2>
        <p className="text-gray-600 mt-4 font-Montserrat">
          At Haul Nova, we prioritize efficiency, reliability, and customer satisfaction, pairing lower dispatch rates with true trucking experts. Our route planning, based on trusted contacts, ensures swift and precise dispatching, keeping your cargo moving smoothly.
        </p>

        {/* Checklist */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {checklist.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <Check className="w-5 h-5 text-orange-500" />
              <span className="font-medium font-bebas text-xl">{item}</span>
            </div>
          ))}
        </div>

        {/* Button */}
        <Link to="/dispatch-for-trucking-companies" className='inline-block'>
        <button  className="mt-6 px-6 font-Montserrat py-3 border cursor-pointer border-black rounded-lg font-semibold flex items-center gap-2 hover:bg-gray-100 transition">
          LEARN MORE ABOUT US →
        </button>
        </Link>
      </div>
    </div>
  );
};

export default DispatchService;
