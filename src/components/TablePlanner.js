import React from 'react';
import SquareTable from './SquareTable';
import RoundTable from './RoundTable';


const TablePlanner = () => {
  const handleSaveBookings = () => {
    // Implementera funktionaliteten för att spara bokningar här
    console.log('Bokningar sparade!');
  };

  return (
    <div className="TablePlanner">
      <h1>Bordsplacering</h1>
      <div className="tables-container">
        <SquareTable />
        <RoundTable />
        <SquareTable />
      </div>
      <button onClick={handleSaveBookings}>Spara bokningar</button>
    </div>
  );
};

export default TablePlanner;
