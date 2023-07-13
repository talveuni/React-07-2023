import React from 'react'
//import poedFailist from "../data/poed.json" 
import { useParams } from 'react-router-dom';

function YksikPood() {
    const {yksPood} = useParams(); //Reacti hookid: useState, useRef, useParams
  //  const leitud = poedFailist[yksPood]; 
  

  return (
    <div>
        <div>Poe nimi: {yksPood} </div>
        
    </div>
  )
}

export default YksikPood