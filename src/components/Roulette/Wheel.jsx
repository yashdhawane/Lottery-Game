import React from 'react';

const Wheel = ({onspin,spinning}) => {
  return (
    <div className="wheel">
      {/* Wheel implementation */}
      <p>Wheel Component</p>
      <div className="p-6 m-4 text-center">
      <div className={`w-64 h-64 mx-auto border-8 border-gray-800 rounded-full ${
        spinning ? 'animate-spin' : ''
      }`}>
        {/* Simplified wheel representation */}
        <div className="w-full h-full rounded-full bg-gradient-to-r from-red-600 via-black to-red-600" />
      </div>
      <button 
        onClick={onspin}
        disabled={spinning}
        className="mt-4 bg-blue-600 hover:bg-blue-700"
      >
        SPIN
      </button>
    </div>
    </div>
  );
};

export default Wheel;