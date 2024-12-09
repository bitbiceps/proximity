import React, { useState, useEffect } from 'react';
import logo from "../../assets/logo.svg";
import logoBlue from "../../assets/logoBlue.svg";
import { appRoutes, headerLinks } from '../../utils';
import { NavLink } from 'react-router-dom';
import { CiMenuFries } from "react-icons/ci";

const Header = ({ isHome }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed z-50 left-0 w-[100vw] h-auto transition-all duration-700 ${
        isScrolled ? 'bg-app-gray-1 text-white shadow-md top-0 bg-gray-100 opacity-[97%]' : 'top-0'
      }`}
    >
      <div
        className={`p-2 text-white h-auto  border-[0.77px] ${
          isHome ? 'border-app-gray-1' : 'border-app-gray-2'
        } rounded-md transition-all duration-300 ${
          isScrolled ? 'w-full top-0 border-none rounded-none bg-gray-100 opacity-[100%]' : 'w-[100vw]'
        }`}
      >
        <div className='flex justify-between px-6 items-center  py-2'>
          {/* Logo */}
          <NavLink to={appRoutes.root}>
            <div className='w-fit font-sans flex items-center justify-center gap-2 text-xl font-semibold leading-4 cursor-pointer'>
              <img src={isScrolled ? logoBlue : logo} alt="Logo" />
              <p className={`${isScrolled ? 'text-[#2324FA]' : ''}`}>PROXIMITY</p>
            </div>
          </NavLink>
          {/* Navigation Links */}
          <div className='w-fit hidden gap-10 justify-center items-center text-[14px] font-serif font-semibold md:flex'>
            {headerLinks.map((item, idx) => (
              <NavLink
                key={item.label + idx}
                to={item.to}
                className={({ isActive }) =>
                  `cursor-pointer hover:text-[#2324FA] active:text-[#2324FA] ${
                    isActive ? 'text-[#2324FA]' : isScrolled ? 'text-black' : 'text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          {/* Mobile Menu Icon */}
          <div className='md:hidden w-fit h-fit justify-center items-center'>
            <CiMenuFries
              className={`text-3xl ${isScrolled ? 'text-black' : 'text-white'}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
