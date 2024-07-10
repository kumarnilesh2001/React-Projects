import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import Roledice from "./Roledice";
import { useState } from "react";
import Button, { OutlinedBtn } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [error, setError] = useState("");
  const [score, setScore] = useState(0);
  const [currentDice, setCurrentDice] = useState(1);
  const [SeletedNumber, setSelectedNumber] = useState();
  const [showRules, setShowRules] = useState(false);

  const resetScore = () => {
    setScore(0);
  };

  const rollDice = () => {
    if (!SeletedNumber) {
      setError("Please select a number to roll dice");
      return;
    }

    const random = Math.floor(Math.random() * 6 + 1);
    // eslint-disable-next-line no-unused-vars
    setCurrentDice(() => random);

    if (SeletedNumber === random) {
      setScore((perv) => perv + random);
    } else {
      setScore((perv) => perv - 2);
    }

    setSelectedNumber(undefined);

    return;
  };

  return (
    <GamePlayContainer>
      <div className="Top-section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          SeletedNumber={SeletedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>

      <Roledice currentDice={currentDice} rollDice={rollDice} />
      <div className="btns">
        <OutlinedBtn onClick={resetScore} text="Reset Score" />
        <Button
          onClick={() => setShowRules((prev) => !prev)}
          text={`${showRules ? "Hide" : "Show"} Rules`}
        />
      </div>

      {showRules && <Rules />}
    </GamePlayContainer>
  );
};

export default GamePlay;

const GamePlayContainer = styled.div`
  padding: 30px 100px;
  align-items: center;

  .Top-section {
    display: flex;
    justify-content: space-between;
  }

  .btns {
    display: flex;
    flex-direction: column;
    max-width: 320px;
    margin: 30px auto;
    gap: 20px;
  }
`;
