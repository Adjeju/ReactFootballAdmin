import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const IsAuthed = ({ children }) => {
  const { isAuthed } = useSelector((state) => state.auth);
  return isAuthed ? <Navigate to="/admin/matches" /> : children;
};

export default IsAuthed;
