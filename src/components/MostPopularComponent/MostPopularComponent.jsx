import React, { useContext } from "react";
import { Box } from "@chakra-ui/react";
import { MoviesContext } from "../../context/MoviesContext/MoviesContext";
import CarrouselComponent from "../CarrouselComponent/CarrouselComponent";

const MostPopularComponent = () => {
  const { popular } = useContext(MoviesContext);

  return (
    <Box bg="#141414">
      <CarrouselComponent title="Peliculas Populares" data={popular} />
    </Box>
  );
};

export default MostPopularComponent;
