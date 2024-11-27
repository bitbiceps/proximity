import React from 'react'
import girl2 from "../assets/girl-card.png"

const VisaJourney = () => {
    return (
        <div className='mt-[100px] flex-col xl:flex-row w-full items-center flex md:items-start lg:items-center justify-center h-fit gap-12'>
            <div className="w-full lg:w-1/2 text-app-gray-3">
                <p className='text-3xl font-semibold mb-10'>Start Your Visa Journey with Guaranteed <br /> Publicity</p>
                <p className='text-xl mb-10'>Whether it's the EB-1A, O-1, Global Talent Visa, or Green <br /> Card, published material in recognized media is key.</p>
                <p className='text-xl'>In the US, applicants must meet USCIS criteria or show one- <br />time achievements like major awards. Proof should include <br /> article details and translations if needed.</p>
            </div>
            <div className="w-full lg:w-1/2 overflow-hidden  ">
                <img src={girl2} alt="Girl" className='rounded-xl object-cover h-full' />
            </div>
        </div>
    )
}

export default VisaJourney