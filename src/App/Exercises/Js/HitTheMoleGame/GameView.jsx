import { useState } from 'react';
import { Button1 } from './Buttons';
import mole from './mole.svg';
export const GameView = () => {
  const [timeButton, setTimeButton] = useState(null);
  function diffrentColor(event) {
    setTimeButton(event.target.id);
  }

  return (
    <div>
      <div>
        <h4>
          Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
          którym się pojawił.
        </h4>
      </div>
      <div className="game-view-box">
        <div className="moless">
          <h4>CZAS DO KOŃCA</h4>
          <h4>WYNIK</h4>
          <h4>PRZYCISKI STERUJĄCE</h4>
        </div>
        <div className="moless">
          <div className="window-container">
            <p className="text-in-container">1:35</p>
          </div>
          <div class="window-container">
            <p className="text-in-container">16</p>
          </div>
          <div className="button-container">
            <Button1
              id={1}
              diffrentColor={diffrentColor}
              timeButton={timeButton}
              label={'STOP'}
            />
          </div>
        </div>
      </div>
      <div className="gray-squares">
        <div className="gray-square">
          <img className="mole-picture" src={mole} alt="Kret" />
        </div>
        <div className="gray-square"></div>
        <div className="gray-square"></div>
        <div className="gray-square"></div>
        <div className="gray-square"></div>
      </div>
    </div>
  );
};
