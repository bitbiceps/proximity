import React from 'react'
import "./Button.css"
import { FaArrowRight } from 'react-icons/fa6'


const Button = ({ text, width = "160px" }) => {
    return (
        <button style={{ width }} className="btn border-none outline-none bg-white flex items-center justify-center w-[160px] rounded-full relative h-[60px]">
            <span className="z-10 btn-text  text-app-blue-1 absolute top-0 left-0 h-full flex justify-start items-center pl-2">
                {text || 'Get Started'}
            </span>
            <span className=" z-20 btn-icon w-fit bg-app-aqua-1 h-fit text-black rounded-full p-4 flex items-center justify-between absolute right-1">
                <p className="btn-icon-text">{text || 'Get Started'}</p>
                <FaArrowRight />
            </span>
        </button>

    )
}

export default Button