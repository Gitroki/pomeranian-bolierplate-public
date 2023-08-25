import './styles.css';

import { useState } from 'react';

export const MultiplyButton = () => {
  const [value, setValue] = useState(5);

  const [text, setText] = useState('Odliczanie');

  function handleClick() {
    if (value !== 0) {
      setValue(value - 1);
    }
    if (value <= 1) {
      setText('Odliczanie zakończone');
    }
  }

  return (
    <div>
      <h1>Cześć!</h1>
      <button onClick={handleClick}>{value}</button>
      <p>
        <span>{text}</span>
      </p>
    </div>
  );
};
