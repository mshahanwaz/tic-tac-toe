import React from "react";

function GameHead({ winner, turn }) {
  return (
    <div className="game-head">
      {winner ? (
        winner === "D" ? (
          <h3 className="game-draw">Draw!!</h3>
        ) : (
          <h3 className="game-winner">
            Player <b>{winner}</b> wins!!
          </h3>
        )
      ) : (
        <>
          <h3 className={turn ? "active" : ""}>Player X</h3>
          <h3 className={!turn ? "active" : ""}>Player O</h3>
        </>
      )}
    </div>
  );
}

export default GameHead;
