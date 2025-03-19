import React from 'react';

const FleetPrioritySection = ({ data }) => {
  return (
    <section className='bg-white py-20 px-6 lg:px-32'>
      <div className='max-w-7xl mx-auto'>
        {/* Heading */}
        <h2 className='text-4xl font-bold text-gray-900 mb-8 text-center font-bebas'>
          {data.heading}
        </h2>

        {/* Description */}
        <p className='text-xl text-gray-700 leading-relaxed mb-12 text-center font-montserrat'>
          {data.description}
        </p>

        {/* Grid Layout */}
        <div className='grid md:grid-cols-2 gap-12'>
          {/* Right Column: Image */}
          <div className='flex items-center justify-center'>
            <img
              src={data.image1}
              alt={data.image1Alt}
              className='shadow-lg object-cover h-full hover:shadow-xl transition-shadow duration-300'
            />
          </div>

          {/* Left Column: Text Content */}
          <div className='space-y-8'>
            {data.sections1.map((section, index) => (
              <div
                key={index}
                className='p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'
              >
                <h3 className='text-2xl font-bold text-gray-900 mb-4 font-bebas'>
                  {section.title}
                </h3>
                <p className='text-lg text-gray-700 font-montserrat'>
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Second Grid Layout */}
        <div className='grid md:grid-cols-2 gap-12 mt-20'>
          {/* Left Column: Text Content */}
          <div className='space-y-8'>
            {data.sections2.map((section, index) => (
              <div
                key={index}
                className='p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'
              >
                <h3 className='text-2xl font-bold text-gray-900 mb-4 font-bebas'>
                  {section.title}
                </h3>
                <p className='text-lg text-gray-700 font-montserrat'>
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Image */}
          <div className='flex items-center h-full justify-center'>
            <img
              src={data.image2}
              alt={data.image2Alt}
              className='shadow-lg h-full object-cover hover:shadow-xl transition-shadow duration-300'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FleetPrioritySection;