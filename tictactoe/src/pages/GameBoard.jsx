import React, { useEffect, useState } from 'react'
import Square from '../components/Square'
import O from '../components/O';
import X from '../components/X';

function GameBoard() {
    const [cells, setCells] = useState(["","","","","","","","",""]);
    const [player, setPlayer] = useState("X")
    const [result, setResult] = useState({winner: "none", state: "none"});
    const patterns = [
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
        }, []);

    const checkWin = () => {
        patterns.forEach((currentPattern) =>{
            const firstPlayer = cells[currentPattern[0]];

            if (firstPlayer === "") {
                return;
            }

            let foundWinningPattern = true;
            currentPattern.forEach((index)=>{
                if (cells[index]!== firstPlayer) {
                    foundWinningPattern = false;
                }
            });
            if (foundWinningPattern){
                setResult({winner: player, state: "won"})
                console.log("win", player)
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
            setResult({winner: "nobody", state: "tie"});
            console.log("tie!")
        }

    }
    
    const chooseSquare = (index) => {
        setCells(cells.map((val, id) => {
            if (id===index && val ===""){
                console.log(cells)
                checkWin();
                checkTie();
                return player;     
            }
            return val;
        })) 
        if (player === "X") {
            setPlayer("O")
        } else {
            setPlayer("X")
    }
}

  return (
    <div>
        <div className='gameboard'>
            {cells.map((cell, index)=> 
            <div key={index} onClick={()=>chooseSquare(index)}>
                <Square val={cells[index]}/>
            </div> 
            )}
        </div>
    </div>
  )
}

export default GameBoard