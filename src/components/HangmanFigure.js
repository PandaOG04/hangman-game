// HangmanFigure.js
// This component visually represents the hangman figure using text or images.

import React from 'react';

function HangmanFigure({ wrongGuesses }) {
  // Placeholder figure. You can use images or SVGs for better visuals.
  const stages = [
    '',
    'O',
    'O\n|',
    'O\n/|',
    'O\n/|\\',
    'O\n/|\\\n/',
    'O\n/|\\\n/ \\',
  ];

  return (
    <pre className="hangman-figure text-center mt-4">{stages[wrongGuesses]}</pre>
  );
}

export default HangmanFigure;
