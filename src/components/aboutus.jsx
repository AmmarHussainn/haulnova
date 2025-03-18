import React from 'react';

const AboutUs = () => {
  return (
    <section id='aboutsection' className='bg-[##ffffff] py-20 px-6 lg:px-32'>
      <div className='max-w-7xl mx-auto text-center'>
        <h2 className='text-5xl font-extrabold text-[#252525] mb-8'>About Haul Nova</h2>
        <p className='text-xl text-[#252525] leading-relaxed mb-8'>
          <strong>Haul Nova</strong> is a premier truck dispatching service designed to empower
          <strong> owner-operators, independent truck drivers, and fleet owners</strong>. Our mission
          is to maximize your earnings while eliminating the stress of logistics management.
        </p>
        
        <p className='text-xl text-[#252525] leading-relaxed mb-8'>
          Our expert dispatchers specialize in <strong>securing high-paying loads, optimizing routes,</strong>
          and providing <strong>24/7 support</strong>. With Haul Nova, you can focus on the road while we handle
          the negotiations, paperwork, and coordination.
        </p>

       
      </div>
    </section>
  );
};

export default AboutUs;
