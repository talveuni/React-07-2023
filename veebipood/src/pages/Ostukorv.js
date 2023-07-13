import React, { useState } from 'react'
import { Link } from "react-router-dom";
import ostukorvFailist from "../data/ostukorv.json"

function Ostukorv() {
  const [ostukorv, uuendaOstukorv] = useState(ostukorvFailist);
  
  const tyhjenda = () => {
    ostukorv.splice(0); // kui ei ütle mitu, kustutab kõik
    uuendaOstukorv(ostukorv.slice());
  }
  
  const eemalda = (index) => {
    ostukorv.splice(index,1); // kustutamiseks - (mitmendat, mitu tk)
    uuendaOstukorv(ostukorv.slice());
  }

  const lisa = (toode) => {
    ostukorv.push(toode);
    uuendaOstukorv(ostukorv.slice());
    
  }

  return (
    <div>
      <button onClick={tyhjenda}>Tühjenda</button>
      <div>Kokku: {ostukorv.length} tk</div>
      {ostukorv.map((toode, index) => 
      <div key={index}>
        {toode}
        <button onClick={() => eemalda(index)}>x</button>
        <button onClick={() => lisa (toode)}>+</button>
      </div>)}

      <Link to = '/'> Mine tooteid lisama</Link>
   
    </div>

  )
}

export default Ostukorv