import React from "react";

import { searchMovies } from "../api/api";
import { useEffect, useState } from "react";
type Props = {};

function search({}: Props) {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    searchMovies().then((results) => {
      setUpcomingMovies(results);
    });
  }, []);

  return (
    <div>
      <div>
        {upcomingMovies.map((movies, i) => (
          // <PopularMovies key={movies.id} movies={movies} />
          <div key={i}>
            <img className="rounded-md gradient-mask-b-80 object-cover hover:scale-110 duration-300 ease-out cursor-pointer" src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}></img>
            <div className="text-sm xl:text-xl">{movies.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default search;
