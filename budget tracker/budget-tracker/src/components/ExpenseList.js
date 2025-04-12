import React, { useContext } from 'react';
import { BudgetContext } from '../contexts/BudgetContext';

const ExpenseList = () => {
  const { expenses, deleteExpense } = useContext(BudgetContext);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-2">Expenses</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id} className="flex justify-between p-2 border-b">
            <span>{expense.description}</span>
            <span>${expense.amount.toFixed(2)}</span>
            <button onClick={() => deleteExpense(expense.id)} className="text-red-500">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
