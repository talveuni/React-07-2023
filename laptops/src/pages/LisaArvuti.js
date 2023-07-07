import React, { useState } from "react";

function LisaArvuti() {
  const [message, setMessage] = useState("Lisa arvuti");
  const [n2itaNuppu, uuendan2itaNuppu] = useState(true);

  function addProduct() {
    setMessage("Arvuti lisatud");
    uuendan2itaNuppu(false);
  }

  return (
    <div>
      <div>{message}</div>
      <label>Mark</label> <br />
      <input type="text" /> <br />
      <label>Mudel</label> <br />
      <input type="text" /> <br />
      <label>Hind</label> <br />
      <input type="number" /> <br />
      {n2itaNuppu === true && (<button onClick={() => addProduct()}>Sisesta</button>)}
    </div>
  );
}

export default LisaArvuti;
