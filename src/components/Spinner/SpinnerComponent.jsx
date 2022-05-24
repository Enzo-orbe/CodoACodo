import React from "react";
import { Flex, Spinner } from "@chakra-ui/react";
import "./Spinner.css";

const SpinnerComponent = () => {
  return (
    <Flex justify="center" alignContent="center" className="spinner-container">
      <Spinner size="xl" color="red.500" />
    </Flex>
  );
};

export default SpinnerComponent;
