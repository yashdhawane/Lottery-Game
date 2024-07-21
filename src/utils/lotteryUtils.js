import { WINNING_SUM } from "../config/Gamesetting";

export const generateTicket = (size) => {
    return Array.from({ length: size }, () => Math.floor(Math.random() * 10)).join('');
  };
  
  export const checkWinningCondition = (ticket) => {
    const sum = ticket.split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    return sum === WINNING_SUM;
  };
  