import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { ContextProvider } from "../../../App";
export default function PrivateRoute() {
  const [, LoggedInUser] = useContext(ContextProvider);
  return LoggedInUser.email ? <Outlet /> : <Navigate to="/" />;
}
