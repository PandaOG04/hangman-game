import step0 from '../assets/step0.png';
import step1 from '../assets/step1.png';
import step2 from '../assets/step2.png';
import step3 from '../assets/step3.png';
import step4 from '../assets/step4.png';
import step5 from '../assets/step5.png';
import step6 from '../assets/step6.png';

const images = [step0, step1, step2, step3, step4, step5, step6];

export default function HangmanImage({ wrongGuesses }) {
  return (
    <div className="hangman-img">
      <img src={images[wrongGuesses]} alt={`Hangman step ${wrongGuesses}`} />
    </div>
  );
}
