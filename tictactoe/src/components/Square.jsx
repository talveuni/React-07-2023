import React from 'react'
import X from './X';
import O from './O';

function Square({val, chooseSquare}) {
 
  
  return (
    <div className='square' onClick={chooseSquare}>
       {val === "X" && <X/>}
       {val === "O" && <O/>}
    </div>
    
  )
}

export default Square