/* eslint-disable react/prop-types */
import styled from "styled-components";
import Button from "./Button/Button";

const InfoComponent = ({
  player1,
  player2,
  currentPlayerName,
  winner,
  handleReset,
  currentPlayer,
}) => {
  return (
    <InfoComponentContainer className="w-[35%] h-[70vh] bg-[#134B70] rounded-3xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] text-[#EEEEEE]">
      <div>
        <h1 className="text-6xl text-center py-5">
          <span className="text-red-500">Lets</span> Begin
        </h1>
      </div>
      <div className=" py-6">
        <p className="text-3xl font-bold text-center py-5">{`Player 1 :- ${player1} `}</p>
        <p className="text-3xl font-bold text-center">{`Player 2 :- ${player2} `}</p>
      </div>

      <div className="pt-9">
        {winner ? (
          <div className="text-4xl text-center font-bold flex flex-col ">
            {winner === "Draw"
              ? "Come On!! It's a Draw"
              : `Yeah! The Winner Is ${currentPlayerName}`}
          </div>
        ) : (
          <p className="text-4xl text-center font-bold">{`It's Turn for ${currentPlayerName} ( ${currentPlayer} )`}</p>
        )}
      </div>

      <div className="h-52 flex justify-center items-center">
        <Button
          text="Reset Game"
          px="13%"
          py="20px"
          size="25px"
          className={"rounded-xl "}
          bgcolor={"#508C9B"}
          hovercolor="#1d3b4f"
          onClick={handleReset}
        />
      </div>
    </InfoComponentContainer>
  );
};

export default InfoComponent;

const InfoComponentContainer = styled.div`
  h1 {
    font-family: "Matemasie", sans-serif;
  }
`;
