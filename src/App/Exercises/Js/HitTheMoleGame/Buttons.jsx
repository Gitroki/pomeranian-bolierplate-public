import './styles.css';

function doOnClick1(diffrentColor, setHowLong, event, time) {
  diffrentColor(event);
  setHowLong(time);
}
export const Button1 = ({
  id,
  diffrentColor,
  timeButton,
  label,
  setHowLong,
  time,
}) => {
  return (
    <button
      id={id}
      onClick={(event) => doOnClick1(diffrentColor, setHowLong, event, time)}
      className={timeButton == id ? 'pink-button' : 'blue-button'}
    >
      {label}
    </button>
  );
};

function doOnClick2(changeColor, setHowManyMoles, event, mole) {
  changeColor(event);
  setHowManyMoles(mole);
}

export const Button2 = ({
  id,
  changeColor,
  moleButton,
  label,
  mole,
  setHowManyMoles,
}) => {
  return (
    <button
      id={id}
      onClick={(event) => doOnClick2(changeColor, setHowManyMoles, event, mole)}
      className={moleButton == id ? 'pink-button' : 'blue-button'}
    >
      {label}
    </button>
  );
};
export const Button3 = ({ id, showGameView, label }) => {
  return (
    <button id={id} onClick={showGameView}>
      {label}
    </button>
  );
};
