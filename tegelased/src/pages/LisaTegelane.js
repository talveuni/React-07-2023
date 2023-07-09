import React, { useRef, useState } from 'react'

function LisaTegelane() {
  const [sonum, uuendaSonum] = useState('');
  const inputiLuger = useRef();

  const lisa = () => {
    if (inputiLuger.current.value === "") {
      uuendaSonum ("Tühja nimega ei saa lisada")

    } else {
      uuendaSonum("Tegelane lisatud: " + inputiLuger.current.value);
    }
  }


  return (
    <div>
      {sonum}
      <br />
      <br />
      <label>Tegelase nimi</label> <br />
      <input ref = {inputiLuger} type="text" /> <br />
      <button onClick={lisa}>Lisa uus</button> <br />

    </div>
  )
}

export default LisaTegelane