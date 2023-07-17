import React from "react";
import ExpenseItem from "./ExpenseItem";
import { styled } from "styled-components";

const ExpenseList = ({ expenses = [], onDeleteExpense }) => {
  return (
    <div>
      {expenses.length === 0 && (
        <StyledExpensesListFallback className="expenses-list__fallback">
          No Expenses
        </StyledExpensesListFallback>
      )}
      {expenses.length > 0 && (
        <StyledExpensesList className="expenses-list">
          {expenses.map((expense) => {
            return (
              <ExpenseItem
                key={expense.id}
                onDeleteExpense={onDeleteExpense}
                date={expense.date}
                title={expense.title}
                id={expense.id}
                amount={expense.amount}
              />
            );
          })}
        </StyledExpensesList>
      )}
    </div>
  );
};

const StyledExpensesList = styled("ul")`
  list-style: none;
  padding: 0;
`;

const StyledExpensesListFallback = styled("h1")`
  color: white;
  text-align: center;
`;

export default ExpenseList;
