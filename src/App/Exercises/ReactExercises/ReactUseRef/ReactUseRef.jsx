import React, { useRef } from 'react';

import './style.css';

export function ReactUseRef() {
  const inputRef = useRef(); //referencje inputa, atrybut inputa w react

  const handleClick = () => {
    inputRef.current.focus(); //current-> ten element konkretny cos jak event.target a focus to nie wiem
    inputRef.current.style.backgroundColor = 'red'; // dodawaie koloru w inpucie po nacisnieciu przycisku
  };
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus input</button>
    </div>
  );
}
