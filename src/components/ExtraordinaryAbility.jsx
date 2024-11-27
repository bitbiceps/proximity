import React from 'react'
import femaleHand from "../assets/female-hand.png"

const ExtraordinaryAbility = () => {
  return (
    <div className='bg-app-purple-1 h-[400px] w-full flex justify-center items-centere text-white mt-[100px]'>
      <div className='w-full flex justify-center items-center px-0 lg:px-[300px] flex-col lg:flex-row'>
        <div className="w-[50vw] h-fit flex flex-col items-center justify-center">
          <p className='text-4xl mb-8'>
            Qualifying for a Green Card Based <br />
            on Extraordinary Ability
          </p>
          <p className='text-xl'>
            To be eligible for visas like EB-1A, O-1, or Global Talent, <br /> applicants must demonstrate extraordinary abilities in fields <br /> such as sciences, arts, education, business, or athletics. They <br /> should have a proven track record of achievements and <br /> recognition within their respective fields.
          </p>
        </div>
        <div className="w-[50vw] h-full overflow-hidden relative">
          <img src={femaleHand} alt="Female Hand" className='object-cover absolute -top-36 size-[700px] ' />
        </div>
      </div>
    </div>
  )
}

export default ExtraordinaryAbility