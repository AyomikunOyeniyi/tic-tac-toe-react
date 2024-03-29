import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/Gameboard";

function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  function handleActivePlayer() {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name={'Player 1'} symbol={'X'} isActive={activePlayer === 'X'}></Player>
          <Player name={'Player 2'} symbol={'O'} isActive={activePlayer === 'O'}></Player>
        </ol>
        <GameBoard onSelectSquare={handleActivePlayer} activePlayerSymbol={activePlayer}></GameBoard>
      </div>

      LOG
    </main>
  )
}

export default App
