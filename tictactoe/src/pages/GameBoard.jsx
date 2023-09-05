import React, { useContext, useState } from 'react'
import Square from '../components/Square'
import { CurrentPlayersContext } from '../store/CurrentPlayersContext';
import { AllGamesContext } from '../store/AllGamesContext';
import { Button } from 'react-bootstrap';

function GameBoard() {
    const [cells, setCells] = useState(["","","","","","","","",""]);
    const {playerO, playerX} = useContext(CurrentPlayersContext);
    const {allGames, setAllGames} = useContext(AllGamesContext);
    const [player, setPlayer] = useState(playerX);
    const [message, setMessage] = useState(player + "'s turn");
    const [hasWon, setHasWon] = useState(false);
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

    const chooseSquare = (index) => {
        if (hasWon) {
            return;
        }

        setMessage((player === playerX ? playerO : playerX) + "'s turn");    

        if (cells[index] === "") {
            cells[index] = player;
            checkTie();
            checkWin();          
        }
    };

    const checkWin = () => {
        const winningPlayer = checkWinningPatterns(cells);

            if (winningPlayer) {
                const newGameEntry = {
                    "player1": playerX,
                    "player2": playerO,
                    "winner": winningPlayer,
                };

                setAllGames([...allGames, newGameEntry]);
                setMessage(winningPlayer + " wins!");
                setHasWon(true);
                setCells(cells); 
                return;
            }
    }

    const checkWinningPatterns = () => {
        for (const currentPattern of winningPatterns) {
            const currentCell = cells[currentPattern[0]];
    
            if (currentCell === "") {
                continue;
            }
    
            let foundWinningPattern = true;
            for (const index of currentPattern) {
                if (cells[index] !== currentCell) {
                    foundWinningPattern = false;
                    break;
                }
            }
    
            if (foundWinningPattern) {
                return currentCell;
            }
        }
        return null;
    };

    const checkTie = () => {
        if (cells.every(cell => cell !== "")) {
            const newGameEntry = {
                "player1": playerX,
                "player2": playerO,
                "winner": "-",
            };
            setAllGames([...allGames, newGameEntry]);
            setMessage("it's a tie!");
            setHasWon(true);
           
        } else {
            setPlayer(player === playerX ? playerO : playerX);
        }
        
        setCells(cells); 
    };

    const newGame = () => {
        setCells(["","","","","","","","",""]);
        setPlayer(player);
        setMessage(player + "'s turn");
        setHasWon(false);
    }

    const checkPlayers = () => {

        for (let index = allGames.length; index > 0; index--) {
            const prevGame = allGames[index];
            console.log(prevGame)

            // if (prevGame.player1 === playerX & prevGame.player2 === playerO || prevGame.player1 === playerO & prevGame.player2 === playerX) {

            //     console.log("varasem võitja: " + player)
 
            //     return prevGame.winner

            // } 
            
        }


        // allGames.forEach(prevGame => {
        //     console.log(prevGame.player1)
        //     console.log(prevGame.player2)


            
            // setPlayer(player);
            // console.log(prevGame)
            // console.log(player)
          
            
        // });
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
        <h3>{message}</h3>
        <Button onClick={newGame}>Play again!</Button>
        <button onClick={checkPlayers}>check</button>
    </div>
  )
}

export default GameBoard