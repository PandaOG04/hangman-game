import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import WordDisplay from './components/WordDisplay';
import Keyboard from './components/Keyboard';
import HangmanFigure from './components/HangmanFigure';
import GameResult from './components/GameResult';
import HelpModal from './components/HelpModal';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [word, setWord] = useState('');
  const [words, setWords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [showHelp, setShowHelp] = useState(false);
  const [gameError, setGameError] = useState('');

  // Fetch words from external JSON file
  useEffect(() => {
    const fetchWords = async () => {
      try {
        const response = await fetch('/words.json');
        if (!response.ok) throw new Error('Failed to load words');
        const data = await response.json();
        
        if (!data || data.length === 0) {
          throw new Error('No words available');
        }
        
        setWords(data);
        setWord(data[Math.floor(Math.random() * data.length)].toUpperCase());
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading words:", error);
        setGameError(error.message);
        const fallbackWords = ["HANGMAN", "DEVELOPER", "REACT"];
        setWords(fallbackWords);
        setWord(fallbackWords[0]);
        setIsLoading(false);
      }
    };

    fetchWords();
  }, []);

  const handleGuess = (letter) => {
    // Additional validation
    if (!letter || typeof letter !== 'string' || letter.length !== 1 || !/[A-Za-z]/.test(letter)) {
      setGameError('Please enter a valid single letter (A-Z)');
      return;
    }

    const upperLetter = letter.toUpperCase();
    if (guessedLetters.includes(upperLetter)) {
      setGameError(`You already guessed "${upperLetter}"`);
      return;
    }

    setGameError('');
    setGuessedLetters(prev => [...prev, upperLetter]);
    if (!word.includes(upperLetter)) {
      setWrongGuesses(prev => prev + 1);
    }
  };

  const restartGame = () => {
    if (words.length > 0) {
      const newWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
      setWord(newWord);
      setGuessedLetters([]);
      setWrongGuesses(0);
      setGameError('');
    }
  };

  const isWinner = word && word.split('').every(letter => guessedLetters.includes(letter));
  const gameOver = isWinner || wrongGuesses >= 6;

  if (isLoading) {
    return (
      <div className="container mt-3 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p>Loading game...</p>
      </div>
    );
  }

  return (
    <div className="container mt-3">
      <Header onRestart={restartGame} />
      
      <div className="d-flex justify-content-between mb-3">
        <button 
          className="btn btn-info" 
          onClick={() => setShowHelp(true)}
        >
          Help
        </button>
        <div className="text-danger">
          Wrong guesses: {wrongGuesses}/6
        </div>
      </div>

      <HelpModal show={showHelp} handleClose={() => setShowHelp(false)} />

      {gameError && (
        <div className="alert alert-warning" onAnimationEnd={() => setGameError('')}>
          {gameError}
        </div>
      )}

      <HangmanFigure wrongGuesses={wrongGuesses} />
      <WordDisplay word={word} guessedLetters={guessedLetters} />
      
      <Keyboard 
        guessedLetters={guessedLetters} 
        handleGuess={handleGuess} 
      />

      <GameResult isWinner={isWinner} gameOver={gameOver} />
    </div>
  );
}

export default App;