/* eslint-disable react/prop-types */

import Divcomponent from "./Divcomponent";
// import InfoComponent from "./InfoComponent";

const GameComponent = ({
  updateCurrentPlayerName,
  updateWinner,
  player1,
  player2,
  board,
  setBoard,
  currentPlayer,
  setCurrentPlayer,
  winner,
  setWinner,
}) => {
  function handleClick(i) {
    if (board[i] || winner) return;

    let newBoard = board.slice();
    newBoard[i] = currentPlayer;
    setBoard(newBoard);

    const winningPlayer = handleWinner(newBoard);
    if (winningPlayer) {
      setWinner(winningPlayer);
      updateWinner(winningPlayer);
    } else if (newBoard.every((cell) => cell)) {
      setWinner("Draw");
      updateWinner("Draw");
    } else {
      const nextPlayer = currentPlayer === "X" ? "O" : "X";
      setCurrentPlayer(nextPlayer);
      updateCurrentPlayerName(nextPlayer === "X" ? player1 : player2);
    }
  }

  function handleWinner(board) {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winConditions.length; i++) {
      const [a, b, c] = winConditions[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  }

  const getBorderClasses = (index) => {
    let classes =
      "w-[100%] h-[200px] flex items-center justify-center text-8xl shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] rounded-3xl ";
    if (index < 6) classes += "border-b-6  ";
    if (index % 3 !== 2) classes += "border-r-6 ";
    return classes;
  };

  return (
    <>
      <div className="grid grid-rows-3 grid-cols-3 w-[40%] cursor-pointer ">
        {board.map((cell, i) => {
          return (
            <Divcomponent
              key={i}
              text={cell}
              className={getBorderClasses(i)}
              onClick={() => handleClick(i)}
            />
          );
        })}
      </div>
    </>
  );
};

export default GameComponent;
