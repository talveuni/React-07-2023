import React, { useEffect, useRef, useState } from "react";
import config from "../data/config.json" 

function LisaJook() {
  const jookRef = useRef();
  const [joogid, uuendaJoogid] = useState([])

  useEffect(() => {
    fetch(config.joogidDbUrl)
      .then(res => res.json())
      .then(data => uuendaJoogid(data || [])) // null || []
  }, []);

  const lisaUus = () => {
    joogid.push({"nimi": jookRef.current.value});
    uuendaJoogid(joogid.slice());
    fetch(config.joogidDbUrl, {
      method: "PUT", //asendamine
      body: JSON.stringify(joogid)
    })
    jookRef.current.value="";
  };

  return (
    <div>
      <label>Uus jook</label>
      <input ref={jookRef} type="text" />
      <button onClick={lisaUus}>Lisa</button>
    </div>
  );
}

export default LisaJook;
