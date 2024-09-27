import React from "react";

type Props = {};

function MovieList({ movie }: Props) {
  return (
    <div>
      <div>
        <img src={movie.cover_url} alt="" />
      </div>
      <div className={styles.text}>
        <Link>
          <div>{movie.title}</div>
        </Link>
        <div>{movie.lang}</div>
      </div>
    </div>
  );
}
export default MovieList;
