import React from 'react';
import { FaAngleDown } from "react-icons/fa6";


const Dropdown = ({ options, isOpen, setIsOpen, label, setState, state }) => {

    return (
        <div className="relative text-2xl w-fit">
            <button onClick={() => setIsOpen(!isOpen)} className='flex justify-center items-center cursor-pointer'>
                <span>
                    {label}
                </span>
                <span className="ml-6 inline-block transform transition-transform duration-300 text-base font-thin">
                    <FaAngleDown className={`transition-all ${isOpen && 'rotate-180'}`} />
                </span>
            </button>

            {isOpen && (
                <div className="absolute z-10 mt-1 w-fit bg-white rounded-md shadow-lg border border-gray-300">
                    <ul className="py-1">
                        {options.map((option) => (
                            <li
                                key={option}
                                className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100 w-full"
                                onClick={() => {
                                    setState([...state, option])
                                    setIsOpen(false);
                                }}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
