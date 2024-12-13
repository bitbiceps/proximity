import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const Article = ({ img, label, text }) => {
    return (
        <div className='flex flex-col items-center justify-center w-[381px] mb-[60px] shadow-md rounded-[20px] p-[20px] '
            
        >
            <div className='w-full h-[250px] overflow-hidden border  rounded-[10px] px-5 cursor-pointer'>
                <img src={img} className='object-cover w-full h-full hover:scale-110 transition-all duration-500' alt="image" />
            </div>
            <div className='w-full mt-6'>
                <div className='flex flex-col items-start justify-center'>

                    <p className='font-bold mt-2 leading-[24px] text-[16px]'>{label}</p>
                    <p className='text-[12px] leading-[14px] font-normal tracking-[2%] mt-[6px] text-[#6C6C6C] font-sans'>{text}</p>


                </div>
            </div>
            <div className="w-full mt-[22px] flex justify-end">
                <button className="group px-[25px] py-[10px] rounded-[15px] text-[18px] text-white bg-black cursor-pointer transition-all duration-500 flex flex-row justify-between gap-[20px] items-center">
                    Read Article
                    <div className="bg-white h-[5px] w-[5px] rounded-full transition-all duration-500 group-hover:h-[25px] group-hover:w-[25px] text-black flex justify-center items-center"><MdArrowOutward className='text-black'/></div>
                </button>
            </div>
        </div>
    )
}

export default Article