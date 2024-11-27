import React from 'react'
import PageHeader from './common/PageHeader'
import SupportCard from './SupportCard'

const HowWeSupport = () => {
    return (
        <div className='w-full md:w-[70vw] mx-auto mt-[100px] text-center h-full'>
            <p className='text-5xl'>
                How we Support Your Claim of "Extraordinary Ability"
            </p>
            <div className=" flex items-center justify-evenly flex-wrap gap-6 mt-[50px] h-fit">
                <SupportCard />
                <SupportCard />
                <SupportCard />
            </div>

        </div>
    )
}

export default HowWeSupport