// App.js
// Main game logic component that holds the game state and renders other components.

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import WordDisplay from './components/WordDisplay';
import Keyboard from './components/Keyboard';
import HangmanFigure from './components/HangmanFigure';
import GameResult from './components/GameResult';
import HelpModal from './components/HelpModal';
import words from './words';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [word, setWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [showHelp, setShowHelp] = useState(false);

  // Pick a random word on mount or restart
  useEffect(() => {
    const randomWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
    setWord(randomWord);
  }, []);

  const handleGuess = (letter) => {
    if (!word.includes(letter)) {
      setWrongGuesses(prev => prev + 1);
    }
    setGuessedLetters(prev => [...new Set([...prev, letter])]);
  };

  const restartGame = () => {
    const newWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
    setWord(newWord);
    setGuessedLetters([]);
    setWrongGuesses(0);
  };

  const isWinner = word.split('').every(letter => guessedLetters.includes(letter));
  const gameOver = isWinner || wrongGuesses >= 6;

  return (
    <div className="container mt-3">
      <Header onRestart={restartGame} />
      <button className="btn btn-info my-3" onClick={() => setShowHelp(true)}>Help</button>
      <HelpModal show={showHelp} handleClose={() => setShowHelp(false)} />

      <HangmanFigure wrongGuesses={wrongGuesses} />
      <WordDisplay word={word} guessedLetters={guessedLetters} />
      <Keyboard guessedLetters={guessedLetters} handleGuess={handleGuess} />
      <GameResult isWinner={isWinner} gameOver={gameOver} />
    </div>
  );
}

export default App;
