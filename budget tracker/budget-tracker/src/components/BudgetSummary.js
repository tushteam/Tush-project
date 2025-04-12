import React, { useContext } from 'react';
import { BudgetContext } from '../contexts/BudgetContext';

const BudgetSummary = () => {
  const { expenses } = useContext(BudgetContext);
  const total = expenses.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-2">Budget Summary</h2>
      <p className="text-lg">Total Spent: ${total.toFixed(2)}</p>
    </div>
  );
};

export default BudgetSummary;
