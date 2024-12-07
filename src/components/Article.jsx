import React from 'react'

const Article = ({ img, label, text }) => {
    return (
        <div className='flex flex-col items-center justify-center w-[381px] mb-[60px]'>
            <div className='w-full h-[314px] overflow-hidden border  rounded-2xl px-5 border-gray-300 cursor-pointer'>
                <img src={img} className='object-contain w-full h-full  hover:scale-110 transition-all duration-500' alt="" />
            </div>
            <div className='w-full mt-6'>
                <div className='flex flex-col items-start justify-center'>
                    <p className='text-[12px] leading-[16px] font-medium tracking-[2%] text-app-gray-2'>{label}</p>
                    <p className='font-bold mt-2 leading-[24px] text-[16px]'>{text}</p>
                </div>
            </div>
            <div className='w-full mt-[22px]'>
                <button className='w-full h-[60px] rounded-full text-xl bg-app-aqua-3 hover:opacity-75 cursor-pointer transition-all duration-500'>Read Article</button>
            </div>
        </div>
    )
}

export default Article