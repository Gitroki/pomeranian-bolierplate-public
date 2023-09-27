import { useState } from 'react';
import './styles.css';
import { MenuView } from './MenuView';
import { GameView } from './GameView';

export function HitTheMoleGame() {
  const [showMenuView, setShowMenuView] = useState(true);

  function showGameView() {
    setShowMenuView(false);
  }
  function changeToMenuView() {
    setShowMenuView(true);
  }

  const [howManyMoles, setHowManyMoles] = useState(0);

  const [howLong, setHowLong] = useState(0);

  const [count, setCount] = useState(0);

  const [isGameEnd, setIsGameEnd] = useState(false);

  function changeToGameEnd() {
    setIsGameEnd(true);
  }

  return (
    <>
      {showMenuView === true || isGameEnd === true ? (
        <MenuView
          showGameView={showGameView}
          setHowManyMoles={setHowManyMoles}
          setHowLong={setHowLong}
          count={count}
          howLong={howLong}
        />
      ) : (
        <GameView
          changeToMenuView={changeToMenuView}
          howManyMoles={howManyMoles}
          howLong={howLong}
          count={count}
          setCount={setCount}
          changeToGameEnd={changeToGameEnd}
          isGameEnd={isGameEnd}
        />
      )}
    </>
  );
}
