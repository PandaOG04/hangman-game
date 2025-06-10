import React from "react";

const HelpModal = ({ show, onClose }) => {
  if (!show) return null;
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>How to Play Hangman</h2>
        <p>Guess the hidden word one letter at a time. Each wrong guess draws part of the hangman. You lose after 6 wrong guesses. Click Restart to play again.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
