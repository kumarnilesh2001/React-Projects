import styled from "styled-components";

// eslint-disable-next-line react/prop-types
const Button = ({ text, ...rest }) => {
  return <Btn {...rest}>{text}</Btn>;
};

export default Button;

const Btn = styled.button`
  padding: 15px 90px;
  border-radius: 10px;
  border: 1px solid transparent;
  background-color: black;
  color: white;
  font-size: 19px;
  font-weight: 700;
  transition: 0.3s ease-in;
  cursor: pointer;

  &:hover {
    background-color: #eaeaea;
    border: 1px solid black;
    color: black;
    transition: 0.4s ease-in;
  }
`;
export const OutlinedBtn = styled(Button)`
  background-color: white;
  border: 1px solid black;
  color: black;
  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
`;
