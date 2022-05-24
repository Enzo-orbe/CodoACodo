import React, { useContext } from "react";
import profile from "../../assets/img/profile.png";
import {
  Box,
  Flex,
  Image,
  ListItem,
  Tooltip,
  UnorderedList,
} from "@chakra-ui/react";
import { AuthContext } from "../../context/Auth/AuthContext";

const Navbar = () => {
  const { logout } = useContext(AuthContext);
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      padding="5px"
      width={"100%"}
      position={"absolute"}
      bg="rgb(0 0 0 / 10%)"
    >
      <Flex>
        <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />

        <UnorderedList
          display={"flex"}
          flexDirection="row"
          justifyContent={"space-between"}
          listStyleType="none"
          color={"#FFFF"}
        >
          <ListItem margin={"4px"} cursor="pointer">
            Inicio
          </ListItem>
          <ListItem margin={"4px"} cursor="pointer">
            Series
          </ListItem>
          <ListItem margin={"4px"} cursor="pointer">
            Peliculas
          </ListItem>
          <ListItem margin={"4px"} cursor="pointer">
            Novedades Populares
          </ListItem>
          <ListItem margin={"4px"} cursor="pointer">
            Mi Lista
          </ListItem>
        </UnorderedList>
      </Flex>

      <Flex>
        <Tooltip label="Cerrar Sesion">
          <Image
            onClick={logout}
            src={profile}
            boxSize="40px"
            objectFit="cover"
            alt="profile-image"
            cursor={"pointer"}
            borderRadius="5px"
          />
        </Tooltip>
        {/* </Link> */}
      </Flex>
    </Box>
  );
};

export default Navbar;
