import React, { useRef, useState } from 'react'

function LisaTegelane() {
  const [sonum, uuendaSonum] = useState('');
  const eesnimiRef = useRef();
  const perekonnanimiRef = useRef();
  const elukohtRef = useRef();
  const vanusRef = useRef();

  const [tegelased, uuendaTegelased] = useState(JSON.parse(localStorage.getItem("tegelased"))|| [])


  const lisaUusTegelane = () => {
    if (eesnimiRef.current.value === "" || perekonnanimiRef.current.value === "" || elukohtRef.current.value === "" || vanusRef <0) {
      uuendaSonum ("Tühja väärtusega ei saa tegelast lisada")

    } else {
      tegelased.push({
        "eesnimi": eesnimiRef.current.value,
        "perekonnanimi": perekonnanimiRef.current.value,
        "elukoht": elukohtRef.current.value,
        "vanus": Number(vanusRef.current.value),
    })
      localStorage.setItem("tegelased", JSON.stringify(tegelased));
      uuendaTegelased(tegelased.slice());
      uuendaSonum("Tegelane lisatud: " + eesnimiRef.current.value);
    }
  }


  return (
    <div>
      <div>{sonum}</div> <br />
      <label>Eesnimi:</label> <br />
      <input ref = {eesnimiRef} type="text" /> <br />
      <label>Perekonnanimi:</label> <br />
      <input ref={perekonnanimiRef} type="text" /><br />
      <label>Elukoht:</label><br />
      <input ref={elukohtRef} type="text" /><br />
      <label>Vanus</label><br />
      <input ref={vanusRef} type="number" /><br />

      <button onClick={lisaUusTegelane}>Lisa uus</button> <br /> <br />

    </div>
  )
}

export default LisaTegelane