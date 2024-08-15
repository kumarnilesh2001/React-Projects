/* eslint-disable react/prop-types */

import styled from "styled-components";
const Button = ({
  text,
  px = "20px",
  py = "15px",
  size = "15px",
  weight = "bold",
  bgcolor = "red",
  textcolor = "white",
  hovercolor = "darkred",
  className,
  ...rest
}) => {
  return (
    <ButtonStyle
      $px={px}
      $py={py}
      $size={size}
      $weight={weight}
      $bgcolor={bgcolor}
      $textcolor={textcolor}
      $hovercolor={hovercolor}
      className={className}
      {...rest}
    >
      {text}
    </ButtonStyle>
  );
};

export default Button;

const ButtonStyle = styled.button`
  padding: ${(props) => props.$py} ${(props) => props.$px};
  font-size: ${(props) => props.$size};
  font-weight: ${(props) => props.$weight};
  background-color: ${({ $bgcolor }) => $bgcolor};
  color: ${({ $textcolor }) => $textcolor};
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${({ $hovercolor }) => $hovercolor};
  }
`;
