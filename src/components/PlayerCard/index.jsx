import React from "react";
import Dropzone from "../Dropzone";
import { useParams } from "react-router-dom";
import { useGetPlayerByIdQuery } from "../../api/playersApi";
import PlayerCardRow from "./PlayerCardRow";
import { Button } from "react-bootstrap";
import { useDeletePlayerImageMutation } from "../../api/playersApi";

const PlayerCard = () => {
  const { playerId } = useParams();
  const { data } = useGetPlayerByIdQuery(playerId);
  const [deletePlayerImage] = useDeletePlayerImageMutation();

  const onDeleteImageClick = async () => {
    const answer = window.confirm("Are you sure?");
    if (answer) {
      deletePlayerImage(playerId);
      window.location.reload();
    }
  };

  return (
    <div className="row" style={{ marginLeft: 0 }}>
      <div
        style={{ maxHeight: "400px", backgroundColor: "#f5f5f5" }}
        className="col-sm-3 shadow-sm py-2"
      >
        <img
          className="block round-image-lg rounded-circle d-block mx-auto"
          style={{ height: "150px" }}
          src={data?.imageOriginalUrl}
          alt={data?.name}
        />
        <Dropzone playerId={playerId} />
        {!data?.imageOriginalUrl.includes("placeholder") && (
          <Button
            variant="danger"
            onClick={onDeleteImageClick}
            className="w-100 mt-4 d-block mx-auto"
          >
            Delete current image
          </Button>
        )}
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
          {data?.teams.map(({ name, teamId }) => (
            <li key={teamId}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlayerCard;
