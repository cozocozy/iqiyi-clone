import React from "react";
import Link from "next/link";

function MovieLst({ movie }) {
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
