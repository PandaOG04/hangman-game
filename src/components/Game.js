import React, { useState, useEffect } from "react";
import words from "../utils/words";
import Word from "./Word";
import Keyboard from "./Keyboard";
import HangmanImage from "./HangmanImage";
import HelpModal from "./HelpModal";
import "../App.css";

const Game = () => {
  const [word, setWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [showHelp, setShowHelp] = useState(false);
  const maxWrong = 6;

  useEffect(() => {
    resetGame();
  }, []);

  const resetGame = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)].toLowerCase();
    setWord(randomWord);
    setGuessedLetters([]);
    setWrongGuesses(0);
  };

  const handleLetterClick = (letter) => {
    if (guessedLetters.includes(letter)) return;
    setGuessedLetters([...guessedLetters, letter]);

    if (!word.includes(letter)) {
      setWrongGuesses(prev => prev + 1);
    }
  };

  const isWinner = word.split("").every(letter => guessedLetters.includes(letter));
  const isLoser = wrongGuesses >= maxWrong;

  return (
    <div className="game-container">
      <h1>Hangman</h1>
      <button className="help-btn" onClick={() => setShowHelp(true)}>Help</button>
      <HangmanImage wrongGuesses={wrongGuesses} />
      <Word word={word} guessedLetters={guessedLetters} />
      <Keyboard onLetterClick={handleLetterClick} disabledLetters={guessedLetters} />

      {isWinner && <p className="result win">🎉 You won! 🎉</p>}
      {isLoser && <p className="result lose">💀 You lost. Word was: {word}</p>}

      <button className="restart-btn" onClick={resetGame}>Restart Game</button>

      <HelpModal show={showHelp} onClose={() => setShowHelp(false)} />
    </div>
  );
};

export default Game;