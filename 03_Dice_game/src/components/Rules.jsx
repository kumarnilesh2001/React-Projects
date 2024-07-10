import styled from "styled-components";

const Rules = () => {
  return (
    <RuleContainer>
      <h2>How to play Dice game</h2>
      <ul>
        <li>
          <p>Select any Number</p>
        </li>
        <li>
          <p>Click on dice Image</p>
        </li>
        <li>
          <p>
            After clicking on dice if selected number is equal to dice number
            you will get same point as dice
          </p>
        </li>
        <li>
          <p> if you get wrong guess then 2 points will be deducted</p>
        </li>
      </ul>
    </RuleContainer>
  );
};

export default Rules;

const RuleContainer = styled.div`
  background-color: #fbf1f1;
  padding: 20px;
  max-width: 70%;
  margin: 0 auto;

  h2 {
    font-size: 29px;
    font-weight: 700;
    text-align: center;
  }

  ul {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  ul li {
    list-style: none;
  }

  ul li p {
    font-size: 20px;
    font-weight: 500;
  }
`;
