import { useState } from "react";
import "./App.css";
import StartPage from "./components/StartPage";
import GamePlay from "./components/GamePlay";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((perv) => !perv);
  };
  return (
    <>{isGameStarted ? <GamePlay /> : <StartPage toggle={toggleGamePlay} />}</>
  );
}

export default App;
