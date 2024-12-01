import React from 'react'
import SupportCard from './SupportCard'

const HowWeSupport = () => {
    return (
        <div className='w-full md:w-[70vw] mx-auto mt-[100px] text-center h-full'>
            <p className='text-5xl'>
                How we Support Your Claim of "Extraordinary Ability"
            </p>
            <div className=" flex items-center justify-evenly  gap-6 mt-[54px] h-fit">
                <SupportCard />
                <SupportCard />
                <SupportCard />
            </div>
        </div>
    )
}

export default HowWeSupport