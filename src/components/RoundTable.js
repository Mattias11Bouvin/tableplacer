import React, { useState } from 'react';


const RoundTable = () => {
  const [bookedSeats, setBookedSeats] = useState(Array(10).fill(false));

  const handleSeatClick = (seatIndex) => {
    const newBookedSeats = [...bookedSeats];
    newBookedSeats[seatIndex] = !newBookedSeats[seatIndex];
    setBookedSeats(newBookedSeats);
  };

  return (
    <div className="round-table">
      <div className="table-top">
        <div className="top-leg"></div>
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
        <div className="bottom-leg"></div>
      </div>
    </div>
  );
};

export default RoundTable;
