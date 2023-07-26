import React from "react";
type Props = {};

function MovieList({ movies }: Props) {
  return (
    <div>
      <img className="flex flex-col rounded-lg items-center flex-shrink-0 snap-center transition-opacity cursor-pointer duration-200 overflow-hidden" src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}></img>
      <div>{movies.title}</div>
    </div>
  );
}
export default MovieList;
