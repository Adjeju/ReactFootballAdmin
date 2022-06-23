import React from "react";

const PlayerCardRow = ({ title, value }) => {
  return (
    <>
      <h4>{title}</h4>
      <p>{value}</p>
      <hr />
    </>
  );
};

export default PlayerCardRow;
