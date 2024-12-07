import React from 'react'
import phone from "../assets/phone.png"

const PhoneCard = ({ label, text }) => {
    return (
        <div className='w-full md:w-[46vw] lg:w-[32vw] h-[460px] border rounded-2xl px-14 pt-12 overflow-hidden hover:border-blue-600 transition-all duration-700'>
            <div className='flex flex-col gap-6'>
                <div>
                    <p className='text-[22px] mb-4 font-semibold'>
                        {label}
                    </p>
                    <p className='text-base text-app-gray-2'>
                        {text}
                    </p>
                </div>
                <div className='bg-app-aqua-2 rounded-t-2xl pt-5 h-fit'>
                    <img src={phone} alt="Phone" className='translate-y-[50px] object-contain w-[219px] mx-auto cursor-pointer hover:translate-y-0 transition-transform duration-500' />
                </div>
            </div>
        </div>
    )
}

export default PhoneCard

