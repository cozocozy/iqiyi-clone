import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
type Props = {};

function MovieList({ movies }: Props) {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="">
      <SwiperSlide>
        <img className="" src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}></img>
        <div>{movies.title}</div>
      </SwiperSlide>
    </Swiper>
  );
}
export default MovieList;
