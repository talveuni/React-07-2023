import React, { useRef } from 'react'

function ScoreBoard() {
    const player1NameRef = useRef("");
    const player2NameRef = useRef("");

  return (
    <div>
        <h2>Tic-tac-toe game</h2>
        <label>Player 1</label> <br />
        <input ref={player1NameRef} type="text" /> <br /><br />
        <label>Player 2</label> <br />
        <input ref={player2NameRef} type="text" /> <br /><br />
        <button>Play!</button>
    </div>
  )
}

export default ScoreBoard