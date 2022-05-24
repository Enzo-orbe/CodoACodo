import { Box } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { MoviesContext } from "../../context/MoviesContext/MoviesContext";
import CarrouselComponent from "../CarrouselComponent/CarrouselComponent";

const MostPopularComponent = () => {
  const { popular, getMostPopularMoviesData } = useContext(MoviesContext);

  // useEffect(() => {
  //   getMostPopularMoviesData();
  // }, []);

  return (
    <Box bg="#141414">
      <CarrouselComponent title="Peliculas Populares" data={popular} />
    </Box>
  );
};

export default MostPopularComponent;
