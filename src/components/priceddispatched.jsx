import { ClipboardList, CalendarDays, Globe } from "lucide-react";
import Images from "../assets/Images";

const PriceDispatchServices = () => {
  const services = [
    {
      icon: <ClipboardList className="text-orange-500" />,
      title: "THE SIZE OF YOUR FLEET",
      description:
        "Whether you're a startup with a handful of vehicles or a well-established company with an extensive fleet, our pricing system is tailored to accommodate your aspirations and accelerate your growth.",
    },
    {
      icon: <CalendarDays className="text-orange-500" />,
      title: "ADDITIONAL SERVICES",
      description:
        "We offer a comprehensive range of additional services all in one place, making your trucking operations more efficient. You can simplify processes and excel with us without any extra effort.",
    },
    {
      icon: <Globe className="text-orange-500" />,
      title: "EXPERIENCE ON THE MARKET",
      description:
        "With the help of our pricing system, we'll guide you in building a solid market reputation, providing invaluable expertise and support. The main goal is to set your business up for lasting success.",
    },
  ];

  return (
    <div className=" mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
     

      {/* Right: Text Content */}
      <div>
        <h2 className="text-3xl font-bold">
          Fuel growth with competitively priced dispatch services
        </h2>

        <div className="mt-6 space-y-6">
          {services.map((service, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="text-2xl">{service.icon}</div>
              <div>
                <h3 className="font-bold">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

       {/* Left: Image */}
       <div>
        <img
          src= {Images.pricedispatched}
          alt="Fleet of Trucks"
          className=" shadow-md"
        />
      </div>
    </div>
  );
};

export default PriceDispatchServices;
