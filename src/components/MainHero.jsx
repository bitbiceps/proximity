import React from 'react'
import { useState, useEffect } from 'react'
import animation from "../assets/animation-v-1.mp4"
import animation2 from "../assets/animation-v-2.mp4"
import animation3 from "../assets/animation-v-3.mp4"
export const MainHero = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [playVideo, setPlayVideo] = useState(false);
    

    useEffect(() => {
        // Expand the div after 2 seconds
        const timer = setTimeout(() => {
            setIsExpanded(true);
        }, 2000);

        // Start video playback after the div expands
        const videoTimer = setTimeout(() => {
            setPlayVideo(true);
        }, 2200);

        return () => {
            clearTimeout(timer);
            clearTimeout(videoTimer);
        };
    }, []);
    return (
        <div className='w-full h-[100vh]  px-[102px] flex flex-row'>
            <div className='w-[50%] '>

                <div className=' text-black md:text-[46px] mt-[150px] leading-[80px] mt animate-fade-in-up '>
                    <p className='font-semibold'>Unlocking your</p>
                    <p className=' font-semibold' >PR Potential with</p>
                    <p className='italic font-semibold'>Expertise and Innovation</p>
                </div>
                <div className=' mt-[50px] flex justify-start items-center lg:gap-[72px] md:gap-[72px] gap-[30px] '>
                    <button className=' border-black border-[1px] rounded-full px-[50px] py-[18px] text-black lg:text-[24px] text-[18px] font-medium hover:bg-black hover:text-white '>Get Started</button>
                    <button className=' border-black border-[1px] rounded-full px-[50px] py-[18px] text-black lg:text-[24px] text-[18px] font-medium hover:bg-black hover:text-white '>Our Services</button>
                </div>

            </div>
            <div className='w-[50%] flex flex-col gap-[10px] justify-center '>
                <div className='flex flex-row w-full h-[160px]  '>
                    <div
                        className={`transition-all duration-1000 ${isExpanded ? "w-[50%]" : "w-[160px]"
                            } border-black border-[1px] h-full rounded-full p-3`}
                    >
                        <div className="w-full h-full bg-green-400 rounded-full">
                            {playVideo && (
                                <video
                                    src={animation2}
                                    autoPlay
                                    loop
                                    muted
                                    className="h-full w-full object-cover rounded-full"
                                >
                                    Your browser does not support the video tag.
                                </video>
                            )}
                        </div>
                    </div>

                    <div className='w-[50%] pl-[20px] flex justify-start'>
                        <div className='h-[160px] w-[160px] rounded-full border-black border-[1px] p-3'>
                            <div className='w-full h-full rounded-full bg-red-700 '>
                                {/* image in circle  */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* second  */}
                <div className='flex w-full border-black border-[1px]  rounded-full h-[160px] p-3'>
                    <div className='w-full flex flex-row rounded-full bg-white justify-between'>
                        {/* circle  */}
                        <div className='w-[144px] h-full bg-red-200 rounded-full'>
                            {/* image in cicle  */}
                        </div>
                        <div className='w-[75%] rounded-full bg-blue-400 '>
                            <video
                                src={animation}
                                autoPlay
                                loop
                                muted
                                className='h-full w-full object-cover rounded-full'
                            >
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
                {/* third  */}

                <div className='flex flex-row w-full h-[160px] justify-end '>

                    <div className=' w-[50%] pr-[20px] flex justify-end'>
                        <div className='relative'>

                            {/* square decoration  */}
                            <div className='absolute right-0 top-0 bg-green-800 h-[80px] w-[80px]  '></div>
                            {/* circle decoration  */}
                            <div className='absolute right-0 top-0 bg-green-800 h-[160px] w-[160px] rounded-full flex justify-center items-center'>
                                <div className=' text-center text-white leading-[10px] '> <div className='mb-[10px]'><span className='text-[34px] '>12</span> <span className='text-[26px] '>+</span></div> <br /> <span className='text-[12px] '>years of </span><br /><span className='text-[12px] '> experience</span> </div>
                            </div>
                            {/* text in decoration  */}

                        </div>
                    </div>
                    <div
                        className={`transition-all duration-1000 ${isExpanded ? "w-[50%]" : "w-[160px]"
                            } border-black border-[1px] h-full rounded-full p-3`}
                    >
                        <div className='w-full h-full bg-green-400 rounded-full '>
                            {playVideo && (<video
                                src={animation3}
                                autoPlay
                                loop
                                muted
                                className='h-full w-full object-cover rounded-full'
                            >
                                Your browser does not support the video tag.
                            </video>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
