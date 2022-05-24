import React, { useContext, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import BannerComponent from "../components/BannerComponent/BannerComponent";
import MostPopularComponent from "../components/MostPopularComponent/MostPopularComponent";
import Navbar from "../components/Navbar/Navbar";
import SeriesComponent from "../components/SeriesComponent/SeriesComponent";
import { MoviesContext } from "../context/MoviesContext/MoviesContext";
import SpinnerComponent from "../components/Spinner/SpinnerComponent";

export default function Home() {
  const {
    loading,
    getMoviesPosterData,
    getMostPopularMoviesData,
    getMostPopularSeriesData,
  } = useContext(MoviesContext);

  useEffect(() => {
    getMoviesPosterData();
    getMostPopularMoviesData();
    getMostPopularSeriesData();
  }, []);

  return (
    <Box>
      {loading ? (
        <SpinnerComponent />
      ) : (
        <>
          <Navbar />
          <BannerComponent />
          <MostPopularComponent />
          <SeriesComponent />
        </>
      )}
    </Box>
  );
}
