import React from "react";
import { styled } from "styled-components";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <StyledExpenseDate className="expense-date">
      <StyledExpenseDateMonth className="expense-date__month">
        {month}
      </StyledExpenseDateMonth>
      <StyledExpenseDateYear className="expense-date__year">
        {year}
      </StyledExpenseDateYear>
      <StyledExpenseDateDay className="expense-date__day">
        {day}
      </StyledExpenseDateDay>
    </StyledExpenseDate>
  );
};

const StyledExpenseDate = styled("div")`
  display: flex;
  flex-direction: column;
  width: 5.5rem;
  height: 5.5rem;
  border: 1px solid #ececec;
  background-color: #2a2a2a;
  color: white;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`;

const StyledExpenseDateMonth = styled("div")`
  font-size: 0.75rem;
  font-weight: bold;
`;

const StyledExpenseDateYear = styled("div")`
  font-size: 0.75rem;
`;

const StyledExpenseDateDay = styled("div")`
  font-size: 1.5rem;
  font-weight: bold;
`;

export default ExpenseDate;
