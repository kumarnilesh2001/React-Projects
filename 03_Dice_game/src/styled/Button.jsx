import styled from "styled-components";

// eslint-disable-next-line react/prop-types
const Button = ({ text }) => {
  return <Btn>{text}</Btn>;
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

  &:hover {
    background-color: #eaeaea;
    border: 1px solid black;
    color: black;
    transition: 0.4s ease-in;
  }
`;
