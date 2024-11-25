import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import digitalJournal from "../../assets/digital_journal.svg";
import bz from "../../assets/bz.png";
import indiaToday from "../../assets/india_today.png";
import cnbc from "../../assets/cnbc.png";
import { Autoplay } from "swiper/modules";

import prev from "../../assets/prev.png";
import next from "../../assets/next.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const GlobalNews = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const slides = [
        { id: 1, src: digitalJournal, alt: "Digital Journal" },
        { id: 2, src: indiaToday, alt: "India Today" },
        { id: 3, src: cnbc, alt: "CNBC" },
        { id: 4, src: bz, alt: "BZ" },
        { id: 5, src: indiaToday, alt: "India Today" },
    ];

    return (
        <div className="w-full py-36">
            <p className="text-app-blue-1 text-[62px] font-bold text-center mb-14">
                Get Featured on Global News Sites
            </p>

            {/* Flex container for buttons and Swiper */}
            <div className="w-full flex justify-between items-center md:w-[85%] mx-auto">
                {/* Previous Button */}
                <button ref={prevRef} aria-label="Previous">
                    <img src={prev} alt="Prev" />
                </button>

                {/* Swiper Carousel */}
                <div className="w-full md:w-[75%]">
                    <Swiper
                        modules={[Navigation, Pagination,Autoplay]}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                        }}
                        speed={1000}
                        className="w-full"
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                            // Assign navigation refs
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                        }}
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
                        {slides.map((slide) => (
                            <SwiperSlide key={slide.id} className="flex justify-center">
                                <img
                                    src={slide.src}
                                    alt={slide.alt}
                                    className="max-h-56 object-contain"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Next Button */}
                <button ref={nextRef} aria-label="Next">
                    <img src={next} alt="Next" />
                </button>
            </div>
        </div>
    );
};

export default GlobalNews;
