/* eslint-disable react/prop-types */
import styled from "styled-components";

const Roledice = ({ currentDice, rollDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt="" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default Roledice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
    font-weight: 500;
  }
`;
