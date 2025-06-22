// WordDisplay.js
// This component displays the word being guessed with blanks and revealed letters.

import React from 'react';

function WordDisplay({ word, guessedLetters }) {
  return (
    <div className="word-display text-center mt-4">
      {word.split('').map((letter, index) => (
        <span key={index} className="mx-2 display-4">
          {guessedLetters.includes(letter) ? letter : '_'}
        </span>
      ))}
    </div>
  );
}

export default WordDisplay;
