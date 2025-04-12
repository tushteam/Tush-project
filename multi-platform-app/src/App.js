import React from 'react';
import KnowledgeTransfer from './components/KnowledgeTransfer';
import AntiResume from './components/AntiResume';
import LocalDemocracy from './components/LocalDemocracy';
import FinancialTimeMachine from './components/FinancialTimeMachine';

const App = () => {
  return (
    <div>
      <h1>Multi-Platform Application</h1>
      <KnowledgeTransfer />
      <AntiResume />
      <LocalDemocracy />
      <FinancialTimeMachine />
    </div>
  );
};

export default App;