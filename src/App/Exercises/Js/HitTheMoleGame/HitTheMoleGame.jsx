import { useState } from 'react';
import './styles.css';
import { MenuView } from './MenuView';
import { GameView } from './GameView';

export function HitTheMoleGame() {
  return (
    <>
      <div>
        <MenuView />
      </div>
      <div>
        <GameView />
      </div>
    </>
  );
}
