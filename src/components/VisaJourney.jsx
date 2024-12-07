import React from 'react'
import girl2 from "../assets/girl-card.png"

const VisaJourney = () => {
    return (
        <div className='mt-[100px] flex-col xl:flex-row w-full items-center flex md:items-start lg:items-center justify-center h-fit gap-12'>
            <div className="w-full lg:w-[50%] ">
                <p className='text-[26px] font-semibold mb-10 text-[#201446]'>Start Your Visa Journey with Guaranteed Publicity</p>
                <p className='text-[20px] mb-10 text-[#201446]'>Whether it's the EB-1A, O-1, Global Talent Visa, or Green <br /> Card, published material in recognized media is key.</p>
                <p className='text-[20px] text-[#201446]'>In the US, applicants must meet USCIS criteria or show one- time achievements like major awards. Proof should include article details and translations if needed.</p>
            </div>
            <div className="w-full lg:w-[50%] overflow-hidden  ">
                <img src={girl2} alt="Girl" className='rounded-xl object-cover h-full hover:scale-110 transition-all duration-500 cursor-pointer' />
            </div>
        </div>
    )
}

export default VisaJourney