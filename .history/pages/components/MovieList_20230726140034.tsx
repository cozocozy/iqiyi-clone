import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

type Props = {};

function MovieList({ movies }: Props) {
  return (
    <div>
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
        modules={[Navigation]}
      >
        <img className="h-40" src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}></img>
        <div>{movies.title}</div>
      </Swiper>
    </div>
  );
}
export default MovieList;
