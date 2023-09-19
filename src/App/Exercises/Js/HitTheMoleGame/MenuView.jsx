import { useState } from 'react';
import { Button1 } from './Buttons';
import { Button2 } from './Buttons';
import { Button3 } from './Buttons';
export const MenuView = () => {
  const [timeButton, setTimeButton] = useState(null);
  function diffrentColor(event) {
    setTimeButton(event.target.id);
  }
  const [moleButton, setMoleButton] = useState(null);
  function changeColor(event) {
    setMoleButton(event.target.id);
  }
  const [startButton, setStartButton] = useState(null);
  function pinkColor(event) {
    setStartButton(event.target.id);
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
          <h4>CZAS GRY</h4>
          <div class="button-container">
            <Button1
              id={1}
              diffrentColor={diffrentColor}
              timeButton={timeButton}
              label={'1 minuta'}
            />
            <Button1
              id={2}
              diffrentColor={diffrentColor}
              timeButton={timeButton}
              label={'2 minuty'}
            />
            <Button1
              id={3}
              diffrentColor={diffrentColor}
              timeButton={timeButton}
              label={'3 minuty'}
            />
          </div>
        </div>
        <div className="moles">
          <h4>LICZBA KRETÓW</h4>
          <div class="button-container">
            <Button2
              id={4}
              changeColor={changeColor}
              moleButton={moleButton}
              label={'1 kret'}
            />
            <Button2
              id={5}
              changeColor={changeColor}
              moleButton={moleButton}
              label={'2 krety'}
            />
            <Button2
              id={6}
              changeColor={changeColor}
              moleButton={moleButton}
              label={'3 krety'}
            />
          </div>
        </div>
        <div className="moles">
          <h4>PRZYCISKI STERUJĄCE</h4>
          <div className="button-container">
            <Button3
              id={7}
              pinkColor={pinkColor}
              startButton={startButton}
              label={'Start'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
