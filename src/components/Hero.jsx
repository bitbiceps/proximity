import React from 'react'

const Hero = ({ label1, label2, label3, label4, label5 }) => {
  return (
    <div className='bg-map-bg h-[100vh]  bg-cover bg-no-repeat flex justify-center items-center font-serif font-medium'>
      <div className='text-white text-center text-7xl mt-40'>
        {label1 && <p className='mb-1'>{label1}</p>}
        {label4 && <p className='mb-1'>{label4.normal} <span className='italic'>{label4.italic}</span></p>}
        {label2 && <p className='mb-8'>{label2}</p>}
        {label3 && <p className='italic'>{label3}</p>}
        {label5 && <p className='text-3xl w-[68%] mx-auto'>{label5}</p>}
      </div>
    </div>
  )
}

export default Hero