import React from "react";
import axios from "axios";

const apiKey = process.env.REACT_APP_TOKEN;
const baseUrl = process.env.REACT_APP_BASEURL;
export const getMovieList = () => {};

export const searchMovie = async (q) => {
  const search = await axios.get(q);
  console.log(search);
};
