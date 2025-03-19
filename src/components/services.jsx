import React from 'react';

const Services = () => {
  return (
    <section id='servicesSection' className='bg-[#ffffff] py-20 px-6 lg:px-32'>
      <div className='max-w-7xl mx-auto text-center'>
        {/* Heading */}
        <h2 className='text-5xl font-extrabold text-gray-900 mb-8 font-bebas'>
          Our Services
        </h2>

        {/* Description */}
        <p className='text-xl text-gray-700 leading-relaxed mb-12 font-montserrat'>
          At <strong className='text-[#ff6900]'>Haul Nova</strong>, we provide top-tier truck dispatching services
          designed to maximize your efficiency and profitability. Our team ensures
          that you get the best loads while handling all the logistics, so you
          can focus on the road.
        </p>

        {/* Services Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left'>
          {/* Service Card 1 */}
          <div className='p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <h4 className='text-2xl font-bold text-gray-900 mb-4 font-bebas'>📦 Load Booking</h4>
            <p className='text-lg text-gray-700 font-montserrat'>
              We negotiate the best freight rates and book high-paying loads tailored to your needs.
            </p>
          </div>

          {/* Service Card 2 */}
          <div className='p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <h4 className='text-2xl font-bold text-gray-900 mb-4 font-bebas'>🛣️ Route Optimization</h4>
            <p className='text-lg text-gray-700 font-montserrat'>
              We help you plan the most efficient routes to minimize fuel costs and maximize earnings.
            </p>
          </div>

          {/* Service Card 3 */}
          <div className='p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <h4 className='text-2xl font-bold text-gray-900 mb-4 font-bebas'>📄 Paperwork Management</h4>
            <p className='text-lg text-gray-700 font-montserrat'>
              From invoices to broker setup packets, we handle all your paperwork seamlessly.
            </p>
          </div>

          {/* Service Card 4 */}
          <div className='p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <h4 className='text-2xl font-bold text-gray-900 mb-4 font-bebas'>⏰ 24/7 Support</h4>
            <p className='text-lg text-gray-700 font-montserrat'>
              Our team is available around the clock to assist you with any trucking needs.
            </p>
          </div>

          {/* Service Card 5 */}
          <div className='p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <h4 className='text-2xl font-bold text-gray-900 mb-4 font-bebas'>🚛 No Forced Dispatch</h4>
            <p className='text-lg text-gray-700 font-montserrat'>
              You remain in full control, choosing the loads that work best for your schedule.
            </p>
          </div>

          {/* Service Card 6 */}
          <div className='p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <h4 className='text-2xl font-bold text-gray-900 mb-4 font-bebas'>🔎 Broker & Shipper Connections</h4>
            <p className='text-lg text-gray-700 font-montserrat'>
              We leverage our network to connect you with reliable brokers and shippers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;