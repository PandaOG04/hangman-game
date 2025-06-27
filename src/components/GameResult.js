/**
 * Displays a win or loss message when game is over.
 */ 

import React from 'react';

function GameResult({ isWinner, gameOver }) {
  if (!gameOver) return null;

  return (
    <div className="text-center mt-4">
      <h2 className={isWinner ? 'text-success' : 'text-danger'}>
        {isWinner ? '🎉 You Won!' : '💀 You Lost!'}
      </h2>
    </div>
  );
}

export default GameResult;
