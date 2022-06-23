import React from "react";
import Dropzone from "../Dropzone";
import { useParams } from "react-router-dom";
import { useGetPlayerByIdQuery } from "../../api/playersApi";
import PlayerCardRow from "./PlayerCardRow";

const PlayerCard = () => {
  const { playerId } = useParams();
  const { data } = useGetPlayerByIdQuery(playerId);
  return (
    <div className="row">
      <div
        style={{ height: "300px" }}
        className="col-sm-3 card bg-light py-4 shadow-sm"
      >
        <img
          className="block round-image-lg rounded-circle px-5 "
          src={data?.imageOriginalUrl}
          alt={data?.name}
        />
        <Dropzone />
      </div>
      <div className="col-sm-9">
        <PlayerCardRow title={"Name"} value={data?.name} />
        <PlayerCardRow title={"Birth Date"} value={data?.birthDate} />
        <PlayerCardRow title={"Birth Place"} value={data?.birthPlace} />
        <PlayerCardRow title={"Country"} value={data?.country} />
        <PlayerCardRow title={"Nationality"} value={data?.nationality} />
        <PlayerCardRow
          title={"Natural Position"}
          value={data?.naturalPosition}
        />
        <PlayerCardRow
          title={"Natural Position Side"}
          value={data?.naturalPositionSide}
        />
        <PlayerCardRow title={"Preferred Foot"} value={data?.preferredFoot} />
        <PlayerCardRow title={"Weight"} value={data?.weight} />
        <PlayerCardRow title={"Height"} value={data?.height} />
        <h4>Teams</h4>
        <ul>
          {data?.teams.map(({ name }) => (
            <li>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlayerCard;
