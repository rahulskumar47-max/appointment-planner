import React from "react";

function Tile({ name, description }) {
  return (
    <div>
      <p className="tile-title">{name}</p>

      {Object.values(description).map((value, index) => (
        <p className="tile" key={index}>
          {value}
        </p>
      ))}
    </div>
  );
}

export default Tile;
