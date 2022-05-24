import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Accounts from "../pages/Accounts";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="*"
          element={
            <PrivateRoutes>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/accounts" element={<Accounts />} />
              </Routes>
            </PrivateRoutes>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
      </Routes>
    </>
  );
};

export default AppRouter;
