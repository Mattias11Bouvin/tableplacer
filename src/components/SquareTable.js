import React, { useState } from 'react';


const SquareTable = () => {
  const [bookedSeats, setBookedSeats] = useState(Array(10).fill(false));

  const handleSeatClick = (seatIndex) => {
    const newBookedSeats = [...bookedSeats];
    newBookedSeats[seatIndex] = !newBookedSeats[seatIndex];
    setBookedSeats(newBookedSeats);
  };

  return (
    <div className="square-table">
      <div className="table-top">
        <div className="top-left-leg"></div>
        <div className="top-right-leg"></div>
      </div>
      <div className="table-middle">
        {bookedSeats.map((booked, index) => (
          <div
            key={index}
            className={`seat ${booked ? 'booked' : ''}`}
            onClick={() => handleSeatClick(index)}
          />
        ))}
      </div>
      <div className="table-bottom">
        <div className="bottom-left-leg"></div>
        <div className="bottom-right-leg"></div>
      </div>
    </div>
  );
};

export default SquareTable;
