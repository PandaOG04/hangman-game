import React from "react";
import step0 from "../assets/images/step0.png";
import step1 from "../assets/images/step1.png";
import step2 from "../assets/images/step2.png";
import step3 from "../assets/images/step3.png";
import step4 from "../assets/images/step4.png";
import step5 from "../assets/images/step5.png";
import step6 from "../assets/images/step6.png";

const steps = [step0, step1, step2, step3, step4, step5, step6];

const HangmanImage = ({ wrongGuesses }) => {
  return (
    <div className="hangman-img">
      <img src={steps[wrongGuesses]} alt={`Hangman step ${wrongGuesses}`} />
    </div>
  );
};

export default HangmanImage;