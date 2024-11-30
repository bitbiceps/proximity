import React from 'react'
import PriceCard from './PriceCard'

const Prices = () => {
    return (
        <div className='w-full md:w-[70vw] mx-auto mt-[159px] text-center h-fit'>
            <p className='text-[36px] font-semibold'>
                Browse Plans
            </p>
            <div className="flex items-center gap-6 justify-evenly  mt-[50px] h-fit">
                <PriceCard />
                <PriceCard />
                <PriceCard />
            </div>
        </div>
    )
}

export default Prices