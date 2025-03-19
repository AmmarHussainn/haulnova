import { Check } from "lucide-react";
import Images from "../assets/Images";

const BeyondDispatchServices = () => {
  const services = [
    ["BILLING AND INVOICING", "DOCUMENT MANAGEMENT"],
    ["SAFETY ASSISTANCE", "AFTER HOURS DISPATCH"],
    ["DATA ENTRY AND MONITORING", "DRIVER STATEMENTS"],
  ];

  return (
    <div className=" mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    
    <div>
        <img
          src= {Images.beyoondespatch}
          alt="Invoice on Tablet"
          className=" shadow-md"
        />
      </div>
      {/* Left: Text Content */}
      <div>
        <h2 className="text-4xl  font-Montserrat font-bold">Beyond dispatch services</h2>
        <p className="text-gray-600 mt-4 font-Montserrat">
          We go beyond dispatch for trucks by providing comprehensive administrative 
          support to make your job easier and save you money. With Haul Nova Dispatch, 
          you can leave all your freight operations to us.
        </p>

        {/* Service List */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((pair, index) => (
            <div key={index} className="space-y-2">
              {pair.map((service, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="text-orange-500" />
                  <span className="font-medium font-bebas text-xl">{service}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button className="mt-6 border font-Montserrat border-black px-6 py-3 rounded-md font-semibold flex items-center gap-2 hover:bg-gray-100">
          MORE ABOUT SOLUTIONS →
        </button>
      </div>

      {/* Right: Image */}
     
    </div>
  );
};

export default BeyondDispatchServices;
