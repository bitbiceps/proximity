import React from 'react'
import femaleHand from "../assets/female-hand.png"
import hand from "../assets/hand.png"

const ExtraordinaryAbility = () => {
  return (
    <div className='bg-app-purple-1 h-[400px] w-full flex justify-center items-centere text-white mt-[100px]'>
      <div className='relative w-full flex justify-center items-center px-0 lg:px-[280px] flex-col lg:flex-row'>
        <div className="w-[55vw] h-fit flex flex-col items-center justify-center">
          <p className='text-[32px] mb-8'>
            Qualifying for a Green Card Based 
            on Extraordinary Ability
          </p>
          <p className='text-[18px]'>
            To be eligible for visas like EB-1A, O-1, or Global Talent, applicants must demonstrate extraordinary abilities in fields such as sciences, arts, education, business, or athletics. They should have a proven track record of achievements and recognition within their respective fields.
          </p>
        </div>
        <div className=" w-[50vw] h-full overflow-hidden ">
          <img src={hand} alt="Female Hand" className='object-cover right-[100px] top-0 h-[413px] w-[766px] absolute ' />
        </div>
      </div>
    </div>
  )
}

export default ExtraordinaryAbility