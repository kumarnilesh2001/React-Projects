import { useState } from "react";
import Button from "../components/Button/Button";
import FormContainer from "../components/FormContainer";
import { useNavigate } from "react-router-dom";

const PlayerName = () => {
  const [player1Name, setPlayer1Name] = useState("");
  const [player2Name, setPlayer2Name] = useState("");
  const nagvigate = useNavigate();

  function handleOnSubmitbtn() {
    nagvigate("/play", {
      state: {
        player1: player1Name,
        player2: player2Name,
      },
    });
  }

  return (
    <div className="w-[80%] mx-auto h-[80vh] flex justify-center flex-col gap-10 items-center bg-slate-500 mt-3">
      <FormContainer
        label={"Enter Player 1 "}
        className={"w-[100%] px-16 py-3 rounded "}
        value={player1Name}
        onChange={(e) => {
          setPlayer1Name(e.target.value);
        }}
      />
      <FormContainer
        label={"Enter Player 2 "}
        className={"w-[100%] px-16 py-3 rounded "}
        value={player2Name}
        onChange={(e) => {
          setPlayer2Name(e.target.value);
        }}
      />
      <Button
        type={"button"}
        text={"Enter"}
        className={"rounded-lg"}
        weight="bold"
        size="25px"
        px="15%"
        onClick={handleOnSubmitbtn}
      />
    </div>
  );
};

export default PlayerName;
