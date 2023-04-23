import React from 'react';

const Seat = ({ isBooked, onClick }) => {
  return (
    <div
      className={`Seat ${isBooked ? 'is-booked' : ''}`}
      onClick={onClick}
    ></div>
  );
};

export default Seat;
