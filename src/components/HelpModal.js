import React from 'react';

function HelpModal({ onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>How to Play</h2>
        <p>
          Guess the hidden word by clicking letters. Each incorrect guess adds a part to the hangman.
          You lose after 6 wrong guesses. Click "Restart" to play again!
        </p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default HelpModal;
