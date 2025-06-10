import React from "react";

const letters = "abcdefghijklmnopqrstuvwxyz".split("");

const Keyboard = ({ onLetterClick, disabledLetters }) => {
  return (
    <div className="keyboard">
      {letters.map((letter) => (
        <button
          key={letter}
          onClick={() => onLetterClick(letter)}
          disabled={disabledLetters.includes(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
