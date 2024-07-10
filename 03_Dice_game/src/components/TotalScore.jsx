import styled from "styled-components";

// eslint-disable-next-line react/prop-types
const TotalScore = ({ score }) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
  max-width: 200px;
  text-align: center;
  h1 {
    font-size: 100px;
    line-height: 100px;
    font-weight: bold;
  }

  p {
    font-size: 20px;
    font-weight: 600;
  }
`;
