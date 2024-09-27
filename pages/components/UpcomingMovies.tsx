import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { getUpcoming } from "../api/api";
import { useEffect, useState } from "react";
<<<<<<< HEAD
import { CgPlayButtonO } from "react-icons/cg";
import {LazyLoadImage} from "react-lazy-load-image-component"


=======
>>>>>>> 96fea41977077dceda43ca01ea5be8f6ea3f3d65
// import "swiper/css";
// import "swiper/css/navigation";
type Props = {};

function UpcomingMovies({}: Props) {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    getUpcoming().then((results) => {
      setUpcomingMovies(results);
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
        {upcomingMovies.map((movies, i) => (
          // <PopularMovies key={movies.id} movies={movies} />
          <SwiperSlide key={i}>
<<<<<<< HEAD
            <div className=" duration-500 group">
            <LazyLoadImage className=" rounded-md gradient-mask-b-80 object-cover group-hover:scale-110 group-hover:opacity-50" src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}></LazyLoadImage>
            <div className="absolute w-full h-[13rem] flex items-center justify-center hover:scale-110 inset-0 cursor-pointer opacity-0 hover:opacity-100">
            <CgPlayButtonO size={'3rem'} />
            </div>
            <div className="pt-2 group-hover:text-green-500 text-sm xl:text-xl">{movies.title}</div>
            </div>
=======
            <img className="rounded-md gradient-mask-b-80 object-cover hover:scale-110 duration-300 ease-out cursor-pointer" src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}></img>
            <div className="text-sm xl:text-xl">{movies.title}</div>
>>>>>>> 96fea41977077dceda43ca01ea5be8f6ea3f3d65
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default UpcomingMovies;
