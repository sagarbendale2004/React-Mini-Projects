import React, { useState } from "react";

function TicTacToe() {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setisXTurn] = useState(true);

  const checkWin = () => {
    const arr = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [1, 5, 8],
      [2, 4, 6],
    ];

    for (let elem of arr) {
      const [a, b, c] = elem;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }

    return false;
  };

  const isWinner = checkWin();

  const handleClick = (index) => {
    if (state[index] !== null) {
      return;
    }
    const copy = [...state];
    copy[index] = isXTurn ? "X" : "O";
    setState(copy);
    setisXTurn(!isXTurn);
  };

  const handlePlay = () => {
    setState(Array(9).fill(null));
    setisXTurn(true);
  };

  return (
    <>
      {isWinner ? (
        <>
          {isWinner} won the game{" "}
          <button onClick={handlePlay}>Play again</button>{" "}
        </>
      ) : (
        <>
          <div className="row">
            <div className="square" onClick={() => handleClick(0)}>
              {state[0]}
            </div>
            <div className="square" onClick={() => handleClick(1)}>
              {state[1]}
            </div>
            <div className="square" onClick={() => handleClick(2)}>
              {state[2]}
            </div>
          </div>
          <div className="row">
            <div className="square" onClick={() => handleClick(3)}>
              {state[3]}
            </div>
            <div className="square" onClick={() => handleClick(4)}>
              {state[4]}
            </div>
            <div className="square" onClick={() => handleClick(5)}>
              {state[5]}
            </div>
          </div>
          <div className="row">
            <div className="square" onClick={() => handleClick(6)}>
              {state[6]}
            </div>
            <div className="square" onClick={() => handleClick(7)}>
              {state[7]}
            </div>
            <div className="square" onClick={() => handleClick(8)}>
              {state[8]}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default TicTacToe;
