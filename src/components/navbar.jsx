import React, { useState } from 'react';
import { faTimes, faBars, faChevronDown, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Images from '../assets/Images';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isServicesOpen, setServicesOpen] = useState(false); // State for Services dropdown

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleServicesDropdown = () => {
    setServicesOpen(!isServicesOpen);
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
        <div className='hidden lg:flex space-x-8 items-center'>
          <a href='/' className='text-gray-700  transition duration-300'>
            Home
          </a>
          {/* Services Dropdown */}
          <div className='relative'>
            <button
              onClick={toggleServicesDropdown}
              className='text-gray-700  transition duration-300 flex items-center'
            >
              Services <FontAwesomeIcon icon={faChevronDown} className='ml-2 text-sm' />
            </button>
            {isServicesOpen && (
              <div className='absolute top-10 left-0 bg-white shadow-lg rounded-lg py-2 w-48'>
                <a
                  href='/dispatch-for-trucking-companies'
                  className='block px-4 py-2 text-gray-700 hover:bg-gray-100'
                >
                  Dispatch for Trucking Companies
                </a>
                <a
                  href='/dispatch-for-owner-operators'
                  className='block px-4 py-2 text-gray-700 hover:bg-gray-100'
                >
                  Dispatch for Owner Operators
                </a>
              </div>
            )}
          </div>
          <a href='/pricing' className='text-gray-700  transition duration-300'>
            Pricing
          </a>
          <a href='/contactus' className='text-gray-700  transition duration-300'>
            Contact Us
          </a>
          {/* Phone Number */}
          <a
            href='tel:602-529-6927'
            className='text-[#ffffff]  bg-[#ff6900] p-2 border rounded-lg transition duration-300 flex items-center'
          >
            (602) 529-6927
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
            {/* Mobile Services Dropdown */}
            <div className='relative'>
              <button
                onClick={toggleServicesDropdown}
                className='text-gray-700 text-lg py-3 border-b border-gray-200  transition duration-300 flex items-center justify-between w-full'
              >
                Services <FontAwesomeIcon icon={faChevronDown} className='text-sm' />
              </button>
              {isServicesOpen && (
                <div className='pl-4'>
                  <a
                    href='/dispatch-for-trucking-companies'
                    onClick={toggleMobileMenu}
                    className='block py-2 mt-4 text-gray-700 '
                  >
                    Dispatch for Trucking Companies
                  </a>
                  <a
                    href='/dispatch-for-owner-operators'
                    onClick={toggleMobileMenu}
                    className='block py-2 text-gray-700 '
                  >
                    Dispatch for Owner Operators
                  </a>
                </div>
              )}
            </div>
            <a
              href='/pricing'
              onClick={toggleMobileMenu}
              className='text-gray-700 text-lg py-3 border-b border-gray-200  transition duration-300'
            >
              Pricing
            </a>
            <a
              href='/contactus'
              onClick={toggleMobileMenu}
              className='text-gray-700 text-lg py-3 border-b border-gray-200  transition duration-300'
            >
              Contact Us
            </a>
            {/* Phone Number in Mobile Menu */}
            <a
            href='tel:602-529-6927'
            className='text-[#ffffff]  bg-[#ff6900] p-2 border rounded-lg transition duration-300 flex items-center'
          >
            (602) 529-6927
          </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;