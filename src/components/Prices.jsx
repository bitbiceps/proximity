import React from 'react'
import PriceCard from './PriceCard'

const Prices = () => {
    return (
        <div className='w-full md:w-[70vw] mx-auto mt-[100px] text-center h-fit'>
            <p className='text-5xl'>
                Browse Plans
            </p>
            <div className="flex items-center gap-6 justify-evenly flex-wrap mt-[50px] h-fit">
                <PriceCard />
                <PriceCard />
                <PriceCard />
            </div>

        </div>
    )
}

export default Prices