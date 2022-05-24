import { createContext, useState } from "react";
import {
  getMoviePoster,
  getMostPopularMovies,
  getMostPopularSeries,
} from "../../services/movieDbService";

export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [data, setData] = useState();
  const [popular, setPopular] = useState();
  const [series, setSeries] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const getMoviesPosterData = async () => {
    setLoading(true);

    const result = await getMoviePoster(random(1, 1000000));
    if (result instanceof Error) {
      setError(result);
      setLoading(false);
    } else {
      setData(result);
      setLoading(false);
    }
  };

  const getMostPopularMoviesData = async () => {
    setLoading(true);
    try {
      const result = await getMostPopularMovies();
      setPopular(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const getMostPopularSeriesData = async () => {
    setLoading(true);
    try {
      const result = await getMostPopularSeries();
      setSeries(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MoviesContext.Provider
      value={{
        data,
        error,
        loading,
        popular,
        series,
        getMoviesPosterData,
        getMostPopularMoviesData,
        getMostPopularSeriesData,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
