import React from 'react'
import arrowDown from "../../assets/arrow_down.png"
import article1 from "../../assets/articles/article1.png"
import article2 from "../../assets/articles/article2.png"
import article3 from "../../assets/articles/article3.png"
import article4 from "../../assets/articles/article4.png"

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import "swiper/css";


const Journals = () => {

    const slides = [
        article1,
        article2,
        article3,
        article4,
        article1,
    ];
    return (
        <>
            <div className='w-full h-[568px] lg:h-[620px] bg-app-aqua-1 font-medium flex items-start py-12'>
                <div className='px-4 md:px-0 flex flex-col justify-center  gap-20 h-fit md:ml-28'>
                    <div className='w-full lg:w-[70%] xl:w-[40%]'>
                        <p className='text-[32px] lg:text-[52px]'>Our Placements dolor sit amet, cons ectetur adipiscing elit. Maecenas sed dolor sapien.</p>
                    </div>
                    <div className='text-2xl w-fit flex items-center justify-center gap-4'>
                        <p>Enjoy Our Journey</p>
                        <img src={arrowDown} alt="Arrow Down" />
                    </div>
                </div>
            </div>

            <div className='w-full -translate-y-48  md:-translate-y-36'>
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    speed={1500}
                    spaceBetween={20}
                    loop={true}
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
                        // For desktops (1024px)
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {slides.map((slide,idx) => (
                        <SwiperSlide key={slide + idx } className="flex justify-center bg-white">
                            <img
                                src={slide}
                                alt={'Article'}
                                className='h-[320px] object-cover w-full'
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>

    )
}

export default Journals