import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import digitalJournal from "../../assets/digital_journal.svg";
import bz from "../../assets/bz.png";
import indiaToday from "../../assets/india_today.png";
import cnbc from "../../assets/cnbc.png";
import { Autoplay } from "swiper/modules";

import l1 from "../../assets/logo/logo1.svg";
import l2 from "../../assets/logo/logo2.svg";
import l3 from "../../assets/logo/logo3.svg";
import l4 from "../../assets/logo/logo4.svg";
import l5 from "../../assets/logo/logo5.svg";
import l6 from "../../assets/logo/logo6.svg";
import l7 from "../../assets/logo/logo7.svg";
import l8 from "../../assets/logo/logo8.svg";
import l9 from "../../assets/logo/logo9.svg";
import l10 from "../../assets/logo/logo10.svg";
import l11 from "../../assets/logo/logo11.svg";
import l12 from "../../assets/logo/logo12.svg";
import l13 from "../../assets/logo/logo13.svg";
import l14 from "../../assets/logo/logo14.svg";
import l15 from "../../assets/logo/logo15.svg";
import prev from "../../assets/prev.png";
import next from "../../assets/next.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const GlobalNews = ({ innerPage }) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const slides = [
        { id: 1, src: l1, alt: "Digital Journal" },
        { id: 2, src: l2, alt: "India Today" },
        { id: 3, src: l3, alt: "CNBC" },
        { id: 4, src: l4, alt: "BZ" },
        { id: 5, src: l5, alt: "India Today" },
        { id: 6, src: l6, alt: "India Today" },
        { id: 7, src: l7, alt: "India Today" },
        { id: 8, src: l8, alt: "India Today" },
        { id: 9, src: l9, alt: "India Today" },
        { id: 10, src: l10, alt: "India Today" },
        { id: 11, src: l11, alt: "India Today" },
        { id: 12, src: l12, alt: "India Today" },
        { id: 13, src: l13, alt: "India Today" },
        { id: 14, src: l14, alt: "India Today" },
        { id: 15, src: l15, alt: "India Today" },
    ];
    

    return (
        <div className={`w-full ${!innerPage && 'py-36'}`}>

            {!innerPage && (
                < p className="text-app-blue-1 text-[62px] font-bold text-center mb-14">
                    Get Featured on Global News Sites
                </p>

            )}

            {/* Flex container for buttons and Swiper */}
            <div className={`w-full flex justify-between items-center ${innerPage ? 'md:w-[100%]' : 'md:w-[85%]'} mx-auto`}>
                {/* Previous Button */}
                <button ref={prevRef} aria-label="Previous">
                    <img src={prev} alt="Prev" />
                </button>

                {/* Swiper Carousel */}
                <div className="w-full md:w-[75%]">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
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
                                    className="w-[158px] h-[72px] object-contain"
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
        </div >
    );
};

export default GlobalNews;
