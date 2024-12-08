import React, { useState } from 'react'
import camera from "../assets/camera.svg"
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";


const OurServices = () => {

  const services = [
    { title: "PR for immigration" },
    { title: "Tech PR Agency for Startups" },
    { title: "Publishing Services" },
    { title: "Arts & Entertainment PR" },
    { title: "PR For Businesses" },
    { title: "Health and Medtech PR" },
    { title: "B2B PR" },
  ]


  const [active, setActive] = useState(0)
  return (
    <div className='h-fit lg:h-screen justify-center items-center flex capitalize mt-[100px] lg:mt-0'>
      <div className='h-fit lg:h-[70vh] w-[100vw] lg:w-[80vw] flex justify-between items-center flex-col lg:flex-row px-12'>
        <div className='w-full h-fit lg:h-[75%] lg:w-1/5 flex mb-[60px] lg:mb-0'>
          <p className='text-[52px] leading-0 lg:w-[3ch] mb-4 lg:mb-0 font-bold'>
            Our Services
          </p>
        </div>
        <div className='w-full h-fit lg:h-full lg:w-1/3'>
          <div className="justify-between hidden lg:flex  flex-wrap gap-4 max-w-md mx-auto transition-all duration-1000">
            {/* Item 1 */}
            {services.map((item, idx) => (
              <div
                key={`${item + idx}`}
                onClick={() => setActive(idx)}
                className="flex flex-col w-fit sm:w-[calc(50%-1rem)] mb-14"
              >
                <p className="text-app-gray-4 text-sm sm:text-base md:text-lg lg:text-[24px] mb-6">
                  0{idx + 1}
                </p>
                <p className={`font-serif font-semibold text-base sm:text-lg md:text-xl lg:w-[90%] lg:text-[24px] ${(active == idx) ? "text-app-gray-4" : "text-[#161616]"}`}>
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className='w-full h-fit lg:w-1/3 lg:h-full flex items-center justify-center  overflow-hidden'>
          <Card services={services} active={active} setActive={setActive} />
        </div>
      </div>
    </div>
  )
}



const Card = ({ services, active, setActive }) => {

  const handlePrev = () => {
    if (active == 0) setActive(services.length - 1)
    else setActive(pre => pre - 1)
  }

  const handleNext = () => {
    if (active == services.length - 1) setActive(0)
    else setActive(pre => pre + 1)
  }

  return (
    <div
      className="bg-purple-500 shadow-2xl text-white p-8 h-full flex flex-col justify-between w-full overflow-hidden"
    >
      <div>
        {/* Icon */}
        <div className="mb-6 w-full">
          <img src={camera} alt="camera" />
        </div>

        {/* Title */}
        <h2 className="text-[48px] font-bold leading-tight mb-4">
          {services[active].title}
        </h2>

        {/* Description */}
        <p className="text-[18px] font-sans font-medium w-[80%] text-sm leading-relaxed mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris venenatis feugiat ex, at
          pretium risus vestibulum sed. Nullam cursus maximus ex, at vestibulum lectus consectetur
          quis.
        </p>
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-between items-end w-full px-4 transition-all duration-300 flex-col">
        {/* Footer Text */}
        <p className="text-sm font-light mb-4 w-[42%] text-right">
          {services[active + 1] ? services[active + 1].title : "Thanks"}
        </p>
        <div className="w-full flex items-center justify-between">
          <div className="p-2 text-app-gray-1 hover:text-white cursor-pointer">
            <FaChevronLeft size={40} onClick={handlePrev} />
          </div>
          <div className="p-2 text-app-gray-1 hover:text-white cursor-pointer">
            <FaChevronRight onClick={handleNext} size={40} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurServices