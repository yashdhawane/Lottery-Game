import React, { useState } from 'react';
import TicketDisplay from './TicketDisplay';
import WinningMessage from './WinningMessage';
import { generateTicket, checkWinningCondition } from '../utils/lotteryUtils';
import {WINNING_SUM,TICKET_SIZES} from '../config/Gamesetting';


const Lottery = () => {
  const [ticketSize, setTicketSize] = useState(3);
  const [ticket, setTicket] = useState(null);
  const [isWinner, setIsWinner] = useState(false);
  

  const handleSizeChange = (e) => {
    setTicketSize(parseInt(e.target.value));
    setTicket(null);
    setIsWinner(false);
  };

  const handleGenerateTicket = () => {
    const newTicket = generateTicket(ticketSize);
    setTicket(newTicket);
    setIsWinner(checkWinningCondition(newTicket));
  };

  return (
    <div>
      <h1>Lottery Game</h1>
      <div>
        <label htmlFor="ticketSize">Ticket Size: </label>
        <select id="ticketSize" value={ticketSize} onChange={handleSizeChange}>
          {TICKET_SIZES.map(size => (
            <option key={size} value={size}>{size}</option>
          ))}
        </select>
      </div>
      <button onClick={handleGenerateTicket}>Generate Ticket</button>
      {ticket && (
        <div>
          <TicketDisplay ticket={ticket} />
          {isWinner && <WinningMessage />}
        </div>
      )}
    </div>
  );
};

export default Lottery;