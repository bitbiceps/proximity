import React from 'react'

const Hero = ({ label1, label2, label3 }) => {
  return (
    <div className='bg-map-bg h-[100vh]  bg-cover bg-no-repeat flex justify-center items-center font-serif font-medium'>
      <div className='text-white text-center text-7xl mt-40'>
        {label1 && <p className='mb-1'>{label1}</p>}
        {label2 && <p className='mb-2'>{label2}</p>}
        {label3 && <p className='italic'>{label3}</p>
        }
      </div>
    </div>
  )
}

export default Hero