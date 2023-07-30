import React, { useRef } from 'react'

function LisaUudis() {
    const uudiseRef = useRef();
    const lisaUudis = () => {
      let uudised = localStorage.getItem("uudised");
      uudised = JSON.parse(uudised) || [];
      uudised.push(uudiseRef.current.value);
      uudised = JSON.stringify(uudised);
      localStorage.setItem("uudised", uudised);

    }

  return (
    <div>
        <br />
        <label>Uudise pealkiri</label> <br />
        <input ref={uudiseRef} type="text" /> <br />
        <button onClick={lisaUudis}>Lisa uudis</button>
    </div>
  )
}

export default LisaUudis