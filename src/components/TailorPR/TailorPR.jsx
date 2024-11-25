import React, { useRef } from "react";


// react-icons
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import "./TailorPR.css"
import PageHeader from "../PageHeader";
import image1 from "../../assets/tailorpr1.jpeg";
import image2 from "../../assets/tailorpr2.png";
import image3 from "../../assets/tailorpr3.png";

const TailorPRData = [
  { image: image1, title: "PR for Immigration" },
  { image: image2, title: "Tech PR Agency for Startups" },
  { image: image3, title: "Tech PR Agency for Startups" },
  { image: image2, title: "Tech PR Agency for Startups" },
];

const TailorPR = () => {

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="mt-[136px] w-full overflow-hidden">
      {/* Heading */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-0 justify-between items-center w-[83vw] mx-auto">
        <PageHeader label={"Tailored PR Solutions for Every Need"} />
        <div className="flex gap-4">
          <div ref={prevRef} className="flex justify-center items-center w-fit h-fit text-2xl text-gray-400 border-gray-400 hover:text-app-blue-1 border-2 rounded-full hover:border-app-blue-1 p-2 cursor-pointer transition-colors">
            <FaArrowLeft />
          </div>
          <div ref={nextRef} className="flex justify-center items-center w-fit h-fit text-2xl text-gray-400 border-gray-400  hover:text-app-blue-1 border-2 rounded-full hover:border-app-blue-1 p-2 cursor-pointer transition-colors">
            <FaArrowRight  />
          </div>
        </div>
      </div>
      {/* Image Section */}
      <div className="mt-[60px] md:ml-[160px] p-4">
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={400}
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
          {TailorPRData.map((data, idx) => (
            <SwiperSlide key={`tailordata${idx}`}>
              <div class="card h-[600px] md:w-[600px] rounded-2xl overflow-hidden cursor-pointer">
                <div class="card__content h-full w-full  text-center relative p-20 transition-transform duration-1000 text-white font-bold rounded-2xl">
                  <div class="card__front rounded-2xl absolute top-0 bottom-0 right-0 left-0">
                    <img src={data.image} alt="Tailord Pr" className="h-full w-full object-cover" />
                  </div>
                  <div class="card__back  rounded-2xl absolute top-0 bottom-0 right-0 left-0 h-full w-full flex flex-col gap-12 justify-center items-start bg-app-blue-1 p-16 text-left">
                    <p className="text-4xl">
                      {data.title}
                    </p>
                    <p className="text-xl font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nihil unde alias, quas quo inventore necessitatibus reprehenderit reiciendis officiis autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, voluptates eos laborum commodi vero porro adipisci est eaque facere ullam, omnis esse iusto repellendus obcaecati totam consequatur quis!</p>
                    <p className="underline text-2xl font-thin cursor-pointer">Explore Package</p>
                  </div>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};


export default TailorPR