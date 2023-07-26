import React from "react";
import { SwiperSlide } from "swiper/react";
type Props = {};

function MovieList({ movies }: Props) {
  return (
    <div className="flex flex-col space-y-5 items-center justify-center ">
      <img className="rounded-md gradient-mask-b-80 flex-shrink-0 object-cover h-screen w-screen" src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}></img>
      <div className="xl:text-2xl">{movies.title}</div>
    </div>
  );
}
export default MovieList;
