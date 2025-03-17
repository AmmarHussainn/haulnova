import React, { useState } from 'react';
import {
  faTimes,
  faBars,
  faCaretDown,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Images from '../assets/Images';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCarpetMenuOpen, setCarpetMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleCarpetMenu = () => {
    setCarpetMenuOpen(!isCarpetMenuOpen);
  };

  return (
    <div className='bg-[#ffff] backdrop-blur-sm h-[100px] px-6  py-4 fixed w-full top-0 z-50'>

      
      <div className='flex justify-between items-center'>
        {/* Mobile Menu Toggle Button */}

        <div >
          <img src={Images.haulnovalogo} alt='haulnovalogo' className='w-20'/>
          
        </div>
        <button
          className='lg:hidden text-[#333333] focus:outline-none'
          onClick={toggleMobileMenu}
        >
          <FontAwesomeIcon
            icon={isMobileMenuOpen ? faTimes : faBars}
            className='text-[#333333] text-2xl'
          />
        </button>

        {/* Desktop Navigation */}
        <div className='hidden lg:flex space-x-4'>
          <a href='/' className='text-[#333333] p-2 hover:backdrop-blur-sm'>
            Home
          </a>
         
          <a href="/handicraftgallery" className="text-[#333333] p-2">About Us</a>
          <a href="/carpetservices" className="text-[#333333] p-2"> Services</a>
          <a href='/contactus' className='text-[#333333] p-2'>
            Contact Us
          </a>
        </div>

        {/* Logo */}
      
      </div>

      {/* Mobile Menu with Slide-in Animation */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[#FAFAFA] z-40 transition-transform duration-500 ease-in-out transform ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className='p-6'>
          <button
            className='absolute top-4 right-6 text-[#333333] text-2xl'
            onClick={toggleMobileMenu}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <nav className='flex flex-col mt-16 '>
            <a
              href='/'
              onClick={toggleMobileMenu}
              className='text-[#333333] text-lg border-b border-[#333333] py-2'
            >
              Home
            </a>
          
            {/* Carpet Dropdown in Mobile Menu */}
          
            <a href="/handicraftgallery" className="text-[#333333] border-b border-[#333333] p-2">About Us</a>
          <a href="/carpetservices" className="text-[#333333] border-b border-[#333333] p-2"> Services</a>
        
           
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
