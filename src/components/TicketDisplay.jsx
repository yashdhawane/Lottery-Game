// src/components/TicketDisplay.js
import React from 'react';

const TicketDisplay = ({ ticket }) => {
  return (
    <div>
      <h2>Your Ticket: {ticket}</h2>
    </div>
  );
};

export default TicketDisplay;
