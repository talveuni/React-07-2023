import React, { useRef, useState } from 'react'
import tootedFailist from "../data/tooted.json" // . sama kaust, .. kausta võrra üleval
import { ToastContainer, toast } from 'react-toastify';

function LisaToode() {
  const [sonum, uuendaSonum] = useState("");
  const inputiLuger = useRef(); 
 //vanem variant ES5
 // function lisa() { }

  //uuem variant ES6
  const lisa = () => {
    if (inputiLuger.current.value === "") {
      uuendaSonum ("Tühja väärtusega toodet ei saa lisada");
      toast.error ("Tühja väärtusega toodet ei saa lisada");

    } else {
      uuendaSonum("Toode lisatud: " + inputiLuger.current.value);
      tootedFailist.push(inputiLuger.current.value);
      toast.success("Edukalt " + inputiLuger.current.value + " lisatud");
      inputiLuger.current.value = "";
      // edasi tuleks andmebaasi lisamine, hetkel faili ei salvesta
    }
  }


  return (
    <div>
      <div>{sonum}</div> <br />
      <label>Toote nimi</label> <br />
      <input ref={inputiLuger} type="text" /> <br />
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