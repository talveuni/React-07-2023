import React, { useContext } from 'react'
import { AllGamesContext } from '../store/AllGamesContext'


function ScoreBoard() {
  const {allGames, setAllGames} = useContext(AllGamesContext)

  return (
    <div>
      <h3>Previous games</h3>
     <table>
        <thead>
        <tr>
          <th>Game (X)</th>
          <th>Player 1 (X)</th>
          <th>Player 2 (O)</th>
          <th>Winner</th>
        </tr>
        </thead>
        <tbody>
          {allGames.map((game, index) => 
          <tr key={index}>
            <td > {index + 1} </td>
            <td > {game.player1} </td>
            <td> {game.player2} </td>
            <td> {game.winner} </td>      
         </tr> 
          )}
        </tbody>
      </table>
    </div>
  )
}

export default ScoreBoard