import React, { useState } from 'react'
import { Link } from "react-router-dom";

function Ostukorv() {
  const [ostukorv, uuendaOstukorv] = useState(['Coca Cola', 'Fanta', 'Sprite']);


  return (
    <div>
      {ostukorv.map((toode, index) => <div key={index}>{toode}</div>)}
      <Link to = '/'> Mine tooteid lisama</Link>
   
    </div>

  )
}

export default Ostukorv