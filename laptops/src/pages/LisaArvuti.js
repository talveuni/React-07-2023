import React, { useRef, useState } from "react";

function LisaArvuti() {
  const [message, setMessage] = useState("Lisa arvuti");
  const [n2itaNuppu, uuendan2itaNuppu] = useState(true);
  const markRef = useRef();
  const mudelRef = useRef();
  const maksumusRef = useRef();

  function addProduct() {
    setMessage("Arvuti lisatud");
    uuendan2itaNuppu(false);
    const newComputer = {
      mark: markRef.current.value,
      mudel: mudelRef.current.value,
      maksumus: maksumusRef.current.value,
    };
    const computers = JSON.parse(localStorage.getItem("laptops")) || [];
    computers.push(newComputer);
    localStorage.setItem("laptops", JSON.stringify(computers));
  }

  return (
    <div>
      <div>{message}</div>
      <label>Mark</label> <br />
      <input ref={markRef} type="text" /> <br />
      <label>Mudel</label> <br />
      <input ref={mudelRef} type="text" /> <br />
      <label>Hind</label> <br />
      <input ref={maksumusRef} type="number" /> <br />
      {message === "Lisa arvuti" && (
        <button onClick={() => addProduct()}>Sisesta</button>
      )}
    </div>
  );
}

export default LisaArvuti;
