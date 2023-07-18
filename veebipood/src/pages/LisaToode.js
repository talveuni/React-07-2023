import React, { useRef, useState } from 'react'
import tootedFailist from "../data/tooted.json" // . sama kaust, .. kausta võrra üleval
import { ToastContainer, toast } from 'react-toastify';

function LisaToode() {
  const [sonum, uuendaSonum] = useState("");
  const nimiRef = useRef(); 
  const hindRef = useRef(); 
  const aktiivneRef = useRef(); 
  const piltRef = useRef(); 

 //vanem variant ES5
 // function lisa() { }

  //uuem variant ES6
  const lisa = () => {
    if (nimiRef.current.value === "") {
      uuendaSonum ("Tühja väärtusega toodet ei saa lisada");
      toast.error ("Tühja väärtusega toodet ei saa lisada");

    } else {
      uuendaSonum("Toode lisatud: " + nimiRef.current.value);
     // tootedFailist.push(inputiLuger.current.value);
      tootedFailist.push( {
        "nimi": nimiRef.current.value,
        "hind": Number(hindRef.current.value), //väärtus numbrina
        "aktiivne": aktiivneRef.current.value.checked, //väärtus boolean
        "pilt": piltRef.current.value
    });

      toast.success("Edukalt " + nimiRef.current.value + " lisatud");
      nimiRef.current.value = "";
      hindRef.current.value= "";
      aktiivneRef.current.checked= false;
      piltRef.current.value="";
      // edasi tuleks andmebaasi lisamine, hetkel faili ei salvesta
    }
  }


  return (
    <div>
      <div>{sonum}</div> <br />
      <label>Toote nimi</label> <br />
      <input ref={nimiRef} type="text" /> <br />
      <label>Toote hind</label> <br />
      <input ref={hindRef} type="number" /> <br />
      <label>Toote aktiivsus</label> <br />
      <input ref={aktiivneRef} type="checkbox" /> <br />
      <label>Toote pilt</label> <br />
      <input ref={piltRef} type="text" /> <br />
      <button onClick = {lisa}>Lisa</button> <br />
      
      <ToastContainer
        position='bottom-right'
        autoClose={4000}
        theme= {localStorage.getItem("teema") === "tume" ? "light" : 'dark'}
      />
    </div>
    
  )
}

export default LisaToode