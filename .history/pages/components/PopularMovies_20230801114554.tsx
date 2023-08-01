import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { getPopular } from "../api/api";
import { useEffect, useState } from "react";
// import "swiper/css";
// import "swiper/css/navigation";
type Props = {};

function PopularMovies({}: Props) {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getPopular().then((results) => {
      setPopularMovies(results);
    });
  }, []);

  const search = (q) => {
    console.log({ q });
  };
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
        {popularMovies.map((movies) => (
          <SwiperSlide>
            <img className="rounded-md gradient-mask-b-80 object-cover hover:scale-110 duration-300 ease-out cursor-pointer" src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}></img>
            <div className="text-sm xl:text-xl">{movies.title}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default PopularMovies;
