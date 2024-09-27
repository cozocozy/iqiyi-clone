import React from "react";
type Props = {};

function MovieList({ movies }: Props) {
  return (
    <div>
      <img className=" h-40relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar" src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}></img>
      <div>{movies.title}</div>
    </div>
  );
}
export default MovieList;
