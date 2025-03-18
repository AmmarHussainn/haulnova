import React from 'react';
import Images from '../assets/Images';

const BigPictureSection = () => {
  return (
    <>
      <section className='flex flex-col md:flex-row items-center bg-gray-900 text-white p-8 md:p-0'>
        {/* Left Side: Image */}
        <div className='md:w-1/2 w-full'>
          <img
            src={Images.truck1}
            alt='Trucking Dispatch'
            className='w-full  object-cover'
          />
        </div>

        {/* Right Side: Text */}
        <div className='md:w-1/2 w-full p-6'>
          <h2 className='text-3xl font-bold mb-4'>
            Dispatch for trucking companies
          </h2>
          <p className='text-gray-300 mb-6'>
            We bring real-time tracking and seamless communication to the
            forefront so that you can say goodbye to delays and inefficiencies.
            Our commitment is to see your business thrive while being responsive
            and reliable, within just a call away.
          </p>
          <button className='bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg'>
            Learn More
          </button>
        </div>
      </section>

      <section className='flex flex-col md:flex-row items-center bg-[#f6f6f7] p-8 md:p-0'>
        {/* Right Side: Text */}
        <div className='md:w-1/2 w-full p-6'>
          <h2 className='text-3xl font-bold mb-4'>
            Dispatch for owner operators
          </h2>
          <p className='text-[#252525] mb-6'>
            You'll be working with dispatchers who know the road and the
            challenges. HaulNova One Dispatch team is comprised of experienced
            truck drivers. We guarantee daily loads and attractive pay for
            owner-operators.
          </p>
          <button className='bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg'>
            Learn More
          </button>
        </div>

        <div className='md:w-1/2 w-full'>
          <img
            src={Images.truck2}
            alt='Trucking Dispatch'
            className='w-full  object-cover'
          />
        </div>
      </section>
    </>
  );
};

export default BigPictureSection;
