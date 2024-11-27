import React from 'react'

const Article = ({ img, label, text }) => {
    return (
        <div className='flex flex-col items-center justify-center w-[477px] mb-6'>
            <div className='w-full h-[314px] overflow-hidden border  rounded-2xl px-5 border-gray-300'>
                <img src={img} className='object-cover w-full h-full' alt="" />
            </div>
            <div className='w-full mt-6'>
                <div className='flex flex-col items-start justify-center'>
                    <p className='text-sm text-app-gray-2'>{label}</p>
                    <p className='font-bold mt-2'>{text}</p>
                </div>
            </div>
            <div className='w-full mt-6'>
                <button className='w-full h-[60px] rounded-full text-xl bg-app-aqua-3 cursor-pointer'>Read Article</button>
            </div>
        </div>
    )
}

export default Article