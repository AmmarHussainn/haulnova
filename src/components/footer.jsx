import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-[#252525] text-[#ffffff] py-10 px-6 lg:px-32'>
      <div className='max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left'>
        {/* Company Info */}
        <div>
          <h3 className='text-2xl font-bold mb-4'>Haul Nova</h3>
          <p className='text-[#ffffff] text-lg'>
            Reliable truck dispatching services to keep your business moving forward.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className='text-xl font-semibold mb-4'>Quick Links</h4>
          <ul className='space-y-2 text-[#ffffff]'>
            <li><a href='/' className='hover:text-[#ffffff] transition'>Home</a></li>
           <li><a href='/contactus' className='hover:text-[#ffffff] transition'>Contact</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className='text-xl font-semibold mb-4'>Contact Us</h4>
          {/* <p className='text-[#ffffff]'>📍 123 Logistics St, City, State</p> */}
          <p className='text-[#ffffff]'>📧 dispatch@haulnova.com</p>
          <p className='text-[#ffffff]'>📞 (602) 529-6927</p>
          
          {/* Social Media Icons */}
          {/* <div className='flex justify-center md:justify-start space-x-4 mt-4'>
            <a href='#' className='text-[#ffffff] hover:text-[#ffffff] transition'><FaFacebookF size={20} /></a>
            <a href='#' className='text-[#ffffff] hover:text-[#ffffff] transition'><FaTwitter size={20} /></a>
            <a href='#' className='text-[#ffffff] hover:text-[#ffffff] transition'><FaLinkedinIn size={20} /></a>
            <a href='#' className='text-[#ffffff] hover:text-[#ffffff] transition'><FaInstagram size={20} /></a>
          </div> */}
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className='text-center text-[#ffffff] text-sm mt-10 border-t border-gray-700 pt-6'>
        © {new Date().getFullYear()} Haul Nova. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
