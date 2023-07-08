import React, { useState } from "react";

function Avaleht() {
  const [kogus, uuendaKogus] = useState(
    JSON.parse(localStorage.getItem("kogus")) || 0
  );
  const [laigitud, uuendaLaigitud] = useState(
    JSON.parse(localStorage.getItem("laik")) || false
  );
  const [sonum, uuendaSonum] = useState("Uuenda kogust!");

  function suurenda() {
    uuendaKogus(kogus + 1);
    uuendaSonum("Suurendasid kogust");
    localStorage.setItem("kogus", kogus + 1);
  }

  function nulli() {
    uuendaKogus(0);
    uuendaSonum("Panid koguse nulli");
    localStorage.setItem("kogus", kogus);
  }

  function vahenda() {
    uuendaKogus(kogus - 1);
    uuendaSonum("V2hendasid kogust");
    localStorage.setItem("kogus", kogus - 1);
  }

  const uuendaLikeTrue = () => {
    uuendaLaigitud(true);
    localStorage.setItem("laik", true);
  };

  const uuendaLikeFalse = () => {
    uuendaLaigitud(false);
    localStorage.setItem("laik", false);
  };

  const uuendaLike = () => {
    uuendaLaigitud(!laigitud);
    localStorage.setItem("laik", !laigitud);
  };

  return (
    <div>
      {laigitud === true && <img src="/laigitud.svg" alt="" />}
      {laigitud === false && <img src="/mittelaigitud.svg" alt="" />}

      {laigitud}
      <button onClick={uuendaLike}>Muuda like'i</button>
      <button onClick={uuendaLikeTrue}>Muuda laigituks</button>
      <button onClick={uuendaLikeFalse}>Muuda mittelaigituks</button>

      <br />
      <div>{sonum}</div>
      {kogus > 0 && <button onClick={nulli}>Tagasi nulli</button>}
      <br />

      <button disabled={kogus === 0} onClick={vahenda}>
        -
      </button>
      <span className={kogus >= 10 ? "kuldne" : undefined}>{kogus}</span>
      <button onClick={suurenda}>+</button>
    </div>
  );
}

export default Avaleht;
