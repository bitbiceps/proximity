import React, { useRef, useState } from "react";
import camera from "../assets/camera.svg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const services = [
  "PR for immigration",
  "Tech PR Agency for Startups",
  "Publishing Services",
  "Arts & Entertainment PR",
  "PR For Businesses",
  "Health and Medtech PR",
  "B2B PR",
];

const servicesData = [
  {title: "PR for immigration",
    content: "Our customized PR strategies elevate your immigration services, helping you build trust and credibility with audiences around the world.",
  },
  {title: "Tech PR Agency for Startups",
    content: "Our tech PR solutions help you amplify your company's presence, increasing visibility and influence in the dynamic tech industry through strategic publications.",
  },
  {title: "Publishing Services",
    content: "Our publishing PR services help you shape compelling narratives and share them effectively across diverse platforms, reaching the target audiences.",
  },
  {title: "Arts & Entertainment PR",
    content: "Our PR services for artists and entertainment are designed to craft compelling campaigns that elevate their visibility and recognition in the industry.",
  },
  {title: "PR For Businesses",
    content: "Our PR services are crafted to nurture the company’s reputation, promote valuable relationships, and drive growth through thoughtful media engagement. ",
  },
  {title : "Health and Medtech PR",
    content:"Our health and medical research PR services help organizations gain media coverage. It spotlights the success that truly matters to your audience. ",
  },
  {title: "B2B PR",
    content: "Our B2B PR services are customized to enhance your brand’s authority, build valuable business connections, and position you as a trusted leader in your industry.",
  },
];

const OurServices = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  const handleSlideTo = (index) => {
    swiperRef.current?.slideTo(index);
  };

  return (
    <div className=" h-fit lg:h-screen justify-center items-center flex capitalize lg:mt-0">
      <div className="h-fit lg:h-[660px] w-[100vw] lg:w-[80vw] flex justify-between items-center flex-col lg:flex-row ">
        {/* Title */}
        <div className="w-full h-fit lg:h-[75%] lg:w-[20%] flex mb-[60px] lg:mb-0">
          <p className="text-[52px] leading-0 lg:w-[3ch] mb-4 lg:mb-0 font-bold">Our Services</p>
        </div>

        {/* Service List */}
        <div className="w-full h-fit lg:h-full lg:w-[40%]">
          <div className="justify-between hidden lg:flex flex-wrap gap-4 max-w-md mx-auto">
            {services.map((title, idx) => (
              <div
                key={idx}
                onClick={() => handleSlideTo(idx)}
                className="flex flex-col w-fit sm:w-[calc(50%-1rem)] mb-10 cursor-pointer hover:text-app-gray-4"
              >
                <p className="text-sm sm:text-base md:text-lg lg:text-[24px] mb-2">0{idx + 1}</p>
                <p className="font-serif font-semibold text-base sm:text-lg md:text-xl lg:w-[90%] lg:text-[24px]">{title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Slider Section */}
        <div className="w-fit lg:h-full h-fit lg:w-[36%] flex flex-col">
          <Swiper
            direction="vertical"
            modules={[Navigation, Autoplay]}
            loop
            autoplay={{ delay: 1500, disableOnInteraction: false }}
            speed={1000}
            className="w-full h-full"
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
            {servicesData.map((service, idx) => (
              <SwiperSlide key={idx} className="flex justify-center h-full w-full shadow-2xl">
                <Card
                  serviceContent={service.content}
                  serviceTitle={service.title}
                  nextTitle={services[(idx + 1) % services.length]}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="w-full flex justify-between px-4 py-2 bg-purple-500 text-white">
            <button ref={prevRef} className="p-2 rounded-full">
              <FaChevronLeft size={30} />
            </button>
            <button ref={nextRef} className="p-2 rounded-full">
              <FaChevronRight size={30} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({serviceContent, serviceTitle, nextTitle }) => (
  <div className="bg-purple-500 text-white p-8 h-full flex flex-col justify-between w-full relative">
    <div className="w-full">
      <div className="mb-6 w-full">
        <img src={camera} alt="camera" />
      </div>
      <h2 className="text-[48px] font-bold leading-tight mb-4">{serviceTitle}</h2>
      <p className="text-[18px] font-sans font-medium w-[80%] leading-relaxed">
        {serviceContent}
      </p>
    </div>
    <div className="flex justify-between items-end w-full px-4 transition-all duration-300 flex-col">
      <p className="text-sm font-light mb-4 w-[55%] text-right">{nextTitle}</p>
    </div>
  </div>
);

export default OurServices;
