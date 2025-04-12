import React from 'react';
import { BudgetProvider } from './contexts/BudgetContext';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BudgetProvider>
      <div className="min-h-screen bg-gray-100 p-4">
        <h1 className="text-3xl font-bold text-center mb-4">Personal Budget Tracker</h1>
        <Dashboard />
      </div>
    </BudgetProvider>
  );
}

export default App;
