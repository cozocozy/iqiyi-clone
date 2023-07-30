import axios from "axios";

const apiKey = process.env.REACT_APP_TOKEN;
const baseUrl = process.env.REACT_APP_BASEURL;
const token = process.env.REACT_APP_TOKEN;

// Popular
export const getPopular = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer` + token,
    },
  };

  const movie = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=91281c8e0736e34141a606ed71086f97", { options });
  return movie.data.results;
};

//top rated
export const getTopRated = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer` + token,
    },
  };

  const movie = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=91281c8e0736e34141a606ed71086f97", { options });
  return movie.data.results;
};

//now playing
export const getNowPlaying = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer` + token,
    },
  };

  const movie = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=91281c8e0736e34141a606ed71086f97", { options });
  return movie.data.results;
};

//upcoming
export const getUpcoming = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer` + token,
    },
  };

  const movie = await axios.get("https://api.themoviedb.org/3/tv/on_the_air?api_key=91281c8e0736e34141a606ed71086f97", { options });
  return movie.data.results;
};

//latest
export const getLatest = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer` + token,
    },
  };

  const movie = await axios.get("https://api.themoviedb.org/3/movie/latest?api_key=91281c8e0736e34141a606ed71086f97", { options });
  return movie.data;
};
