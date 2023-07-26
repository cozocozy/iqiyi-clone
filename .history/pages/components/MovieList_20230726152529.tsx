import React from "react";
import { SwiperSlide } from "swiper/react";
type Props = {};

function MovieList({ movies }: Props) {
  return (
    <SwiperSlide>
      <img className="" src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}></img>
      <div>{movies.title}</div>
    </Swiperslide>
  );
}
export default MovieList;
