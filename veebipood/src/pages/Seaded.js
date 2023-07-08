import React, { useState } from "react";

function Seaded() {
  const [keel, uuendaKeel] = useState(localStorage.getItem("keel") || "est");

  const uuendaKeelEst = () => {
    uuendaKeel("est");
    localStorage.setItem("keel", "est");
  };

  const uuendaKeelEng = () => {
    uuendaKeel("eng");
    localStorage.setItem("keel", "eng");
  };
  const uuendaKeelRus = () => {
    uuendaKeel("rus");
    localStorage.setItem("keel", "rus");
  };

  return (
    <div>
      <button onClick={uuendaKeelEst}>Eesti keel</button>
      <button onClick={uuendaKeelEng}>English</button>
      <button onClick={uuendaKeelRus}>Rycckij</button>
      <br />
      {keel === "est" && <div>Leht on eestikeelne</div>}
      {keel === "eng" && <div>Page is in English</div>}
      {keel === "rus" && <div>Rycckij jazõk</div>}
    </div>
  );
}

export default Seaded;
