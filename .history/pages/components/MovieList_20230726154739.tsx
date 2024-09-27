import React from "react";
import { SwiperSlide } from "swiper/react";
type Props = {};

function MovieList({ movies }: Props) {
  return (
    <SwiperSlide>
      <img className="rounded-md shadow-[inset_0_-2px_8px_rgba(0,0,0,0.1)]" src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}></img>
      <div className="xl:text-2xl">{movies.title}</div>
    </SwiperSlide>
  );
}
export default MovieList;
