import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const { isAuthed } = useSelector((state) => state.auth);
  return isAuthed ? children : <Navigate to="/admin" />;
};

export default RequireAuth;
