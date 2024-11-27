import React from 'react';
import vector from "../../assets/vector.png";

const FeedBackCard = () => {
    const fullStars = Math.floor(4); // Number of full stars
    const emptyStars = 5 - fullStars; // Number of empty stars
    return (
        <div className='w-[400px] rounded-xl overflow-hidden shadow-2xl'>
            <div className='flex items-center gap-4 px-8 mt-6'>
                <div className='w-fit h-fit'>
                    {[...Array(fullStars)].map((_, index) => (
                        <span key={`full-${index}`} className="text-app-blue-1 text-2xl">
                            ★
                        </span>
                    ))}

                    {/* Render empty stars */}
                    {[...Array(emptyStars)].map((_, index) => (
                        <span key={`empty-${index}`} className="text-gray-300 text-2xl">
                            ★
                        </span>
                    ))}
                </div>
                <p className='text-lg font-semibold'>4/5</p>

            </div>
            <div className='px-8 mt-2'>
                <p className='text-[18px]'>
                    The team took time to understand our vision br and delivered a sleek, professional site that not only looks great but also improved our conversion rates. Their design process was smooth, communication was clear, and they met all deadlines. We’ve received numerous compliments on the new site, and it’s easier for customers to navigate.
                </p>
            </div>
            <div className=' relative'>
                <img src={vector} alt="Vector" />
                <div className='absolute top-20 left-5 w-full flex items-center gap-4'>
                    <div className="flex items-center justify-center bg-white text-app-blue-2 font-bold rounded-full w-16 h-16 text-2xl">
                        MW
                    </div>
                    <p className='text-white text-xl font-bold'>
                        Maxin Will
                    </p>

                </div>
            </div>
        </div>
    )
}

export default FeedBackCard