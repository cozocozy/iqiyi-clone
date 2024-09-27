import React from "react";
import axios from "axios";

export const getMovieList = async () => {
    const movie = await.axios.get(`${process.env.REACT_APP_BASEURL}/movie/popular`)
    console.log({getMovieList})
};

export const searchMovie = asnyc(q) => {
    const search = await.axios.get(q)
    return;
}