import { Route, Clock, DollarSign, Headphones } from "lucide-react";
import Images from "../assets/Images";

const RouteAssistance = () => {
  const points = [
    { icon: <Route className="text-[#fdbd58]" />, text: "Optimize routes" },
    { icon: <Clock className="text-[#fdbd58]" />, text: "Minimize delays" },
    { icon: <DollarSign className="text-[#fdbd58]" />, text: "Maximize cost-effectiveness" },
    { icon: <Headphones className="text-[#fdbd58]" />, text: "Fully support the drivers" },
  ];

  return (
    <div className=" mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
     
      {/* Right: Text Content */}
      <div>
        <h2 className="text-4xl font-bold font-bebas ">Route assistance for every mile</h2>
        <p className="text-gray-600 mt-4 font-Montserrat">
          With a keen focus on communication and transparency, we provide real-time updates and personalized support, giving you and your drivers peace of mind every step of the way. Along with our main responsibilities, we make sure to:
        </p>

        {/* Key Points */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {points.map((item, index) => (
            <div key={index} className="flex items-center  gap-2">
              {item.icon}
              <span className="font-semibold font-Montserrat">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

       {/* Left: Image */}
       <div>
        <img
          src= {Images.roadassistance}
          alt="Truck on road"
          className="   "
        />
      </div>

    </div>
  );
};

export default RouteAssistance;
