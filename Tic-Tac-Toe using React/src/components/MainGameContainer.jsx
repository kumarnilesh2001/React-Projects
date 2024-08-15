import { useLocation } from "react-router-dom";
import GameComponent from "./GameComponent";
import InfoComponent from "./InfoComponent";
import { useState } from "react";

const MainGameContainer = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");

  const location = useLocation();
  const { player1, player2 } = location.state || {};

  const [currentPlayerName, setCurrentPlayerName] = useState(player1);
  const [winner, setWinner] = useState(null);

  function updateCurrentPlayerName(name) {
    setCurrentPlayerName(name);
  }

  function updateWinner(name) {
    setWinner(name);
  }

  function handleReset() {
    setCurrentPlayerName(player1);
    setWinner(null);
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
  }

  return (
    <div className="flex justify-center items-center gap-[100px] pt-16">
      <GameComponent
        player1={player1}
        player2={player2}
        updateCurrentPlayerName={updateCurrentPlayerName}
        updateWinner={updateWinner}
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
        setWinner={setWinner}
      />
      <InfoComponent
        player1={player1}
        player2={player2}
        currentPlayerName={currentPlayerName}
        winner={winner}
        handleReset={handleReset}
        currentPlayer={currentPlayer}
      />
    </div>
  );
};

export default MainGameContainer;
