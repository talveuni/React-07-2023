import React, { useRef, useState } from 'react'

function LisaTegelane() {
  const [sonum, uuendaSonum] = useState('');
  const nimiRef = useRef();

  const lisaUusTegelane = () => {
    if (nimiRef.current.value === "") {
      uuendaSonum ("Tühja nimega ei saa lisada")

    } else {
      uuendaSonum("Tegelane lisatud: " + nimiRef.current.value);
    }
  }


  return (
    <div>
      <div>{sonum}</div> <br />
      <label>Tegelase nimi:</label> <br />
      <input ref = {nimiRef} type="text" /> <br />
      <button onClick={lisaUusTegelane}>Lisa uus</button> <br /> <br />

    </div>
  )
}

export default LisaTegelane