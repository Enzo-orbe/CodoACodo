import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/Auth/AuthContext";

const PrivateRoutes = ({ children }) => {
  const { localStorageData, getIsAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    getIsAuthenticated();
  }, []);

  const isAuthenticated = localStorageData?.isAuthenticated;

  if (isAuthenticated) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoutes;
