import React from "react";
import Tile from "../tile/Tile";

function TileList({ list }) {
  return (
    <div>
      {list.map((item, index) => (
        <Tile
          key={index}
          name={item.name}
          description={item}
        />
      ))}
    </div>
  );
}

export default TileList;
