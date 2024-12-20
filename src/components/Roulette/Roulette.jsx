import React from 'react';
import { useState } from 'react';
import Wheel from './Wheel';
import BettingTable from './BettingTable';
import './CSS/Roulette.css';

const Roulette = () => {
  const [currentBet, setCurrentBet] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handlespin=()=>{
    if(!currentBet) return;
    setIsSpinning(true);
    setTimeout(() => {
      setIsSpinning(false);
      setResult(Math.floor(Math.random() * 37));
      setShowResult(true);
    }, 5000);
  }
  return (
    <div className="roulette">

    <Wheel onspin={handlespin} spinning={isSpinning}/>
      <BettingTable />
    </div>
  );
};

export default Roulette;