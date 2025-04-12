import React, { createContext, useState, useEffect } from 'react';

export const BudgetContext = createContext();

export const BudgetProvider = ({ children }) => {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem('expenses');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <BudgetContext.Provider value={{ expenses, addExpense, deleteExpense }}>
      {children}
    </BudgetContext.Provider>
  );
};
