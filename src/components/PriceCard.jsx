import React from 'react'
import borderDashed from "../assets/dashed-border.png"
import ButtonVisa from './common/ButtonVisa/ButtonVisa'

const PriceCard = () => {
    return (
        <div className='min-h-[500px] max-h-fit w-[350px] bg-[#56FEFE] rounded-3xl text-center  px-8 py-12 cursor-pointer hover:scale-110 transition-all duration-500'>
            <p className='text-4xl font-bold text-app-blue-1'>
                BASIC
            </p>
            <p className='mt-4 font-sans'>
                Lorem ipsum dolor sit amet, consectetur
            </p>
            <p className='text-4xl font-bold mb-4 text-app-blue-1 mt-6'>
                999$
            </p>
            <img src={borderDashed} alt="Border Dashed" className='mt-6' />

            <div className='mt-6 w-full text-left'>
                <ul className="fonts-sans list-disc pl-5 font-semibold">
                    <li>Lorem ipsum dolor sit amet, <br /> consectetur</li>
                    <li>Lorem ipsum dolor sit amet, <br /> consectetur</li>
                    <li>Lorem ipsum dolor sit amet, <br /> consectetur</li>
                </ul>
            </div>
            <div className='mt-3 '>
                <ButtonVisa text={"Explore in Detail"} width='200px' />
            </div>
        </div>
    )
}

export default PriceCard