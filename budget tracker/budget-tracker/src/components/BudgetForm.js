import React, { useState, useContext } from 'react';
import { BudgetContext } from '../contexts/BudgetContext';
import { v4 as uuidv4 } from 'uuid';

const BudgetForm = () => {
  const { addExpense } = useContext(BudgetContext);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) return;
    addExpense({ id: uuidv4(), description, amount: parseFloat(amount) });
    setDescription('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-2">Add New Expense</h2>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-2 mb-2 border rounded"
      />
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Add Expense </button>
    </form>
  );
};

export default BudgetForm;
