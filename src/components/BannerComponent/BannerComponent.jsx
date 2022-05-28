import React, { useContext } from "react";
import Logo from "../../assets/img/netflix-logo.jpg";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { BsPlayFill } from "react-icons/bs";
import { Box, Button, Flex, Icon, Heading } from "@chakra-ui/react";
import { MoviesContext } from "../../context/MoviesContext/MoviesContext";
import "./BannerComponent.css";

const BannerComponent = () => {
  const { data, error } = useContext(MoviesContext);

  return (
    <Box
      h="90vh"
      bgImage={
        data?.poster_path
          ? `https://image.tmdb.org/t/p/original${data?.poster_path}`
          : data?.backdrop_path
          ? `https://image.tmdb.org/t/p/original${data?.backdrop_path}`
          : Logo
      }
      bgRepeat="no-repeat"
      bgSize="cover"
      marginBottom="0"
      padding="0"
    >
      <Flex
        direction="column"
        alignItems="flex-start"
        justify="flex-end"
        h="100%"
        w="100%"
        bg="rgb(0 0 0 / 50%)"
      >
        <Flex direction="column" alignItems="flex-start" justify="start">
          <Heading padding="3" margin="3" color="white">
            {data ? data?.original_title : error ? "Netflix" : null}
          </Heading>
          <Flex>
            <Button
              variant="outline"
              color="white"
              padding="5"
              margin="5"
              className="button-banner"
            >
              <Icon as={BsPlayFill} w={6} h={6} />
              Reproducir
            </Button>
            <Button
              variant="outline"
              color="white"
              padding="5"
              margin="5"
              bg="rgb(0 0 0 / 70%)"
              border={"none"}
              className="button-banner"
            >
              <InfoOutlineIcon marginRight={"5px"} w={6} h={6} />
              Más Informacion
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default BannerComponent;
