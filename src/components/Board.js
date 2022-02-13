import React from "react";
import Square from "./Square";

function Board(props) {
  return (
    <div className="board">
      {Array(9)
        .fill()
        .map((_, i) => (
          <Square
            key={i}
            value={props.squares[i]}
            onClick={() => props.handleClick(i)}
          />
        ))}
    </div>
  );
}

export default Board;
