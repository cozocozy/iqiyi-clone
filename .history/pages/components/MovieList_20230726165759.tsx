import React from "react";
import { SwiperSlide } from "swiper/react";
type Props = {};

function MovieList({ movies }: Props) {
  return (
    <div>
      <img className="rounded-md gradient-mask-b-80 object-cover h-40 w-full" src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}></img>
      <div className="xl:text-2xl">{movies.title}</div>
    </div>
  );
}
export default MovieList;
