
import React from 'react';

const Services = () => {
  return (
    <section id='servicesSection' className='bg-[#ffffff]  py-20 px-6 lg:px-32'>
      <div className='max-w-7xl mx-auto text-center'>
        <h2 className='text-5xl font-extrabold text-gray-900 mb-8'>Our Services</h2>
        <p className='text-xl text-gray-700 leading-relaxed mb-12'>
          At <strong>Haul Nova</strong>, we provide top-tier truck dispatching services
          designed to maximize your efficiency and profitability. Our team ensures
          that you get the best loads while handling all the logistics, so you
          can focus on the road.
        </p>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left'>
          <div className='p-6 bg-white rounded-lg shadow-md'>
            <h4 className='text-2xl font-bold text-gray-900 mb-3'>📦 Load Booking</h4>
            <p className='text-lg text-gray-700'>We negotiate the best freight rates and book high-paying loads tailored to your needs.</p>
          </div>
          <div className='p-6 bg-white rounded-lg shadow-md'>
            <h4 className='text-2xl font-bold text-gray-900 mb-3'>🛣️ Route Optimization</h4>
            <p className='text-lg text-gray-700'>We help you plan the most efficient routes to minimize fuel costs and maximize earnings.</p>
          </div>
          <div className='p-6 bg-white rounded-lg shadow-md'>
            <h4 className='text-2xl font-bold text-gray-900 mb-3'>📄 Paperwork Management</h4>
            <p className='text-lg text-gray-700'>From invoices to broker setup packets, we handle all your paperwork seamlessly.</p>
          </div>
          <div className='p-6 bg-white rounded-lg shadow-md'>
            <h4 className='text-2xl font-bold text-gray-900 mb-3'>⏰ 24/7 Support</h4>
            <p className='text-lg text-gray-700'>Our team is available around the clock to assist you with any trucking needs.</p>
          </div>
          <div className='p-6 bg-white rounded-lg shadow-md'>
            <h4 className='text-2xl font-bold text-gray-900 mb-3'>🚛 No Forced Dispatch</h4>
            <p className='text-lg text-gray-700'>You remain in full control, choosing the loads that work best for your schedule.</p>
          </div>
          <div className='p-6 bg-white rounded-lg shadow-md'>
            <h4 className='text-2xl font-bold text-gray-900 mb-3'>🔎 Broker & Shipper Connections</h4>
            <p className='text-lg text-gray-700'>We leverage our network to connect you with reliable brokers and shippers.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
