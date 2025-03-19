import React from 'react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import FAQSection from '../../components/faqsections'
import WhyChooseUsSection from '../../components/WhyChooseUsSection'
import FleetPrioritySection from '../../components/FleetPrioritySection'
import Images from '../../assets/Images'

const Dispatchservicesforowneroperators = () => {
    const fleetPriorityData = {
         image1: Images.truck2,
        image1Alt: 'Fleet of Trucks',
        sections1: [
          {
            title: 'Guiding your path, mile after mile',
            content:
              'As an owner-operator, you deserve nothing but the best, and thats what our team is dedicated to providing. When you choose our owner-operator dispatch service, you gain a committed ally on your journey.',
          },
          {
          
            content:
              'We understand the challenges you face, so our dispatchers work to secure top-paying loads and optimize your routes. As one of the leading dispatch companies for owner-operators, our mission is to empower you with quality logistics and support.',
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
        Dispatch services for owner operators

        </h2>
        <p className='text-[#878482] text-xl text-center font-Montserrat mt-2'>
        This is the ultimate dispatch service for owner-operators that will transform your business.


        </p>
      </div>
      <FleetPrioritySection data={fleetPriorityData}/>


      <WhyChooseUsSection/>
      <FAQSection/>
      <Footer />
   </>
  )
}

export default Dispatchservicesforowneroperators