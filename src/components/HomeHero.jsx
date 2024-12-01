import React from 'react'
import homeVdo from "../assets/home.mp4"

const Hero = ({ label1, label2, label3, label4, label5, label6 }) => {
  return (
    <>
      <div className='h-[100vh]  bg-cover bg-no-repeat flex justify-center items-center font-serif font-medium relative inset-0 bg-black overflow-hidden'>
        <div className='absolute w-full' >
          <video src={homeVdo} autoPlay loop muted style={{ width: '100vw', height: 'auto' }} className='opacity-70'>
            Your browser does not support the video tag.
          </video>
        </div>
        <div className='w-full absolute text-center text-white  text-7xl z-20'>
          {label1 && <p className='mb-1'>{label1}</p>}
          {label4 && <p className='mb-1'>{label4.normal} <span className='italic'>{label4.italic}</span></p>}
          {label2 && <p className='mb-8'>{label2}</p>}
          {label3 && <p className='italic'>{label3}</p>}
          {label5 && <p className='text-3xl w-[68%] mx-auto'>{label5}</p>}
          {label6 && <p className='text-3xl w-full text-center'>{label6}</p>}
        </div>
      </div>
    </>

  )
}

export default Hero