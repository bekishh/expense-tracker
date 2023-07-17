import React from "react";
import { styled } from "styled-components";

const Button = ({ children, onClick, ...rest }) => {
  return (
    <StyledButton onClick={onClick} {...rest}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled("button")`
  height: 51px;
  padding: 16px 18px 16px 18px;
  border-radius: 10px;
  background: #4a026b;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
  &:hover,
  active {
    background-color: #510674;
    border-color: #510674;
  }
  &:disabled {
    background-color: rgb(171, 170, 170);
    cursor: not-allowed;
  }
`;

export default Button;
