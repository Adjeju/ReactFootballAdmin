import React from "react";
import { useNavigate } from "react-router-dom";

import "./index.css";

const PlayersList = ({ searchQuery, players, clearSearch }) => {
  const navigate = useNavigate();
  const onPlayerClick = (playerId) => {
    navigate(`/admin/players/${playerId}`);
    clearSearch();
  };
  return (
    <div className="position-relative">
      {searchQuery && (
        <div className="players-list bg-white container px-0">
          {players
            .filter(({ name }) =>
              name.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map(({ playerId, name }) => (
              <div
                className="players-list-item"
                onClick={() => onPlayerClick(playerId)}
                key={playerId}
              >
                {name}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default PlayersList;
