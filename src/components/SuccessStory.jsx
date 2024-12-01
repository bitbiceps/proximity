import React, { useRef } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'
import PageHeader from './common/PageHeader';
import man from "../assets/man.png"
import girl from "../assets/girl.png"

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SuccessStory = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const slides = [
        man, girl
    ]
    return (
        <div className="mt-[136px] w-full overflow-hidden">
            {/* Heading */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-0 justify-between items-center w-[83vw] mx-auto">
                <PageHeader label={"Success Stories"} />
                <div className="flex gap-4">
                    <div ref={prevRef} className="flex justify-center items-center w-fit h-fit text-2xl text-gray-400 border-gray-400 hover:text-app-blue-1 border-2 rounded-full hover:border-app-blue-1 p-2 cursor-pointer transition-colors">
                        <FaArrowLeft />
                    </div>
                    <div ref={nextRef} className="flex justify-center items-center w-fit h-fit text-2xl text-gray-400 border-gray-400  hover:text-app-blue-1 border-2 rounded-full hover:border-app-blue-1 p-2 cursor-pointer transition-colors">
                        <FaArrowRight />
                    </div>
                </div>
            </div>
            <div className='mt-[80px] w-[83vw] mx-auto'>
                <Swiper
                    modules={[Autoplay, Navigation]}
                    loop={true}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={100}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                        // Assign navigation refs
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                    pagination={{ clickable: true }}
                    speed={1000}
                    className="w-full"
                    breakpoints={{
                        // Default for mobile
                        0: {
                            slidesPerView: 1,
                        },
                        // For tablets (640px)
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 2,
                        },
                    }}
                >
                    {slides.map((data, idx) => (
                        <SwiperSlide key={`successstories${idx}`}>
                            <div className=' flex items-center justify-center w-fit h-fit  md:h-fit gap-8 flex-col md:flex-row'>
                                <div className='h-fit w-full md:w-fit  relative rounded-2xl overflow-hidden'>
                                    <img src={data} alt="Success" className=' h-[387px] w-[310px] object-cover' />
                                </div>
                                <div className=' w-full md:w-[280px]'>
                                    <p className='border-b border-app-gray-3 pb-1 text-[24px] font-medium clear-start mb-[36px] w-[70%]'>
                                        Lorem Ipsum
                                    </p>
                                    <p className='text-[#232323] text-[18px] font-light font-sans'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel lacus finibus, sagittis ipsum vel, varius ligula. Nunc magna sapien, bibendum at neque sit amet, blandit aliquam augue. Lorem ipsum dolor sit amet, consectet.
                                    </p>
                                </div>-
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default SuccessStory