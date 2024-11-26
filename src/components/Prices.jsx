import React from 'react'
import PriceCard from './PriceCard'

const Prices = () => {
    return (
        <div className='w-[70vw] mx-auto mt-[100px] text-center h-fit'>
            <p className='text-5xl'>
                Browse Plans
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-[50px] h-[480px]">
                <PriceCard />
                <PriceCard />
                <PriceCard />
            </div>

        </div>
    )
}

export default Prices