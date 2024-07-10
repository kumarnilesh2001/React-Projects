import styled from "styled-components";
import Button from "../styled/Button.jsx";

// eslint-disable-next-line react/prop-types
const StartPage = ({ toggle }) => {
  return (
    <MainPage>
      <img src="./images/dices.png" alt="image" />
      <div className="content">
        <h1>DICE GAME</h1>
        <Button text="Play Now" onClick={toggle} />
      </div>
    </MainPage>
  );
};

export default StartPage;

const MainPage = styled.div`
  display: flex;
  max-width: 1188px;
  margin: auto auto;
  align-items: center;
  height: 100vh;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .content h1 {
    font-size: 96px;
  }
`;
