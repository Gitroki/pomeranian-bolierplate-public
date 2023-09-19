import './styles.css';
export const Button1 = ({ id, diffrentColor, timeButton, label }) => {
  return (
    <button
      id={id}
      onClick={diffrentColor}
      className={timeButton == id ? 'pink-button' : 'blue-button'}
    >
      {label}
    </button>
  );
};
export const Button2 = ({ id, changeColor, moleButton, label }) => {
  return (
    <button
      id={id}
      onClick={changeColor}
      className={moleButton == id ? 'pink-button' : 'blue-button'}
    >
      {label}
    </button>
  );
};
export const Button3 = ({ id, pinkColor, startButton, label }) => {
  return (
    <button
      id={id}
      onClick={pinkColor}
      className={startButton == id ? 'pink-button' : 'blue-button'}
    >
      {label}
    </button>
  );
};
