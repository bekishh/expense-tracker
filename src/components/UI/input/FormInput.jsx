import React from "react";
import { Input } from "./Input";
import { styled } from "styled-components";

const FormInput = ({
  inputType = "text",
  onChange,
  label,
  id,
  value,
  ...rest
}) => {
  return (
    <div>
      <StyledLabel className="label" htmlFor={id}>
        {label}
      </StyledLabel>
      <Input
        id={id}
        type={inputType}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
};

const StyledLabel = styled("label")`
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;	
`;

export default FormInput;
