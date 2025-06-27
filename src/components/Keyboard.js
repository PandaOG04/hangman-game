/**
 * Keyboard used to guess the words.
 */
import React from 'react';
import { Button } from 'react-bootstrap';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function Keyboard({ guessedLetters, handleGuess }) {
  return (
    <div className="keyboard d-flex flex-wrap justify-content-center mt-4">
      {alphabet.map((letter) => (
        <Button
          key={letter}
          variant="outline-primary"
          className="m-1"
          onClick={() => handleGuess(letter)}
          disabled={guessedLetters.includes(letter)}
        >
          {letter}
        </Button>
      ))}
    </div>
  );
}

export default Keyboard;