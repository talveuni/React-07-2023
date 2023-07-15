import React, { useRef } from "react";
import joogidFailist from "../joogid.json";

function LisaJook() {
  const jookRef = useRef();

  const lisaUus = () => {
    joogidFailist.push(jookRef.current.value);
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
