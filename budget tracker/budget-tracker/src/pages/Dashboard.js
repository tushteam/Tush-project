import React from 'react';
import BudgetForm from '../components/BudgetForm';
import ExpenseList from '../components/ExpenseList';
import BudgetSummary from '../components/BudgetSummary';

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <BudgetForm />
      <BudgetSummary />
      <div className="md:col-span-2">
        <ExpenseList />
      </div>
    </div>
  );
};

export default Dashboard;
