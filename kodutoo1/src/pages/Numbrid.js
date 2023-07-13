import React, { useState } from "react";

function Numbrid() {
  const [numbrid, uuendaNumbreid] = useState([
    4, 23, 7, 39, 19, 0, 9, 14, 135, 2, 1, 11,
  ]);
  const reset = () => {
    uuendaNumbreid([4, 23, 7, 39, 19, 0, 9, 14, 135, 2, 1, 11]);
  };

  const numbridKahanevalt = () => {
    numbrid.sort((a, b) => b - a);
    uuendaNumbreid(numbrid.slice());
  };

  const numbridKasvavalt = () => {
    numbrid.sort((a, b) => a - b);
    uuendaNumbreid(numbrid.slice());
  };

  const arvudEsimeseNrJ2rgiKahanevalt = () => {
    numbrid.sort((a, b) => a.toString().localeCompare(b.toString()));
    uuendaNumbreid(numbrid.slice());
  };

  const arvudEsimeseNrJ2rgiKasvavalt = () => {
    numbrid.sort((a, b) => b.toString().localeCompare(a.toString()));
    uuendaNumbreid(numbrid.slice());
  };

  const filtreeriSuuremadKui8 = () => {
    const tulemus = numbrid.filter((number) => number > 8);
    uuendaNumbreid(tulemus);
  };

  const filtreeriVaiksemadKui10 = () => {
    const tulemus = numbrid.filter((number) => number < 10);
    uuendaNumbreid(tulemus);
  };

  const filtreeriPaaris = () => {
    const paarisArvud = numbrid.filter((number) => number % 2 === 0);
    uuendaNumbreid(paarisArvud);
  };

  const filtreeriPaaritud = () => {
    const paaritudArvud = numbrid.filter((number) => number % 2 !== 0);
    uuendaNumbreid(paaritudArvud);
  };

  const filtreeriYhegaAlgavad = () => {
    const yhegaAlgavad = numbrid.filter((number) =>
      number.toString().startsWith("1")
    );
    uuendaNumbreid(yhegaAlgavad);
  };

  const filtreeriSisaldabKolme = () => {
    const sisaldabKolme = numbrid.filter((number) =>
      number.toString().includes("3")
    );
    uuendaNumbreid(sisaldabKolme);
  };

  return (
    <div>
      {numbrid.map((number, index) => (
        <div key={index}>{number}</div>
      ))}
      <button onClick={reset}>Reset</button> <br />
      <br />
      <button onClick={numbridKahanevalt}>Numbrid kahanevalt</button>
      <button onClick={numbridKasvavalt}>Numbrid kasvavalt</button>
      <button onClick={arvudEsimeseNrJ2rgiKahanevalt}>Esimese numbri järgi kasvavalt</button>
      <button onClick={arvudEsimeseNrJ2rgiKasvavalt}>Esimese numbri järgi kahanevalt</button>
      
      <br /> <br />
      <button onClick={filtreeriSuuremadKui8}>Suuremad kui 8</button>
      <button onClick={filtreeriVaiksemadKui10}>Väiksemad kui 10</button>
      <button onClick={filtreeriPaaris}>Paaris</button>
      <button onClick={filtreeriPaaritud}>Paaritud</button>
      <button onClick={filtreeriYhegaAlgavad}>1-ga algavad</button>
      <button onClick={filtreeriSisaldabKolme}>Sisaldab 3</button>
    </div>
  );
}

export default Numbrid;
