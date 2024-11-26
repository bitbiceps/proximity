import React from 'react'
import borderDashed from "../assets/dashed-border.png"
import Button from './Button/Button'

const PriceCard = () => {
    return (
        <div className='h-full w-[350px] bg-app-aqua-1 rounded-3xl text-center  px-8 py-12 cursor-pointer'>
            <p className='text-4xl font-bold text-app-blue-1'>
                BASIC
            </p>
            <p className='mt-4'>
                Lorem ipsum dolor sit amet, consectetur
            </p>
            <p className='text-4xl font-bold mb-4 text-app-blue-1 mt-6'>
                999$
            </p>
            <img src={borderDashed} alt="Border Dashed" className='mt-6' />

            <div className='mt-6 w-full text-left'>
                <ul class="list-disc pl-5 font-semibold">
                    <li>Lorem ipsum dolor sit amet, <br /> consectetur</li>
                    <li>Lorem ipsum dolor sit amet, <br /> consectetur</li>
                    <li>Lorem ipsum dolor sit amet, <br /> consectetur</li>
                </ul>
            </div>
            <div className='mt-6'>
                <Button />
            </div>
        </div>
    )
}

export default PriceCard