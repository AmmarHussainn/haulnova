import React from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import PricingFormation from '../../components/pricingformation';
import Services from '../../components/services';
import FAQSection from '../../components/faqsections';
import PriceDispatchServices from '../../components/priceddispatched';

const Pricing = () => {
  return (
    <>
      <Navbar />
      <section
        className='relative w-full h-screen bg-cover bg-center flex items-center px-6 md:px-16'
        style={{ backgroundImage: "url('/images/pricing-banner.png')" }}
      >
        <div className='max-w-xl  bg-opacity-50 text-white p-6 rounded-lg'>
          <h1 className='text-6xl font-bold mb-4 font-bebas'>Transparent Pricing</h1>
          <p className='text-2xl font-Montserrat'>
            Route One Dispatch: Where Transparency Drives Every Mile. No
            surprises, only upfront pricing for swift and reliable dispatch
            services.
          </p>
        </div>
      </section>

      <PricingFormation />
      <Services />
      <PriceDispatchServices />
      <FAQSection />
      <Footer />
    </>
  );
};

export default Pricing;
