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

  return (
    <>
      {showMenuView === true ? (
        <MenuView showGameView={showGameView} />
      ) : (
        <GameView changeToMenuView={changeToMenuView} />
      )}
    </>
  );
}
