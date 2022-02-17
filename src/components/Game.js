import React from "react";
import { useState } from "react";
import calculateWinner from "../utils/winner";
import Board from "./Board";
import ResetButton from "./ResetButton";
import Head from "./Head";

function Game() {
  const [squares, setSquares] = useState([]);
  const [turn, setTurn] = useState(true);
  const [reset, setReset] = useState(false);
  const [winner, setWinner] = useState(null);

  function handleClick(i) {
    if (!winner && !squares[i]) {
      let updateSquares = squares;
      updateSquares[i] = turn ? "X" : "O";
      setSquares(updateSquares);
      let win = calculateWinner(updateSquares);
      if (win) {
        setWinner(win);
        setReset(true);
      }
      setTurn((x) => !x);
    }
  }

  function handleReset() {
    if (reset) {
      setSquares([]);
      setTurn(true);
      setWinner(false);
      setReset(false);
    }
  }

  return (
    <div className="game">
      <div className="game-card">
        <Head winner={winner} turn={turn} />
        <Board squares={squares} handleClick={handleClick} />
        <ResetButton reset={reset} handleReset={handleReset}>
          Reset
        </ResetButton>
      </div>
    </div>
  );
}

export default Game;
