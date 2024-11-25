import image1 from "../../assets/tailorpr1.jpeg";
import image2 from "../../assets/tailorpr2.png";
import image3 from "../../assets/tailorpr3.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./TailorPR.css"
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const TailorPRData = [
  { image: image1, title:"PR for Immigration" },
  { image: image2, title:"Tech PR Agency for Startups" },
  { image: image3, title:"Tech PR Agency for Startups" },
  { image: image2, title:"Tech PR Agency for Startups" },
];

const TailorPR = () => {
  return (
    <div className="mt-[136px] w-full overflow-hidden">
      {/* Heading */}
      <div className="text-center text-[52px] text-[#201446] font-albara font-medium">
        Tailored PR Solutions for Every Need
      </div>

      {/* Image Section */}
      <div className="mt-[60px] pl-[200px]">
        <Swiper
          modules={[Pagination]}
          spaceBetween={450}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{clickable:true}}
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
              <div class="card h-[600px] w-[600px] rounded-2xl overflow-hidden cursor-pointer">
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