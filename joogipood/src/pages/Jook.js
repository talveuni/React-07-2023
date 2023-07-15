import React from 'react'
import { useParams } from 'react-router-dom'
import joogidFailist from '../joogid.json'

function Jook() {
    const {number} = useParams();
    const leitudJook = joogidFailist[number];
  
    return (
    <div>
       Jook: {leitudJook}
       {leitudJook === undefined && <div>Jooki ei leitud</div>}
    </div>
  )
}

export default Jook