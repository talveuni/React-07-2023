import React from 'react'
import { useParams } from 'react-router-dom'
import tootedFailist from "../data/tooted.json"

function YksikToode() {
  const {index} = useParams(); //Reacti hookid: useState, useRef, useParams
  const leitud = tootedFailist[index]; // leitakse arrayst 1 toode


  return (
    <div>
        <div>Toote järjekorranumber: {index}</div>
        <div>Toote nimi: {leitud} </div>

    </div>
  )
}

export default YksikToode