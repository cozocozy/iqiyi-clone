import React from "react";

type Props = {};

function MovieList({ movies }: Props) {
  return (
    <div>
      <img src={`${process.env.REACT_APP_BASEIMGURL}/${movies.poster_path}`}></img>
      <div>{movies.title}</div>
    </div>
  );
}
export default MovieList;
