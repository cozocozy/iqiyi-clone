import React from "react";

type Props = {};

function MovieList({ movies }: Props) {
  return (
    <div>
      <img className="w-20" src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}></img>
      <div>{movies.title}</div>
    </div>
  );
}
export default MovieList;
