import React, { useContext, useState } from 'react'
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

    const chooseSquare = (index) => {
        if (hasWon) {
            return;
        }
        const clickedCell = cells[index];
        if (clickedCell === "") {
            const updatedCells = [...cells];
            updatedCells[index] = player;
    
            const winningPlayer = checkWin(updatedCells);
            if (winningPlayer) {
                const newGameEntry = {
                    "player1": playerX,
                    "player2": playerO,
                    "winner": winningPlayer,
                };
                setAllGames([...allGames, newGameEntry]);
                setGameHistory([...gameHistory, newGameEntry]);
                setFinalMessage(winningPlayer + " wins!");
                setHasWon(true);
                setCells(updatedCells); 
                return;
            }
    
            if (!checkTie(updatedCells)) {
                setCells(updatedCells); 
                setPlayer(prevPlayer => (prevPlayer === playerX ? playerO : playerX)); 
            }
        }
    };

    const checkWin = (updatedCells) => {
        for (const currentPattern of winningPatterns) {
            const currentCell = updatedCells[currentPattern[0]];
    
            if (currentCell === "") {
                continue;
            }
    
            let foundWinningPattern = true;
            for (const index of currentPattern) {
                if (updatedCells[index] !== currentCell) {
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

    const checkTie = (updatedCells) => {
        if (updatedCells.every(cell => cell !== "")) {
            const newGameEntry = {
                "player1": playerX,
                "player2": playerO,
                "winner": "-",
            };
            setAllGames([...allGames, newGameEntry]);
            setGameHistory([...gameHistory, newGameEntry]);
            setFinalMessage("it's a tie!");
            setHasWon(true);
            setCells(updatedCells);
            return true;
        }
        return false;
    };


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