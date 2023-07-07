import React, { useRef, useState } from 'react'

function LisaToode() {
  const [sonum, uuendaSonum] = useState("");
  const inputiLuger = useRef(); 
 //vanem variant ES5
 // function lisa() {

 //}

  //uuem variant ES6
  const lisa = () => {
    if (inputiLuger.current.value === "") {
      uuendaSonum ("Tühja väärtusega toodet ei saa lisada")


    } else {
      uuendaSonum("Toode lisatud: " + inputiLuger.current.value);

    }
  }


  return (
    <div>
      <div>{sonum}</div> <br />
      <label>Toote nimi</label> <br />
      <input ref={inputiLuger} type="text" /> <br />
      <button onClick = {lisa}>Lisa</button> <br />
    </div>
  )
}

export default LisaToode