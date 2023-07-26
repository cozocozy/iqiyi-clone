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
      Authorization: "Bearer" + token,
    },
  };

  fetch("https://api.themoviedb.org/3/movie/popular", options)
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
      return responseData;
    })
    .catch((err) => console.error(err));
  const movie = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=91281c8e0736e34141a606ed71086f97", { options });
  console.log(movie.results);
  return movie.results;
};

export const searchMovie = async (q) => {
  const search = await axios.get(q);
  console.log(search);
};
