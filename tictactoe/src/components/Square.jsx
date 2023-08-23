import React, { useContext } from 'react'
import X from './X';
import O from './O';
import { CurrentPlayersContext } from '../store/CurrentPlayersContext';

function Square({val, chooseSquare}) {
  const { playerO, playerX } = useContext(CurrentPlayersContext);
  
  return (
    <div className='square' onClick={chooseSquare}>
       {val === playerX && <X/>}
       {val === playerO && <O/>}
    </div>
    
  )
}

export default Square