import { Route, Routes } from "react-router-dom";
import StartPageGame from "./pages/StartGamePage";
import PlayGamePage from "./pages/PlayGamePage";
import NavBar from "./components/NavBar";
import PlayerName from "./pages/PlayerName";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<StartPageGame />} />
        <Route path="/name" element={<PlayerName />} />
        <Route path="/Play" element={<PlayGamePage />} />
      </Routes>
    </div>
  );
};

export default App;
