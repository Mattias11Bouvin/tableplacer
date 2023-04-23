import React from 'react';
import SquareTable from './components/SquareTable';
import RoundTable from './components/RoundTable';
import './App.css';
import TablePlanner from './components/TablePlanner';

function App() {
  return (
    <div className="App">
 
      <div className="tables-container">
        <TablePlanner />
        <SquareTable />
        <RoundTable />
        <SquareTable />
      </div>
    </div>
  );
}

export default App;
