import { Box } from "@chakra-ui/react";
import React, { useContext } from "react";
import { MoviesContext } from "../../context/MoviesContext/MoviesContext";
import CarrouselComponent from "../CarrouselComponent/CarrouselComponent";

const SeriesComponent = () => {
  const { series } = useContext(MoviesContext);
  return (
    <Box bg="#141414">
      <CarrouselComponent title="Series Populares" data={series} />
    </Box>
  );
};

export default SeriesComponent;
