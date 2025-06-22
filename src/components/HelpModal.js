// HelpModal.js
// A React-Bootstrap modal that explains the game rules.

import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function HelpModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>How to Play Hangman</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Guess the hidden word by selecting letters one at a time.</p>
        <p>Each incorrect guess adds to the hangman drawing. You lose after 6 incorrect guesses!</p>
        <p>You win by guessing all letters before the hangman is complete.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default HelpModal;
