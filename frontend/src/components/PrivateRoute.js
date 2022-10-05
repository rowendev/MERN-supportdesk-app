import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";
// import { Spinner } from "@chakra-ui/react";

const PrivateRoute = () => {
  const { loggedIn, loading } = useAuthStatus();

  if (loading) {
    return <h1>loading</h1>;
  }

  return loggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
