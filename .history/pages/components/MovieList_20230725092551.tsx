import React from "react";

type Props = {};

function MovieList({ movie }: Props) {
  return (
    <div>
      <div>
        <img src={movie.poster_path} alt="" />
      </div>
      <div>
        <Link>
          <div>{movie.title}</div>
        </Link>
        <div>{movie.lang}</div>
      </div>
    </div>
  );
}
export default MovieList;
