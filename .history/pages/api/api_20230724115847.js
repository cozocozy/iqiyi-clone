import React from "react";
import axios from "axios";

export const getMovieList = async () => {
    const movie = await.axios.get(`${process.env.REACT_APP_BASEURL}/movie/popular`)
    return;
};

export 