import React from 'react'
import logo from "../../assets/logo.svg"
import { appRoutes, headerLinks } from '../../utils'
import { Link } from 'react-router-dom'
import { CiMenuFries } from "react-icons/ci";




const Header = ({ isHome }) => {
  return (
    <div className='absolute z-50 top-12 w-full h-fit px-14'>
      <div className={`p-4 text-white  bg-app-gray-1 h-fit mx-auto border-[0.77px] w-full ${isHome ? "border-app-gray-1" : "border-app-gray-2"} rounded-md`}>
        <div className='flex justify-between items-center  px-4 py-2'>
          {/* logo */}
          <Link to={appRoutes.root}>
            <div className='w-fit font-sans flex items-center justify-center gap-2 text-xl font-semibold  leading-4 cursor-pointer'>
              <img src={logo} alt="Logo" />
              <p>PROXIMITY</p>
            </div>
          </Link>
          <div className='w-fit hidden gap-10 justify-center items-center text-[14px]  font-serif font-semibold md:flex'>
            {headerLinks.map((item, idx) => (
              <Link key={item.label + idx} to={item.to} className='cursor-pointer'>
                {item.label}
              </Link>
            ))}
          </div>
          <div className='md:hidden w-fit h-fit justify-center items-center'>
            <CiMenuFries className='text-3xl' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header