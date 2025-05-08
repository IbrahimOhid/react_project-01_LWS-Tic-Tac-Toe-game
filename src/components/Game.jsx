import { React, useState } from "react";
import Board from "./Board";
import History from "./History";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);
  const [currentMove, setCurrentMove] = useState(0);

  const currentSquare = history[currentMove];

  function handelPlay(nextSquares) {
    setXIsNext(!xIsNext);
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(move) {
    setCurrentMove(move);
    setXIsNext(move % 2 === 0);
  }

  const moves = history.map((square, move) => {
    let description;
    if (move > 0) {
      description = `Go to the Move # ${move}`;
    } else {
      description = `Go to Start the Game`;
    }
    return (
      <li key={move}>
        <button className='bg-teal-500 mb-3 py-1 px-2 border border-b-white' onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="mx-auto bg-[#ffcccc] gap-6 w-[650px] rounded-3xl mt-8 p-20 flex justify-center">
      <div>
        <Board xIsNext={xIsNext} squares={currentSquare} onPlay={handelPlay} />
      </div>
      <div>
        <History moves={moves} />
      </div>
    </div>
  );
};

export default Game;
