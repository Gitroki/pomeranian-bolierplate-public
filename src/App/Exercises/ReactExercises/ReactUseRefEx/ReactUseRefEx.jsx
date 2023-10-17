import React, { useRef, useState } from 'react';

import './style.css';

export function ReactUseRefEx() {
  const textRef = useRef(null);
  const inputRef = useRef(null);
  const buttonRef = useRef(null);

  function changeColor(color) {
    textRef.current.style.color = color;
  }

  function handleButtonClick() {
    inputRef.current.value = '';
  }

  function disableMe() {
    buttonRef.current.disabled = true;
  }
  return (
    <div>
      <div>
        <button onClick={() => changeColor('blue')}>Niebieski</button>
        <button onClick={() => changeColor('red')}>Czerwony</button>
        <p ref={textRef}>Tekst</p>
      </div>
      <div>
        <input type="text" ref={inputRef}></input>
        <button onClick={handleButtonClick}>Usuwanie tekstu</button>
      </div>
      <div>
        <button ref={buttonRef} onClick={disableMe}>
          Blokowanie przycisku
        </button>
      </div>
    </div>
  );
}
