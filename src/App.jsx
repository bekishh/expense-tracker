import { useState } from 'react'
import Expenses from './components/expenses/Expenses'
import NewExpense from './components/new-expense/NewExpense'

function App() {
	const [expenses, setExpenses] = useState([])

	const addNewExpenseHandler = (newExpense = {}) => {
		setExpenses((prevExpenses) => {
			return [...prevExpenses, newExpense]
		})
	}

	const deleteExpenseByIdHandler = (id) => {
		setExpenses((prevExpenses) =>
			prevExpenses.filter((expense) => expense.id !== id),
		)
	}

	return (
		<div>
			<NewExpense onAddNewExpense={addNewExpenseHandler} />
			<Expenses
				expenses={expenses}
				onDeleteExpense={deleteExpenseByIdHandler}
			/>
		</div>
	)
}

export default App
