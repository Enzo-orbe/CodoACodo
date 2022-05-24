import axios from "axios";

const URL = "https://api.themoviedb.org/3/";

const API_KEY = "9563507f47eee0aed740de6c1d5f03a9";

export const getMoviePoster = async (id) => {
  try {
    const response = await axios.get(`${URL}movie/${id}?api_key=${API_KEY}`);
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const getMostPopularMovies = async () => {
  try {
    const response = await axios.get(`${URL}movie/popular?api_key=${API_KEY}`);
    return response?.data;
  } catch (error) {
    return error;
  }
};

export const getMostPopularSeries = async () => {
  try {
    const response = await axios.get(`${URL}tv/popular?api_key=${API_KEY}`);
    return response?.data;
  } catch (error) {
    return error;
  }
};
