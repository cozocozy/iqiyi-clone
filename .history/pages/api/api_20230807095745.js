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

  const movie = await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=91281c8e0736e34141a606ed71086f97", { options });
  return movie.data.results;
};

//now playing TV series
export const getNowPlayingTV = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer` + token,
    },
  };

  const movie = await axios.get("https://api.themoviedb.org/3/tv/airing_today?api_key=91281c8e0736e34141a606ed71086f97", { options });
  return movie.data.results;
};

//Top rated tv series
export const getTopRatedTV = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer` + token,
    },
  };

  const movie = await axios.get("https://api.themoviedb.org/3/tv/top_rated?api_key=91281c8e0736e34141a606ed71086f97", { options });
  return movie.data.results;
};

//search
export const searchMovie = async (q) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer` + token,
    },
  };

  const movie = await axios.get("https://api.themoviedb.org/3/search/movie?qapi_key=91281c8e0736e34141a606ed71086f97", { options });
  return movie.data.results;
};
