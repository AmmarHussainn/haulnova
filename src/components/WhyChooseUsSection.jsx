import React from 'react';
import {
  BanknotesIcon,
  CogIcon,
  TruckIcon,
  ClockIcon,
} from "@heroicons/react/24/outline"; // Updated import for Heroicons v2

const WhyChooseUsSection = () => {
  return (
    <section className="bg-white py-20 px-6 lg:px-32">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900 mb-8 font-bebas">
          Why Choose Us as Your Dispatch Company?
        </h2>

        {/* Description */}
        <p className="text-xl text-gray-700 leading-relaxed mb-12 font-montserrat">
          Our dispatch team ensures efficient coordination and chooses the most convenient routes for your shipments, guaranteeing timely deliveries.
        </p>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {/* Card 1: Pricing System */}
          <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-[#ff6900] rounded-full mb-6">
              <BanknotesIcon className="w-6 h-6 text-white" /> {/* Updated icon */}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-bebas">
              Pricing System
            </h3>
            <p className="text-lg text-gray-700 font-montserrat">
              With a pricing system that encourages business growth, we offer cost-effective solutions that align with your needs, helping you thrive.
            </p>
          </div>

          {/* Card 2: Additional Services */}
          <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-[#ff6900] rounded-full mb-6">
              <CogIcon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-bebas">
              Additional Services
            </h3>
            <p className="text-lg text-gray-700 font-montserrat">
              Take advantage of our additional services to simplify your operations and discover the power of efficiency and growth for your business.
            </p>
          </div>

          {/* Card 3: Equipment & Size */}
          <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-[#ff6900] rounded-full mb-6">
              <TruckIcon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-bebas">
              Equipment & Size
            </h3>
            <p className="text-lg text-gray-700 font-montserrat">
              No matter the equipment type or company size, we handle it all! Trust us for reliable dispatch services tailored to your requirements.
            </p>
          </div>

          {/* Card 4: Timely Deliveries */}
          <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-[#ff6900] rounded-full mb-6">
              <ClockIcon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-bebas">
              Timely Deliveries
            </h3>
            <p className="text-lg text-gray-700 font-montserrat">
              We ensure efficient coordination and choose the most convenient routes for your shipments, guaranteeing timely deliveries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;