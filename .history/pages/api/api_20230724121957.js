import React from "react";
import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY
const 
export const getMovieList = async () => {
  const movie = await axios.get(`${process.env.REACT_APP_BASEURL}/movie/popular?api_key=${process.env.REACT_APP_APIKEY}`);
  console.log(movie);
};

export const searchMovie = async (q) => {
  const search = await axios.get(q);
  console.log(search);
};
