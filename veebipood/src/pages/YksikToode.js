import React from 'react'
import { useParams } from 'react-router-dom'
import tootedFailist from "../data/tooted.json"

function YksikToode() {
  const {index} = useParams(); //Reacti hookid: useState, useRef, useParams
  const leitud = tootedFailist[index]; // leitakse arrayst 1 toode

  // { } tahavad ühte elementi, vajadusel saab mitme divi ümber panna tühja tagi <> </>
  
  return (
    <div>
      
      
        { leitud !== undefined && 
        <>
          <div>Toote järjekorranumber: {index}</div>
          <div>Toote nimi: {leitud.nimi} </div>
          <div>Toote hind: {leitud.hind} €</div>
          <div><img className ="pilt" src={leitud.pilt} alt="" /></div>

        </> }
             
        {leitud === undefined && <div>Toodet ei leitud!</div>} 

    </div>
  )
}

export default YksikToode