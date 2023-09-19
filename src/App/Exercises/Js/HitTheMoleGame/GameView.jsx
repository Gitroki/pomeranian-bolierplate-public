import { useState } from 'react';
import { Button1 } from './Buttons';
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
      <div className="big-box">
        <div className="moles">
          <h4>CZAS DO KOŃCA</h4>
          <div className="window-container">
            <button>1</button>
          </div>
        </div>
        <div className="moles">
          <h4>WYNIK</h4>
          <div class="window-container">
            <button>1</button>
          </div>
        </div>
        <div className="moles">
          <h4>PRZYCISKI STERUJĄCE</h4>
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
    </div>
  );
};
