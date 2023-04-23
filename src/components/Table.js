import React, { useState } from 'react';
import Seat from './Seat';

const Table = () => {
  const [bookedSeats, setBookedSeats] = useState(Array(30).fill(false));

  const handleSeatClick = (seatIndex) => {
    const newBookedSeats = [...bookedSeats];
    newBookedSeats[seatIndex] = !newBookedSeats[seatIndex];
    setBookedSeats(newBookedSeats);
  };

  return (
    <div className="table">
      {bookedSeats.map((booked, index) => (
        <Seat
          key={index}
          isBooked={booked}
          onClick={() => handleSeatClick(index)}
        />
      ))}
    </div>
  );
};

export default Table;
