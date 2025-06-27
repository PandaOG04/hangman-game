/** 
  * This component displays the game title and a restart button.
*/
import React from 'react';
import { Button } from 'react-bootstrap';

function Header({ onRestart }) {
  return (
    <header className="text-center p-4 bg-dark text-white">
      <h1>Hangman Game</h1>
      <Button variant="warning" onClick={onRestart}>Restart Game</Button>
    </header>
  );
}

export default Header;
