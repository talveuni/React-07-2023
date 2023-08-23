import React, { useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { CurrentPlayersContext } from '../store/CurrentPlayersContext';
import { Button } from 'react-bootstrap';


function HomePage() {
    const playerXNameRef = useRef("");
    const playerONameRef = useRef("");
    const navigate = useNavigate();
    const {playerO, playerX, setPlayerO, setPlayerX } = useContext(CurrentPlayersContext);
    
    const savePlayers = () => {
       setPlayerO(playerONameRef.current.value)
       setPlayerX(playerXNameRef.current.value)
       navigate("/game");
    }

  return (
    <div>
        <label>Player X </label> <br />
        <input ref={playerXNameRef} defaultValue={playerX} type="text" /> <br /><br />
        <label>Player O</label> <br />
        <input ref={playerONameRef} defaultValue={playerO} type="text" /> <br /><br />
        <Button onClick={savePlayers}>Play!</Button>
    </div>
  )
}
export default HomePage