import React, { useContext, useEffect, useState } from 'react'
import Square from '../components/Square'
import { CurrentPlayersContext } from '../store/CurrentPlayersContext';
import { AllGamesContext } from '../store/AllGamesContext';
import { Button } from 'react-bootstrap';

function GameBoard() {
    const [cells, setCells] = useState(["","","","","","","","",""]);
    const { playerO, playerX } = useContext(CurrentPlayersContext);
    const {allGames, setAllGames} = useContext(AllGamesContext);
    const { gameHistory, setGameHistory } = useContext(AllGamesContext);
    const [player, setPlayer] = useState(playerX);
    const [finalMessage, setFinalMessage] = useState("");
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

        useEffect(() => {
        checkTie();
        checkWin();
        setPlayer(prevPlayer => (prevPlayer === playerX ? playerO : playerX));       
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
                const newGameEntry = {
                    "player1": playerX,
                    "player2": playerO,
                    "winner": player
                };
                setAllGames([...allGames, newGameEntry]);
                setGameHistory([...gameHistory, newGameEntry]);
                setFinalMessage(player + " wins!");
                setHasWon(true);
            }
        })
    }

    const checkTie = () => {
        if (!hasWon && cells.every(cell => cell !== "")) {
            const newGameEntry = {
                "player1": playerX,
                "player2": playerO,
                "winner": "-"
            };
            setAllGames([...allGames, newGameEntry]);
            setGameHistory([...gameHistory, newGameEntry]);
            setFinalMessage("it's a tie!");
            setHasWon(true);
        }
    }

    const chooseSquare = (index) => {
        if (hasWon) {
            return;
        }
        const clickedCell = cells[index];
        if (clickedCell === "") {
            setCells(cells.map((val, id) => (id === index && val === "") ? player : val));
        }
    }
        
    const newGame = () => {
        setCells(["","","","","","","","",""]);
        setFinalMessage("");
        setPlayer(player);
        setHasWon(false);
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
        <h3>{finalMessage}</h3>
        <Button onClick={newGame}>Play again!</Button>
    </div>
  )
}

export default GameBoard