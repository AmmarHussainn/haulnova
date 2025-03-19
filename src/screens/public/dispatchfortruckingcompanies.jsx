import React from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import FleetPrioritySection from '../../components/FleetPrioritySection';
import WhyChooseUsSection from '../../components/WhyChooseUsSection';
import FAQSection from '../../components/faqsections';
import Images from '../../assets/Images';

const Dispatchfortruckingcompanies = () => {

    const fleetPriorityData = {
        heading: 'Your Fleet - Our Top Priority',
        description:
          'At Haul Nova, we take the wheel to drive your trucking business forward. With our customer-oriented approach, we treat your fleet as our own, ensuring effective dispatch solutions tailored to your unique needs.',
        image1: Images.truckrow,
        image1Alt: 'Fleet of Trucks',
        sections1: [
          {
            title: 'Advanced Technology & Expert Insights',
            content:
              'Our advanced technology and expert insights streamline your fleet’s performance, reducing costs and maximizing efficiency. Trust us to handle your dispatch needs, so you can focus on what matters most - growing your business. Your success is our destination!',
          },
          {
            title: 'Your Trucks, Our Dispatchers: Perfect Merge',
            content:
              'Our dispatchers for trucking companies are the driving force behind your trucking success. Efficiency is our hallmark, as we expertly coordinate routes, optimize schedules, and ensure on-time deliveries, thereby minimizing downtime and maximizing productivity.',
          },
        ],
        image2: Images.customersupportman,
        image2Alt: 'Customer Support',
        sections2: [
          {
            title: 'Real-Time Tracking & Communication',
            content:
              'We bring real-time tracking and seamless communication to the forefront so that you can say goodbye to delays and inefficiencies. Our commitment is to see your business thrive while being responsive and reliable, within just a call away.',
          },
          {
            title: '24/7 Support',
            content:
              'Our team is available around the clock to assist you with any trucking needs. Whether it’s a question, concern, or emergency, we’re here to help you every step of the way.',
          },
        ],
      };
  return (
    <>
      <Navbar />
      <div className='  px-6 py-30 bg-[#efeff1] md:px-16'>
        <h2 className='text-4xl font-bebas font-bold text-center mt-20'>
          Dispatch for Trucking Companies
        </h2>
        <p className='text-[#878482] text-xl text-center font-Montserrat mt-2'>
          Guiding you to success through our advanced dispatching services for
          trucking companies.
        </p>
      </div>
      <FleetPrioritySection data={fleetPriorityData}/>


      <WhyChooseUsSection/>
      <FAQSection/>
      <Footer />
    </>
  );
};

export default Dispatchfortruckingcompanies;
