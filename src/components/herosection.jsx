import { useState } from "react";
import Images from "../assets/Images";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={Images.herovideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-0"></div> */}

      {/* Content Section */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full px-6 md:px-12 text-white">
        <div className="lg:w-1/2 w-full text-center lg:text-left py-10">
          <h1 className="text-4xl font-libre font-semibold mb-4">
            Reliable Truck Dispatching Services for Owner-Operators & Fleet Owners
          </h1>
          <p className="text-lg font-libre">
            Haul Nova provides expert truck dispatching services, helping
            owner-operators and fleet owners maximize profits with efficient
            load booking, route optimization, and 24/7 support. Get top-paying
            freight without the hassle!
          </p>
          <a
            className="mt-6 inline-block px-8 py-3 cursor-pointer bg-[#878482] text-[#FFFFFF] font-semibold text-lg rounded-lg shadow-lg hover:bg-[#444444] transition duration-300"
            href="/contactus"
          >
            Schedule a Call
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;