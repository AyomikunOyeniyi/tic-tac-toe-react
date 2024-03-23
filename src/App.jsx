import Player from "./components/Player"
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name={'Ayo'} symbol={'X'}></Player>
          <Player name={'Jenna'} symbol={'O'}></Player>
        </ol>

        GAME BOARD
      </div>

      LOG
    </main>
  )
}

export default App
