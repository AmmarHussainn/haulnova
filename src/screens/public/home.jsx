import React from 'react';
import Navbar from '../../components/navbar';
import Images from '../../assets/Images';
import AboutUs from '../../components/aboutus';
import Services from '../../components/services';
import Footer from '../../components/footer';
import StatsSection from '../../components/statssection';
import DispatchService from '../../components/dispatchservice';
import RouteAssistance from '../../components/routeassistance';
import BeyondDispatchServices from '../../components/beyondespatchservice';
import PriceDispatchServices from '../../components/priceddispatched';
import FAQSection from '../../components/faqsections';

const Home = () => {
  return (
    <div className='  bg-[##ffffff]'>
      <Navbar />
      <div className=' w-full max-w-6xl font-bebas   mx-auto flex flex-col md:py-0 pt-24 lg:flex-row items-center h-full px-6 gap-6'>
        <div className='text-[#252525] lg:w-1/2 w-full text-center lg:text-left py-10'>
          <h1 className='text-4xl font-libre font-semibold mb-4'>
            Reliable Truck Dispatching Services for Owner-Operators & Fleet
            Owners
          </h1>
          <p className='text-lg font-libre '>
            Haul Nova provides expert truck dispatching services, helping
            owner-operators and fleet owners maximize profits with efficient
            load booking, route optimization, and 24/7 support. Get top-paying
            freight without the hassle!
          </p>
          <a
            className=' mt-6 inline-block px-8 py-3 cursor-pointer bg-[#878482] text-[#FFFFFF] font-semibold text-lg   rounded-lg shadow-lg hover:bg-[#444444] transition duration-300'
            href='/contactus'
          >
            Schedule a Call
          </a>
        </div>

        <div className='lg:w-1/2  w-full items-center h-full flex justify-center'>
          <img
            src={Images.mainbanner}
            alt='Luxury Carpet for Living Room - Al Dar Carpets'
            className='w-full h-[100%] md:h-[70%] max-w-lg object-contain '
          />
        </div>
      </div>
      <StatsSection />
      <DispatchService />
      <RouteAssistance />
      <BeyondDispatchServices />
      <PriceDispatchServices />
      <FAQSection />
      {/* <AboutUs/>
      <Services/> */}
      <Footer />
    </div>
  );
};

export default Home;
