/* eslint-disable react/prop-types */
import styled from "styled-components";

const NumberSelector = ({
  setError,
  error,
  SeletedNumber,
  setSelectedNumber,
}) => {
  const arr = [1, 2, 3, 4, 5, 6];

  const selectNumberhandler = (num) => {
    setSelectedNumber(num);
    setError("");
  };

  return (
    <NumberContainer>
      <div className="error">{error}</div>
      <div className="flex">
        {arr.map((num, i) => (
          <Box
            isSelected={num === SeletedNumber}
            onClick={() => selectNumberhandler(num)}
            key={i}
          >
            {num}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberContainer>
  );
};

export default NumberSelector;

const Box = styled.div`
  border: 1px solid black;
  height: 72px;
  width: 72px;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  background-color: ${({ isSelected }) => (isSelected ? "black" : "white")};
  color: ${({ isSelected }) => (!isSelected ? "black" : "white")};
`;

const NumberContainer = styled.div`
  .flex {
    display: flex;
    gap: 20px;
  }

  p {
    margin-top: 20px;
    font-size: 25px;
    font-weight: 600;
    text-align: end;
  }

  .error {
    color: red;
    font-size: 24px;
    font-weight: 600;
  }
`;
