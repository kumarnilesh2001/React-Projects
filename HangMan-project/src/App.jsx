// import Form from "./components/Form";

import { Route, Routes } from "react-router-dom";
import StartGame from "./pages/StartGame";
import PlayGame from "./pages/PlayGame";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/start" element={<StartGame />} />
        <Route path="/Play" element={<PlayGame />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </div>
  );
};

export default App;
