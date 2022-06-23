import React, { useState } from "react";
import { Form } from "react-bootstrap";
import PlayersList from "../components/PlayersList";
import { useGetAllPLayersQuery } from "../api/playersApi";
import { Outlet } from "react-router-dom";

const PlayersPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data } = useGetAllPLayersQuery();
  const clearSearch = () => setSearchQuery("");
  return (
    <div>
      <h1>Players</h1>
      <hr />
      <Form.Control
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Type to find player..."
      />
      <PlayersList
        players={data?.players}
        searchQuery={searchQuery}
        clearSearch={clearSearch}
      />
      <hr />
      <Outlet />
    </div>
  );
};

export default PlayersPage;
