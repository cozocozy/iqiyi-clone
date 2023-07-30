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

export const getMovie = async () => {
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
