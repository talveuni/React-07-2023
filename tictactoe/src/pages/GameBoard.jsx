import React, { useContext, useEffect, useState } from 'react'
import Square from '../components/Square'
import { CurrentPlayersContext } from '../store/CurrentPlayersContext';
import { AllGamesContext } from '../store/AllGamesContext';


function GameBoard() {
    const [cells, setCells] = useState(["","","","","","","","",""]);
    const { playerO, playerX } = useContext(CurrentPlayersContext);
    const {allGames, setAllGames} = useContext(AllGamesContext)
    // const [winningPlayer, setWinningPlayer] = useState(playerO);
    const [player, setPlayer] = useState(playerO);
    const [finalMessage, setFinalMessage] = useState("");
    const [message, setMessage] = useState("");
   
 
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
        
        // setMessage(player + "'s turn");
        // setPlayer(player === playerX ? playerO : playerX);

        setPlayer(prevPlayer => (prevPlayer === playerX ? playerO : playerX)); // Use a callback function to update player
        setMessage(player === playerX ? playerO + "'s turn" : playerX + "'s turn"); // Update the message based on the current player
        
           
        //const nextPlayer = player === playerX ? playerO : playerX;
       
    }, [cells, playerO, playerX]);

    const checkWin = () => {
        winningPatterns.forEach((currentPattern) =>{
            const currentPlayer = cells[currentPattern[0]];

            if (currentPlayer === "") {
                return;
            }

            let foundWinningPattern = true;
            currentPattern.forEach((index)=>{
                if (cells[index]!== currentPlayer) {
                    foundWinningPattern = false;
                }
            });

            if (foundWinningPattern){
               // setWinningPlayer(player);
              //  console.log(winningPlayer)
                setFinalMessage(player + " wins!")
                allGames.push({
                    "player1": playerX,
                    "player2": playerO,
                    "winner": player
                })
                console.log(allGames)
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

            if(!checkWin()) {
                setFinalMessage("it's a tie!")            
            }
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
        <h3>{finalMessage || message}</h3>
        <button onClick={newGame}>New game</button>
    </div>
  )
}

export default GameBoard