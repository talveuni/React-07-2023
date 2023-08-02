import React, { useState } from 'react'

function ValitudTegelased() {
  const [valitudTegelased, uuendaValitudTegelased] = useState(JSON.parse(localStorage.getItem("valitudTegelased"))|| [])
  
  const eemaldaTegelane = (index) => {
    valitudTegelased.splice(index, 1);
    localStorage.setItem("valitudTegelased", JSON.stringify(valitudTegelased))
    uuendaValitudTegelased(valitudTegelased.slice()); 
  }

  const eemaldaK6ik = () => {
    localStorage.setItem("valitudTegelased", JSON.stringify([]))
    uuendaValitudTegelased([]); 
  }

  return (
    <div>
      
      {valitudTegelased.length > 0 && 
      <div>
        <div>Valitud tegelasi: {valitudTegelased.length}</div>
        <button onClick={eemaldaK6ik}>Eemalda kõik</button><br /><br />
      </div>}     
      {valitudTegelased.length === 0 && <div>Ühtegi tegelast pole valitud!</div>}

      {valitudTegelased.map((tegelane, index) => (
        <div key= {index}>
          <div>Eesnimi: {tegelane.eesnimi}</div>
          <div>Perekonnanimi: {tegelane.perekonnanimi}</div>
          <div>Elukoht: {tegelane.elukoht}</div>
          <div>Vanus: {tegelane.vanus}</div>
          <button onClick={()=> eemaldaTegelane(index)}>Eemalda</button> <br /><br />
      </div>        
      ))}      
    </div>
  )
}

export default ValitudTegelased