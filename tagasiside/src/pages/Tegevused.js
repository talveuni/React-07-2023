import React, { useState } from "react";
import tegevusteFail from "../tegevused.json";

function Tegevused() {
  const [tegevused, uuendaTegevused] = useState(tegevusteFail);

  const kuvaID1Tegevused = () => {
    const tulemus = tegevused.filter((element) => element.userId === 1);
    uuendaTegevused(tulemus);
  };

  const kuvaID2Tegevused = () => {
    const tulemus = tegevused.filter((element) => element.userId === 2);
    uuendaTegevused(tulemus);
  };

  const kuvaID3Tegevused = () => {
    const tulemus = tegevused.filter((element) => element.userId === 3);
    uuendaTegevused(tulemus);
  };

  const kuvaValmisTegevused = () => {
    const tulemus = tegevused.filter((element) => element.completed === true);
    uuendaTegevused(tulemus);
  };

  const kuvaMitteValmisTegevused = () => {
    const tulemus = tegevused.filter((element) => element.completed === false);
    uuendaTegevused(tulemus);
  };

  const kuvaTAlgavTegevused = () => {
    const tulemus = tegevused.filter((element) => element.title.startsWith('t'));
    uuendaTegevused(tulemus);
  };

  const kuvaRohkemKui20 = () => {
    const tulemus = tegevused.filter((element) => element.title.length > 20);
    uuendaTegevused(tulemus);
  };

  const n2itaK6iki = () => {
    uuendaTegevused(tegevusteFail);
  }
 

  return (
    <div>
      <div>Tegevuste arv: {tegevused.length}</div> <br />
      <button onClick={kuvaID1Tegevused}>ID 1 tegevused</button>
      <button onClick={kuvaID2Tegevused}>ID 2 tegevused</button>
      <button onClick={kuvaID3Tegevused}>ID 3 tegevused</button>
      <button onClick={kuvaValmisTegevused}>Kõik valmis tegevused</button>
      <button onClick={kuvaMitteValmisTegevused}>Kõik mittevalmis tegevused</button>
      <button onClick={kuvaTAlgavTegevused}>Kõik T-tähega algavad tegevused</button>
      <button onClick={kuvaRohkemKui20}>Tähemärke rohkem kui 20 tegevused</button>
      <button onClick={n2itaK6iki}>Kõik tegevused</button>

      {tegevused.map((element) => (
        <div>
          <div>{element.userId}</div>
          <div>{element.id}</div>
          <div>{element.title}</div>
          <div>{element.completed}</div>
          <br />
        </div>
      ))}
    </div>
  );
}

export default Tegevused;
