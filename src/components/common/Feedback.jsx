import React, { useRef } from 'react';
import FeedBackCard from './FeedBackCard';
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const Feedback = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="w-full md:w-[75vw] mx-auto mt-[100px]">
      <p className="text-5xl text-center">What Our Customers Are Saying</p>
      <div className="relative overflow-visible mt-[50px] group">
        {/* Carousel Container */}

        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
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
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <FeedBackCard />
          </SwiperSlide>
          <SwiperSlide>
            <FeedBackCard />
          </SwiperSlide>
          <SwiperSlide>
            <FeedBackCard />
          </SwiperSlide>
          <SwiperSlide>
            <FeedBackCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Feedback;