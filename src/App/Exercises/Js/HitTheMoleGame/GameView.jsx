import { useEffect, useState } from 'react';
import { Button1 } from './Buttons';
import mole from './mole.svg';

const initialArray = [
  { id: 1, isMolePresent: false, isSquareClicked: true },
  { id: 2, isMolePresent: false, isSquareClicked: false },
  { id: 3, isMolePresent: true, isSquareClicked: false },
  { id: 4, isMolePresent: false, isSquareClicked: false },
  { id: 5, isMolePresent: false, isSquareClicked: false },
  { id: 6, isMolePresent: false, isSquareClicked: false },
  { id: 7, isMolePresent: false, isSquareClicked: false },
  { id: 8, isMolePresent: false, isSquareClicked: false },
  { id: 9, isMolePresent: false, isSquareClicked: false },
  { id: 10, isMolePresent: false, isSquareClicked: false },
];

export const GameView = ({ changeToMenuView }) => {
  const [timeButton, setTimeButton] = useState(null);
  function diffrentColor(event) {
    setTimeButton(event.target.id);
  }

  const [boardGameData, setBoardGameData] = useState(initialArray);

  function shuffleBoard() {
    let randomNextMolePosition = randomNumber(boardGameData.length);
    setBoardGameData(
      boardGameData.map((element, index) => {
        element.isMolePresent = false;
        if (index == randomNextMolePosition) {
          element.isMolePresent = true;
        }
        element.isSquareClicked = false;
        return element;
      })
    );
  }

  // can return number from 0 to numberTo - 1
  function randomNumber(numberTo) {
    return Math.floor(Math.random() * numberTo);
  }

  useEffect(() => {
    setInterval(() => {
      return shuffleBoard();
    }, 1500);
  }, []);

  function getColorOfKafelek(element) {
    if (element.isMolePresent == false && element.isSquareClicked == true) {
      return 'red-square';
    }
    if (element.isMolePresent == true && element.isSquareClicked == true) {
      return 'green-square';
    }
    return 'gray-square';
  }

  function kafelekClicked(event, clickedElementId) {
    setBoardGameData(
      boardGameData.map((element) => {
        if (element.id == clickedElementId) {
          element.isSquareClicked = true;
        }
        return element;
      })
    );
  }

  function drawBoard() {
    return boardGameData.map((element) => {
      return (
        <div
          key={element.id}
          onClick={(event) => kafelekClicked(event, element.id)}
          className={getColorOfKafelek(element)}
        >
          {element.isMolePresent == true ? (
            <img className="mole-picture" src={mole} />
          ) : (
            ''
          )}
        </div>
      );
    });
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
          <div class="button-container">
            <div className="window-container">1:36</div>
          </div>
        </div>
        <div className="moles">
          <h4>WYNIK</h4>
          <div class="button-container">
            <div className="window-container">13</div>
          </div>
        </div>
      </div>
      <div className="moles">
        <h4>PRZYCISKI STERUJĄCE</h4>
        <div className="button-container">
          <Button1
            id={8}
            diffrentColor={changeToMenuView}
            timeButton={timeButton}
            label={'Stop'}
          />
        </div>
      </div>
      <div className="gray-squares">{drawBoard()}</div>
    </div>
  );
};
