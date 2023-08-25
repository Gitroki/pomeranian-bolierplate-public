import './styles.css';
import { useState } from 'react';

import { MultiplyButton } from '../MultiplyButton/MultiplyButton';

export const ReactOnClick = () => {
  const [value, setValue] = useState('');

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleClick() {
    setValue('');
  }

  const test = 'Tom';

  if (test === 'Sam') {
    console.log('Sam');
  }

  if (test === 'Tom') {
    console.log('Tom');
  }

  if (typeof test === 'string') {
    console.log('Jest stringiem');
  }

  return (
    <div>
      <h1>Cześć!</h1>

      <button onClick={handleClick}>Resetuj</button>
      <input type="text" onChange={handleChange} />
      <p>
        <strong> {value}</strong>
      </p>

      <br></br>

      <MultiplyButton />
    </div>
  );
};
