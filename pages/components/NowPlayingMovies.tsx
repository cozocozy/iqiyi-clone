import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { getNowPlaying } from "../api/api";
import { useEffect, useState } from "react";
import { CgPlayButtonO } from "react-icons/cg";
import {LazyLoadImage} from "react-lazy-load-image-component"


// import "swiper/css";
// import "swiper/css/navigation";
type Props = {};


function NowPlayingMovies({}: Props) {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  useEffect(() => {
    getNowPlaying().then((results) => {
      setNowPlayingMovies(results);
    });
  }, []);

  return (
    <div>
      <Swiper
        spaceBetween={20}
        slidesPerGroup={1}
        breakpoints={{
          280: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 6,
          },
          1280: {
            slidesPerView: 7,
          },
          1536: {
            slidesPerView: 8,
          },
        }}
        centeredSlides={false}
        modules={[Navigation]}
        className="flex w-full"
      >
        {nowPlayingMovies.map((movies, i) => (
          // <PopularMovies key={movies.id} movies={movies} />
          <SwiperSlide key={i}>
            <div className=" duration-500 group">
            <LazyLoadImage className=" rounded-md gradient-mask-b-80 object-cover group-hover:scale-110 group-hover:opacity-50" src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}></LazyLoadImage>
            <div className="absolute w-full h-[13rem] flex items-center justify-center hover:scale-110 inset-0 cursor-pointer opacity-0 hover:opacity-100">
            <CgPlayButtonO size={'3rem'} />
            </div>
            <div className="pt-2 group-hover:text-green-500 text-sm xl:text-xl">{movies.title}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default NowPlayingMovies;
