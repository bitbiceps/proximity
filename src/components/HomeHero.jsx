import React from 'react';
import homeVdo from "../assets/testing/home.mp4";

const Hero = ({ label1, label2, label3, label4, label5, label6, vdo = homeVdo }) => {
  return (
    <>
      <div className='h-[100vh] bg-cover bg-no-repeat flex justify-center items-center font-serif font-medium relative inset-0 bg-black overflow-hidden'>
        <div className='absolute w-full'>
          <video
            src={vdo}
            autoPlay
            loop
            muted
            style={{ width: '100vw', height: 'auto' }}
            className='opacity-30'
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <div className='w-full absolute text-center text-white md:text-[52px] 2xl:text-6xl leading-[80px] z-20 animate-fade-in-up font-semibold'>
          {label1 && <p className='2xl:mb-6'>{label1}</p>}
          {label4 && (
            <p className='mb-1'>
              {label4.normal} <span className='italic'>{label4.italic}</span>
            </p>
          )}
          {label2 && <p  className='2xl:mb-6' >{label2}</p>}
          {label3 && <p className='italic'>{label3}</p>}
          {label5 && <p className='text-3xl w-[68%] mx-auto'>{label5}</p>}
          {label6 && <p className='text-3xl w-full text-center'>{label6}</p>}
          
        </div>
        <div className='absolute top-[70%] flex justify-center items-center lg:gap-[72px] md:gap-[72px] gap-[30px] '>
            <button className=' border-[#FFFFFF] border-[1px] rounded-[8px] px-[32px] py-[8px] text-[#FFFFFF] lg:text-[24px] text-[18px] font-medium hover:bg-[#ffffff] hover:text-[#2324FA] '>Get Started</button>
            <button className=' border-[#FFFFFF] border-[1px] rounded-[8px] px-[32px] py-[8px] text-[#FFFFFF] lg:text-[24px] text-[18px] font-medium hover:bg-[#ffffff] hover:text-[#2324FA] '>Our Services</button>
        </div>
        
        
        
      </div>
    </>
  );
};

export default Hero;
