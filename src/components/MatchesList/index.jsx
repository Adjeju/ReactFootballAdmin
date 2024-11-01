import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const MatchesList = ({ searchQuery, matches, clearSearch }) => {
  const navigate = useNavigate();

  const onMatchClick = (matchId) => {
    navigate(`/admin/matches/${matchId}`);
    clearSearch();
  };
  return (
    <div className="position-relative">
      {searchQuery.length >= 4 && (
        <div className="matches-list bg-white container px-0">
          {matches
            .map(({ awayTeamName, homeTeamName, scheduledStart, matchId }) => ({
              label: `${scheduledStart} ${homeTeamName} vs. ${awayTeamName}`,
              matchId,
            }))
            .filter(({ label }) =>
              label.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map(({ label, matchId }) => (
              <div
                className="matches-list-item"
                onClick={() => onMatchClick(matchId)}
                key={matchId}
              >
                {label}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default MatchesList;
