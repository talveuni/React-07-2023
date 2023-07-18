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

  const arvutaKogusumma = () => {
    let summa = 0;
    ostukorv.forEach(toode => summa = summa + toode.hind);
    return summa;

  }

  return (
    <div>
      {ostukorv.length > 0 &&
      <div>
        <button onClick={tyhjenda}>Tühjenda</button>
        <div>Kokku: {ostukorv.length} tk</div>
      </div>}
     
      {ostukorv.map((toode, index) => 
      <div key={index}>
        {toode.nimi} - {toode.hind} €
        <button onClick={() => eemalda(index)}>x</button>
        <button onClick={() => lisa(toode)}>+</button>
      </div>)}

      {ostukorv.length === 0 && 
      <div>
        Ostukorv on tühi <br />
        <Link to = '/tooted'>Mine tooteid lisama</Link>
      </div>}

      {ostukorv.length > 0 && <div> Summa kokku: {arvutaKogusumma()} €</div> }
      
   
    </div>

  )
}

export default Ostukorv