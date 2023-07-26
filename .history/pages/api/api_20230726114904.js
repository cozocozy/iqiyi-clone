import React from "react";
import axios from "axios";

const apiKey = process.env.REACT_APP_TOKEN;
const baseUrl = process.env.REACT_APP_BASEURL;
const token = process.env.REACT_APP_TOKEN;
export const getMovieList = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTI4MWM4ZTA3MzZlMzQxNDFhNjA2ZWQ3MTA4NmY5NyIsInN1YiI6IjY0YmRmYzA5NThlZmQzMDBhY2UyNmNmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tXlgTd8pgbyDyj1tNRU9m350d9lzWdKpAfO8l8WTp60",
    },
  };

  fetch("https://api.themoviedb.org/3/movie/popular", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
  // const movie = await axios.get("https://api.themoviedb.org/3/movie/popular", { options });
  // console.log(movie.results);
  // return movie.results;
};

export const searchMovie = async (q) => {
  const search = await axios.get(q);
  console.log(search);
};
