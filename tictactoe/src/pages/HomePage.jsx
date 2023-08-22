import React, { useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { CurrentPlayersContext } from '../store/CurrentPlayersContext';


function HomePage() {
    const playerXNameRef = useRef();
    const playerONameRef = useRef();
    const navigate = useNavigate();
    const {playerO, playerX, setPlayerO, setPlayerX } = useContext(CurrentPlayersContext);

    const savePlayers = () => {

        //currentPlayers.playerX = playerXNameRef.current.value;
        //console.log(currentPlayers.playerX) 
       // currentPlayers.playerO = playerONameRef.current.value;
       // console.log(currentPlayers.playerO)

       setPlayerO(playerONameRef.current.value)
       setPlayerX(playerXNameRef.current.value)
       console.log(playerO, playerX)
    
        // currentPlayers.push({
        //      "playerX": playerXNameRef.current.value}, {"playerO": playerONameRef.current.value})
                 
        // setCurrentPlayers(currentPlayers.slice());
        // console.log(currentPlayers)
        navigate("/game");

    }

  return (
    <div>
        <label>Player X </label> <br />
        <input ref={playerXNameRef} defaultValue={"X"} type="text" /> <br /><br />
        <label>Player O</label> <br />
        <input ref={playerONameRef} defaultValue={"O"} type="text" /> <br /><br />
        <button onClick={savePlayers}>Play!</button>
    </div>
  )
}

export default HomePage