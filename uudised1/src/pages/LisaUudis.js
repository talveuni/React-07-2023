import React, { useRef, useState } from 'react'

function LisaUudis() {
    const uudiseRef = useRef();
    const [s6num, uuendaS6num] = useState("Test");

    const lisaUudis = () => {
      let uudised = localStorage.getItem("uudised");
      uudised = JSON.parse(uudised) || [];
      uudised.push(uudiseRef.current.value);
      uudised = JSON.stringify(uudised);
      localStorage.setItem("uudised", uudised);
    }

    const kontolliAlgust2hte = () => {
      uuendaS6num("");

      if (uudiseRef.current.value.charAt(0) !== uudiseRef.current.value.charAt(0).toUpperCase()) {
        uuendaS6num("Uudis peab algama suure algustähega, palun paranda")
      } 
      
      if (uudiseRef.current.value.includes("  ")) {
        uuendaS6num("Sisestasid mitu tühikut, palun paranda")
      }
    }

  return (
    <div>
        <br />
        {s6num} <br />
        <label>Uudise pealkiri</label> <br />
        <input onChange={kontolliAlgust2hte} ref={uudiseRef} type="text" /> <br />
        <button  onClick={lisaUudis}>Lisa uudis</button>
    </div>
  )
}

export default LisaUudis