import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { getNowPlaying } from "../api/api";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <div className="-mx-4 lg:-mx-12">
      <Swiper
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
        className="mySwiper w-full ml-20 h-[20rem] mt-12 flex justify-center items-center bg-gradient-to-t  from-white contents[hello] to-zinc-900 opacity-80 lg:h-[50rem] lg:top-0 lg:-mt-1"
      >
        {nowPlayingMovies.map((movies) => (
          // <PopularMovies key={movies.id} movies={movies} />
          <SwiperSlide>
            <img className="rounded-md gradient-mask-b-80 object-cover hover:scale-110 duration-300 ease-out cursor-pointer" src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}></img>
            <div className="text-sm xl:text-xl">{movies.title}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
