import React from "react";
import Card from "../UI/card/Card";
import styled, {css} from "styled-components";
import ExpenseDate from "./ExpenseDate";
import Button from "../UI/button/Button";

const ExpenseItem = ({ date, title, amount, onDeleteExpense, id }) => {
  return (
    <StyledExpenseItem className="expense-item">
      <ExpenseDate date={date} />
      <StyledExpenseItemDescription className="expense-item__description" isMediaQuery>
        <StyledExpenseItemTitle isMediaQuery>{title}</StyledExpenseItemTitle>
        <StyledExpenseItemPrice className="expense-item__price" isMediaQuery>${amount}</StyledExpenseItemPrice>{" "}
      </StyledExpenseItemDescription>
      <Button
        style={{ marginLeft: "1rem" }}
        onClick={() => {
          onDeleteExpense(id);
        }}
      >
        Delete
      </Button>
    </StyledExpenseItem>
  );
};

const StyledExpenseItem = styled(Card)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  margin: 1rem 0;
  background-color: #4b4b4b;
`;

const StyledExpenseItemDescription = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-end;
  flex-flow: column-reverse;
  justify-content: flex-start;
  flex: 1;
  ${props =>
	props.isMediaQuery && css`
		@media (min-width: 580px) {
			flex-direction: row;
			align-items: center;
			justify-content: flex-start;
			flex: 1;
		}
	`
}
`;

const StyledExpenseItemTitle = styled("h2")`
  color: #3a3a3a;
  font-size: 1rem;
  flex: 1;
  margin: 0 1rem;
  color: white;
  ${props =>
	props.isMediaQuery && css`
		@media (min-width: 580px) {
			font-size: 1.25rem;
		}
	`
}
`;

const StyledExpenseItemPrice = styled("div")`
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #40005d;
  border: 1px solid white;
  padding: 0.5rem;
  border-radius: 12px;
  ${props =>
	props.isMediaQuery && css`
		@media (min-width: 580px) {
			font-size: 1.25rem;
			padding: 0.5rem 1.5rem;
		}
	`
}
`;

export default ExpenseItem;
