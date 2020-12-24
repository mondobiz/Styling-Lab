import styles from './GameBoard.module.css'
import GuessRow from '../GuessRow/GuessRow';

const GameBoard = (props) => (
  <div className={styles.GameBoard}>
    {props.guesses.map((guess, idx) => 
      <GuessRow 
        guess={guess}
        colors={props.colors}
        rowIdx={idx}
        currentGuess={idx === props.guesses.length - 1}
        key={idx}
      />
    )}
  </div>
);

export default GameBoard;
