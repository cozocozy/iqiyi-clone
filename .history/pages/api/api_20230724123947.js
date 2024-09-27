import React from "react";
import axios from "axios";

const apiKey = process.env.REACT_APP_APITOKEN;
const baseUrl = process.env.REACT_APP_BASEURL;
export const getMovieList = async () => {
  const movie = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`);
  console.log(movie);
};

export const searchMovie = async (q) => {
  const search = await axios.get(q);
  console.log(search);
};
