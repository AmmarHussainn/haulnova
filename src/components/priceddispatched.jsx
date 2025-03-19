import { ClipboardList, CalendarDays, Globe } from "lucide-react";
import Images from "../assets/Images";

const PriceDispatchServices = () => {
  const services = [
    {
      icon: <ClipboardList className="text-[#ff6900] w-8 h-8" />,
      title: "THE SIZE OF YOUR FLEET",
      description:
        "Whether you're a startup with a handful of vehicles or a well-established company with an extensive fleet, our pricing system is tailored to accommodate your aspirations and accelerate your growth.",
    },
    {
      icon: <CalendarDays className="text-[#ff6900] w-8 h-8" />,
      title: "ADDITIONAL SERVICES",
      description:
        "We offer a comprehensive range of additional services all in one place, making your trucking operations more efficient. You can simplify processes and excel with us without any extra effort.",
    },
    {
      icon: <Globe className="text-[#ff6900] w-8 h-8" />,
      title: "EXPERIENCE ON THE MARKET",
      description:
        "With the help of our pricing system, we'll guide you in building a solid market reputation, providing invaluable expertise and support. The main goal is to set your business up for lasting success.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left Section: Text Content */}
      <div>
        <h2 className="text-4xl font-bold text-gray-900 mb-8 font-bebas">
          Fuel growth with competitively priced dispatch services
        </h2>

        <div className="space-y-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-start gap-6 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex-shrink-0">{service.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-bebas">
                  {service.title}
                </h3>
                <p className="text-gray-700 font-montserrat">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section: Image */}
      <div>
        <img
          src={Images.pricedispatched}
          alt="Fleet of Trucks"
          className=" shadow-lg hover:shadow-xl transition-shadow duration-300"
        />
      </div>
    </div>
  );
};

export default PriceDispatchServices;