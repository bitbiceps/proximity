import React from 'react'
import PageHeader from './PageHeader'
import SupportCard from './SupportCard'

const HowWeSupport = () => {
    return (
        <div className='w-[70vw] mx-auto mt-[100px] text-center h-fit'>
            <p className='text-5xl'>
                How we Support Your Claim of "Extraordinary Ability"
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-[50px] h-[480px]">
                <SupportCard />
                <SupportCard />
                <SupportCard />
            </div>

        </div>
    )
}

export default HowWeSupport