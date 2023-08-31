import React, { useContext } from 'react'
import { AllGamesContext } from '../store/AllGamesContext'
import { Table } from 'react-bootstrap'


function ScoreBoard() {
  const {allGames} = useContext(AllGamesContext)

  return (
    <div>
      <br />
      <h3>Previous games</h3>
      <Table striped>
        <thead>
        <tr>
          <th>Game</th>
          <th>Player 1</th>
          <th>Player 2</th>
          <th>Winner</th>
        </tr>
        </thead>
        <tbody>
          {allGames.map((game, index) => 
          <tr key={index}>
            <td> {index + 1} </td>
            <td> {game.player1} </td>
            <td> {game.player2} </td>
            <td> {game.winner} </td>      
         </tr> 
          )}
        </tbody>
      </Table>
    </div>
  )
}

export default ScoreBoard