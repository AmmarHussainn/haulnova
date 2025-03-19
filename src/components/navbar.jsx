import React, { useState } from 'react';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Images from '../assets/Images';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='bg-white/80 backdrop-blur-md h-[100px] px-6 py-4 fixed w-full top-0 z-50 shadow-sm border-b border-gray-200'>
      <div className='flex justify-between items-center max-w-7xl mx-auto'>
        {/* Logo */}
        <div>
          <a href='/'>
            <img src={Images.haulnovalogo} alt='haulnovalogo' className='w-20' />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className='lg:hidden text-gray-700 focus:outline-none'
          onClick={toggleMobileMenu}
        >
          <FontAwesomeIcon
            icon={isMobileMenuOpen ? faTimes : faBars}
            className='text-2xl'
          />
        </button>

        {/* Desktop Navigation */}
        <div className='hidden lg:flex space-x-8'>
          <a href='/' className='text-gray-700  transition duration-300'>
            Home
          </a>
          <a href='/contactus' className='text-gray-700  transition duration-300'>
            Contact Us
          </a>
        </div>
      </div>

      {/* Mobile Menu with Slide-in Animation */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-md z-40 transition-transform duration-500 ease-in-out transform ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className='p-6'>
          <button
            className='absolute top-4 right-6 text-gray-700 text-2xl'
            onClick={toggleMobileMenu}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <nav className='flex flex-col mt-16 space-y-4'>
            <a
              href='/'
              onClick={toggleMobileMenu}
              className='text-gray-700 text-lg py-3 border-b border-gray-200  transition duration-300'
            >
              Home
            </a>
            <a
              href='/contactus'
              onClick={toggleMobileMenu}
              className='text-gray-700 text-lg py-3 border-b border-gray-200  transition duration-300'
            >
              Contact Us
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;