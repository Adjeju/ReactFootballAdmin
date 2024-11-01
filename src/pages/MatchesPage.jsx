import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Navigate, Outlet } from "react-router-dom";
import { useGetAllMatchesQuery } from "../api/matchesApi";
import MatchesList from "../components/MatchesList";

const MatchesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const clearSearch = () => setSearchQuery("");
  const { data, error } = useGetAllMatchesQuery();

  if (error?.status === 401) {
    localStorage.removeItem("accessToken");
    return <Navigate to="/admin" />;
  }

  return (
    <div>
      <h1>Matches</h1>
      <hr />
      <Form.Control
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Type to find match..."
        aria-label="Default select example"
      />
      <MatchesList
        matches={data?.matches}
        searchQuery={searchQuery}
        clearSearch={clearSearch}
      />
      <hr />
      <Outlet />
    </div>
  );
};

export default MatchesPage;
