import React from "react";
import { SwiperSlide } from "swiper/react";
type Props = {};

function MovieList({ movies }: Props) {
  return (
    <div className="flex flex-col space-y-5 items-center justify-center cursor-pointer ">
      <img className="rounded-md gradient-mask-b-80 w-40 object-cover h-40" src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}></img>
      <div className="xl:text-2xl">{movies.title}</div>
    </div>
  );
}
export default MovieList;
