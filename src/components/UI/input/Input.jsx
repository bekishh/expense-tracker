import React from "react";
import { styled } from "styled-components";

export const Input = ({ type, value, onChange, ...rest }) => {
  return (
    <StyledInput
      value={value}
      onChange={onChange}
      {...rest}
      type={type}
    />
  );
};

const StyledInput = styled("input")`
  font: inherit;
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  width: 20rem;
  max-width: 100%;
`;

export default Input;
