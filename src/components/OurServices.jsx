import React, { useRef, useState } from "react";
import camera from "../assets/camera.svg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const services = [
  { title: "PR for immigration" },
  { title: "Tech PR Agency for Startups" },
  { title: "Publishing Services" },
  { title: "Arts & Entertainment PR" },
  { title: "PR For Businesses" },
  { title: "Health and Medtech PR" },
  { title: "B2B PR" },
];

const OurServices = () => {
  const [active, setActive] = useState(0);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  const handleSlideTo = (index) => {
    swiperRef.current?.slideTo(index);
  };

  return (
    <div className="h-fit lg:h-screen justify-center items-center flex capitalize mt-[100px] lg:mt-0">
      <div className="h-fit lg:h-[70vh] w-[100vw] lg:w-[80vw] flex justify-between items-center flex-col lg:flex-row px-12">
        {/* Title */}
        <div className="w-full h-fit lg:h-[75%] lg:w-[20%] flex mb-[60px] lg:mb-0">
          <p className="text-[52px] leading-0 lg:w-[3ch] mb-4 lg:mb-0 font-bold">Our Services</p>
        </div>

        {/* Service List */}
        <div className="w-full h-fit lg:h-full lg:w-[40%]">
          <div className="justify-between hidden lg:flex flex-wrap gap-4 max-w-md mx-auto">
            {services.map((item, idx) => (
              <div
                key={idx}
                onClick={() => handleSlideTo(idx)}
                className="flex flex-col w-fit sm:w-[calc(50%-1rem)] mb-14 cursor-pointer hover:text-app-gray-4"
              >
                <p className="text-sm sm:text-base md:text-lg lg:text-[24px] mb-2">0{idx + 1}</p>
                <p className="font-serif font-semibold text-base sm:text-lg md:text-xl lg:w-[90%] lg:text-[24px]">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Slider Section */}
        <div className="w-fit lg:h-full h-fit lg:w-[32%] flex flex-col">
          <Swiper
            direction="vertical"
            modules={[Navigation, Autoplay]}
            loop
            autoplay={{ delay: 1500, disableOnInteraction: false }}
            speed={1000}
            className="w-full"
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
            }}
          >
            {services.map((service, idx) => (
              <SwiperSlide key={idx} className="flex justify-center h-full w-full">
                <Card
                  service={service}
                  nextText={services[(idx + 1) % services.length].title}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="w-full flex justify-between px-4 py-2 bg-purple-500 text-white">
            <button
              onClick={() => setActive((prev) => (prev === 0 ? services.length - 1 : prev - 1))}
              ref={prevRef}
              className="p-2 rounded-full"
            >
              <FaChevronLeft size={30} />
            </button>
            <button
              onClick={() => setActive((prev) => (prev === services.length - 1 ? 0 : prev + 1))}
              ref={nextRef}
              className="p-2 rounded-full"
            >
              <FaChevronRight size={30} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Card Component
const Card = ({ service, nextText }) => (
  <div className="bg-purple-500 shadow-2xl text-white p-8 h-full flex flex-col justify-between w-full relative">
    <div className="w-full">
      <div className="mb-6 w-full">
        <img src={camera} alt="camera" />
      </div>
      <h2 className="text-[48px] font-bold leading-tight mb-4">{service.title}</h2>
      <p className="text-[18px] font-sans font-medium w-[80%] leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo delectus totam fugit omnis cumque, rem ab quaerat vero expedita necessitatibus nobis numquam veniam, porro velit illo sapiente quasi.      </p>
    </div>
    <div className="flex justify-between items-end w-full px-4 transition-all duration-300 flex-col">
      <p className="text-sm font-light mb-4 w-[42%] text-right">{nextText}</p>
    </div>
  </div>
);

export default OurServices;