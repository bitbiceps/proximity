import React from 'react'
import man2 from "../assets/man2.png"


const Qualifying = () => {
  return (
    <div className='absolute top-0 left-0 w-full h-full py-4 px-8 flex justify-center items-center'>
      <div className='w-1/2 h-[90%] flex items-center justify-center'>
        <img src={man2} alt="Business Man" className='object-contain h-[697px]' />
      </div>
      <div className='w-1/2 h-fit text-white'>
        <p className='text-[40px]'>
          Qualifying for a Green Card <br /> Based on Extraordinary <br /> Ability
        </p>
        <p className='mt-[40px] text-[18px] h-fit w-[80%]'>
          Individuals excelling in various fields like sciences, arts, education, business, or athletics can secure a green card without a job offer through the EB-1 visa category.
        </p>
        <p className='mt-[40px] text-[18px] h-fit w-[80%]'>
          Criteria include sustained national or international acclaim, intent to continue work in the U.S., and benefiting the country substantially. USCIS defines "extraordinary ability" as top-tier expertise, evidenced by sustained acclaim and recognized achievements.
        </p>
        <p className='mt-[40px] text-[18px] h-fit w-[80%]'>
          Applicants must have either a major internationally recognized award or demonstrate acclaimed work in their field, meeting at least three of ten specific criteria. USCIS processing time varies from 3 to 12 months, with premium processing available for quicker review. While no specified minimum publications are required, having at least 5 well-cited publications is recommended to strengthen the application.
        </p>
      </div>
    </div>
  )
}

export default Qualifying