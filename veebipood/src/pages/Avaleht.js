import React, { useState } from "react";

function Avaleht() {
  const [kogus, uuendaKogus] = useState(5);
  const [laigitud, uuendaLaigitud] = useState(false);
  const [sonum, uuendaSonum] = useState("Uuenda kogust!");

function suurenda() {
  uuendaKogus (kogus+1);
  uuendaSonum ("Suurendasid kogust")
}

function nulli() {
  uuendaKogus(0);
  uuendaSonum ("Panid koguse nulli")
}

function vahenda() {
  uuendaKogus (kogus-1);
  uuendaSonum ("V2hendasid kogust")
}

  return (
    <div>
      {laigitud === true && <img src="/laigitud.svg" alt="" />}
      {laigitud === false && <img src="/mittelaigitud.svg" alt="" />}

      {laigitud}
      <button onClick={() => uuendaLaigitud(!laigitud)}>Muuda like'i</button>
      <button onClick={() => uuendaLaigitud(true)}>Muuda laigituks</button>
      <button onClick={() => uuendaLaigitud(false)}>Muuda mittelaigituks</button>

      <br />
      <div>{sonum}</div>
      {kogus > 0 && (<button onClick={nulli}>Tagasi nulli</button>)}
      <br />

      <button disabled = {kogus===0} onClick={vahenda}>-</button>
      <span className={kogus >= 10 ? "kuldne" : undefined}>{kogus}</span>
      <button onClick={suurenda}>+</button>
    </div>
  );
}

export default Avaleht;
