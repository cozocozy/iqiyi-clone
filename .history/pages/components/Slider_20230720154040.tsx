import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        speed={1200}
        spaceBetween={30}
        centeredSlides={false}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper  w-full h-[18rem] mt-12 bg-gradient-to-t from-white to-zinc-800 opacity-80 lg:h-[50rem] lg:top-0 lg:-mt-1"
      >
        <SwiperSlide>
          <img src="https://wallpapercave.com/wp/wp5709958.jpg" alt="" />
          <div>Title</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://wallpapercave.com/wp/wp5709958.jpg" alt="" />
          <div>Title</div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img src="https://wallpapercave.com/wp/wp5709958.jpg" alt="" />
          <div>Title</div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img src="https://wallpapercave.com/wp/wp5709958.jpg" alt="" />
          <div>Title</div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img src="https://wallpapercave.com/wp/wp5709958.jpg" alt="" />
          <div>Title</div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
