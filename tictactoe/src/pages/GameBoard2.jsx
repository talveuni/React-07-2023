import React, { useEffect, useState } from 'react'
import Square from '../components/Square'


function GameBoard2() {
    const [cells, setCells] = useState(["","","","","","","","",""]);
    const [player, setPlayer] = useState("")
    // const [result, setResult] = useState({winner: "none", state: "none"});
    const [winningPlayer, setWinningPlayer] = useState("");
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
    const squaresClicked = [];

     useEffect(() => {
            checkWin();
            checkTie();
         
            // if (player === "X") {
            //     setPlayer("O")
            //     setMessage("O's turn")
              
            // } else {
            //     setPlayer("X")
            //     setMessage("X's turn")
            // }     
        }, [cells]);

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
                setWinningPlayer(player);
                // console.log(player)
                setFinalMessage(player + " wins!")

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
            // setResult({winner: "nobody", state: "tie"});
            // console.log("tie!")
            setFinalMessage("it's a tie!")
        }
    }
    
    const chooseSquare = (index) => {   
        
        if (finalMessage !== "") {
            return
        }
            
        setCells(cells.map((val, id) => {
            
           
            if (id===index && val ===""){
                // console.log(cells)
                // console.log(player)
                return player;     
            }
            return val;
        })) 
        if(squaresClicked.includes(index)) {
            return; 
        } else {
            setMessage(player === "X" ? "O's turn" : "X's turn");
            setPlayer(player === "X" ? "O" : "X");
        }
        squaresClicked.push(index); 
        console.log(squaresClicked)
}

const newGame = () => {
    setCells(["","","","","","","","",""]);
    setFinalMessage("");
}

  return (
    <div>
        <div className='gameboard'>
            {cells.map((cell, index)=> 
            <div key={index} onClick={()=>chooseSquare(index)}>
                <Square val={cells[index]}/>
            </div> 
            )}
        </div> <br />
        <h3>{finalMessage || message}</h3>
        <button onClick={newGame}>New game</button>
    </div>
  )
}

export default GameBoard2