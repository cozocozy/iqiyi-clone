import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
type Props = {};

function MovieList({ movies }: Props) {
  return (
    <div>
      <img className="h-40" src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}></img>
      <div>{movies.title}</div>
    </div>
  );
}
export default MovieList;
