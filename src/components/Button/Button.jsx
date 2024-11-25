import React from 'react'
import "./Button.css"
import { FaArrowRight } from 'react-icons/fa6'


const Button = () => {
    return (
        <button className="btn border-none outline-none bg-white flex items-center justify-center w-[160px] rounded-full p-1">
            <span className="btn-text w-full text-black">
                Get Started
            </span>
            <span className="btn-icon w-fit bg-app-aqua-1 text-black h-full rounded-full p-4 flex items-center justify-between">
                <p className='btn-icon-text'>Get Started</p>
                <FaArrowRight />
            </span>
        </button>
    )
}

export default Button