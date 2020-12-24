import styles from './GuessPeg.module.css';

const GuessPeg = (props) => (
  <div className={styles.Peg} style={{ backgroundColor: props.color }}>

  </div>
);
export default GuessPeg;
