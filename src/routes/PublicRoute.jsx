import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/Auth/AuthContext";

const PublicRoute = ({ children }) => {
  const { localStorageData, getIsAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    getIsAuthenticated();
  }, []);

  const isAuthenticated = localStorageData?.isAuthenticated;
  if (isAuthenticated) {
    return <Navigate to="/accounts" />;
  } else {
    return children;
  }
};

export default PublicRoute;
