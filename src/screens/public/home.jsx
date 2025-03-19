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
import HeroSection from '../../components/herosection';
import BigPictureSection from '../../components/bigpicture';

const Home = () => {
  return (
    <div className='  bg-[##ffffff]'>
      <Navbar />
     
      <HeroSection/>
      <StatsSection />
      <DispatchService />
      <BigPictureSection/>
      <RouteAssistance />
      <BeyondDispatchServices />
      <PriceDispatchServices />
      <FAQSection />
     
      <Footer />
    </div>
  );
};

export default Home;
