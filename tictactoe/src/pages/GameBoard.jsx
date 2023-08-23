import React, { useContext, useEffect, useState } from 'react'
import Square from '../components/Square'
import { CurrentPlayersContext } from '../store/CurrentPlayersContext';
import { AllGamesContext } from '../store/AllGamesContext';
import { Button } from 'react-bootstrap';

function GameBoard() {
    const [cells, setCells] = useState(["","","","","","","","",""]);
    const { playerO, playerX } = useContext(CurrentPlayersContext);
    const {allGames} = useContext(AllGamesContext)
    const [player, setPlayer] = useState(playerX);
    const [finalMessage, setFinalMessage] = useState("");
    //const [message, setMessage] = useState("");
    const winningPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

     useEffect(() => {
        checkWin();
        checkTie();
        setPlayer(prevPlayer => (prevPlayer === playerX ? playerO : playerX)); // Use a callback function to update player

        // setMessage(player === playerX ? playerO + "'s turn" : playerX + "'s turn"); // Update the message based on the current player
       
    }, [cells, playerO, playerX]);

    const checkWin = () => {
        winningPatterns.forEach((currentPattern) =>{
            const currentCell = cells[currentPattern[0]];

            if (currentCell === "") {
                return;
            }

            let foundWinningPattern = true;
            currentPattern.forEach((index)=>{
                if (cells[index]!== currentCell) {
                    foundWinningPattern = false;
                }
            });

            if (foundWinningPattern){
                setFinalMessage(player + " wins!")
                allGames.push({
                    "player1": playerX,
                    "player2": playerO,
                    "winner": player
                })
            }
        })
    }
    

    const checkTie = () => {
        let filled = true;
        cells.forEach((cell)=> {
            if (cell ==="") {
                filled = false
            }
        })

        if (filled) {
            checkWin();         
            setFinalMessage("it's a tie!")
            allGames.push({
                "player1": playerX,
                "player2": playerO,
                "winner": "-"
            })
        }
    }

        
    const chooseSquare = (index) => {
        if (finalMessage !== "") {
            return
        }
            
        setCells(cells.map((val, id) => {         
            if (id===index && val ===""){
                return player;     
            }
            return val;
        })) 
}

const newGame = () => {
    setCells(["","","","","","","","",""]);
    setFinalMessage("");
    setPlayer(player)
}

  return (
    <div>
        <div className='gameboard'>
            {cells.map((cell, index)=> 
            <div key={index} onClick={()=>chooseSquare(index)}>
                <Square val={cell}/>
            </div> 
            )}
        </div> <br />
        {/* <h3>{finalMessage || message}</h3> */}
        <h3>{finalMessage}</h3>
        <Button onClick={newGame}>Play again!</Button>
    </div>
  )
}

export default GameBoard