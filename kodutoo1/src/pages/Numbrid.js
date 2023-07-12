import React, { useState } from "react";

function Numbrid() {
  const [numbrid, uuendaNumbreid] = useState([
    4, 23, 7, 39, 19, 0, 9, 14, 135, 2, 1, 11
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

  const numbridEsimeseNrJ2rgiKasvavalt = () => {
    const sorteeriEsimeseNrJ2rgiKasvavalt = (a, b) => {
        const numberA = a.toString();
        const numberB = b.toString();
    
        let indexA = 0;
        let indexB = 0;
    
        while (indexA < numberA.length && indexB < numberB.length) {
            const digitA = parseInt(numberA[indexA]);
            const digitB = parseInt(numberB[indexB]);
      
            if (digitA < digitB) {
              return -1;
            } else if (digitA > digitB) {
              return 1;
            }
      
            indexA++;
            indexB++;
          }
      
          return numberA.length - numberB.length;
        };
    
      const sorteeritudEsimeseJ2rgiKas = [...numbrid].sort(sorteeriEsimeseNrJ2rgiKasvavalt);
      uuendaNumbreid(sorteeritudEsimeseJ2rgiKas);
  }

  const numbridEsimeseNrJ2rgiKahanevalt= () => {
    const sorteeriEsimeseNrJ2rgiKahanevalt = (a, b) => {
        const numberA = a.toString();
        const numberB = b.toString();
    
        let indexA = 0;
        let indexB = 0;
    
        while (indexA < numberA.length && indexB < numberB.length) {
            const digitA = parseInt(numberA[indexA]);
            const digitB = parseInt(numberB[indexB]);
      
            if (digitB < digitA) {
              return -1;
            } else if (digitB > digitA) {
              return 1;
            }
      
            indexA++;
            indexB++;
          }
      
          return numberB.length - numberA.length;
        };
    
      const sorteeritudEsimeseJ2rgiKas = [...numbrid].sort(sorteeriEsimeseNrJ2rgiKahanevalt);
      uuendaNumbreid(sorteeritudEsimeseJ2rgiKas);
  }
  
  const filtreeriSuuremadKui8 = () => {
    const tulemus = numbrid.filter((number) => number > 8);
    uuendaNumbreid(tulemus);
  };

  const filtreeriVaiksemadKui10 = () => {
    const tulemus = numbrid.filter((number) => number < 10);
    uuendaNumbreid(tulemus);
  };

  const filtreeriPaaris = () => {
    const paarisArvud = numbrid.filter(number => number % 2 === 0)
    uuendaNumbreid(paarisArvud);

  }

  const filtreeriPaaritud = () => {
    const paaritudArvud = numbrid.filter(number => number % 2 !== 0)
    uuendaNumbreid(paaritudArvud);

  }

  const filtreeriYhegaAlgavad= () => {
    const yhegaAlgavad = numbrid.filter(number => number.toString().startsWith('1'));
    uuendaNumbreid(yhegaAlgavad)

  }

  const filtreeriSisaldabKolme= () => {
    const sisaldabKolme = numbrid.filter(number => number.toString().includes('3'));
    uuendaNumbreid(sisaldabKolme)
  }



  return (
    <div>
      {numbrid.map((number, index) => (
        <div key={index}>{number}</div>
      ))}
      <button onClick={reset}>Reset</button> <br /><br />
      <button onClick={numbridKahanevalt}> Numbrid kahanevalt</button>
      <button onClick={numbridKasvavalt}> Numbrid kasvavalt</button>
      <button onClick={numbridEsimeseNrJ2rgiKasvavalt}>
        Esimese numbri järgi kasvavalt
      </button>
      <button onClick={numbridEsimeseNrJ2rgiKahanevalt}>
        Esimese numbri järgi kahanevalt
      </button>
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
