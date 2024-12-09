import React from 'react'

const Article = ({ img, label, text }) => {
    return (
        <div className='flex flex-col items-center justify-center w-[381px] mb-[60px] rounded-[40px] p-[20px] ' 
            style={{boxShadow: '0px 2px 22px 1px #1F2D3D40' }}
        >
            <div className='w-full h-[250px] overflow-hidden border  rounded-[30px] px-5 cursor-pointer'>
                <img src={img} className='object-cover w-full h-full hover:scale-110 transition-all duration-500' alt="image" />
            </div>
            <div className='w-full mt-6'>
                <div className='flex flex-col items-start justify-center'>
                
                    <p className='font-bold mt-2 leading-[24px] text-[16px]'>{label}</p>
                    <p className='text-[12px] leading-[14px] font-normal tracking-[2%] mt-[6px] text-[#6C6C6C] font-sans'>{text}</p>
                    
                   
                </div>
            </div>
            <div className='w-full mt-[22px] flex justify-end'>
                <button className='w-[200px] h-[60px] rounded-full text-xl bg-app-aqua-3 hover:opacity-75 cursor-pointer transition-all duration-500'>Read Article</button>
            </div>
        </div>
    )
}

export default Article