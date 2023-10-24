import React, { useRef, useState } from 'react';

import './style.css';

export function Forms() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log('hello submit');
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label for="tekstowy">Input tekstowy</label>
          <input id="tekstowy" type="text"></input>
        </div>
        <div>
          <label for="select">Select</label>
          <select id="select">
            <option>1</option>
            <option>2</option>
          </select>
        </div>
        <div>
          <textarea />
        </div>
        <div>
          <input type="checkbox"></input>
        </div>
        <div>
          <input name="test" type="radio" />
          <input name="test" type="radio" />
          <input name="test" type="radio" />
        </div>
        <div>
          <input type="password"></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
