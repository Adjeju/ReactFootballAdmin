import React from "react";
import { useParams } from "react-router-dom";
import { useGetMatchByIdQuery } from "../../api/matchesApi";

const MatchCard = () => {
  const { matchId } = useParams();
  const { data } = useGetMatchByIdQuery(matchId);
  return <div>MatchCard</div>;
};

export default MatchCard;
