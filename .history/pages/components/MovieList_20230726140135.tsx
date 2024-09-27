import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
type Props = {};

function MovieList({ movies }: Props) {
  return (
    <Swiper>
      <img className="h-40" src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}></img>
      <div>{movies.title}</div>
    </Swiper>
  );
}
export default MovieList;
