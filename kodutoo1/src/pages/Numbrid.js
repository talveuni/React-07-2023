import React, { useState } from 'react'

function Numbrid() {
    const [numbrid, uuendaNumbreid] = useState([4, 23, 7, 39, 19, 0, 9, 14, 135, 2, 1]);
    const reset = () => {
        uuendaNumbreid([4, 23, 7, 39, 19, 0, 9, 14, 135, 2, 1]);
    }
 
    const numbridKahanevalt = () => {
        numbrid.sort((a, b) => b - a);
        uuendaNumbreid(numbrid.slice());
    }

    const numbridKasvavalt = () => {
        numbrid.sort((a, b) => a - b);
        uuendaNumbreid(numbrid.slice());
    }

    const filtreeriSuuremadKui8 = () => {
        const tulemus = numbrid.filter(number => number > 8);
        uuendaNumbreid(tulemus);
    }

    const filtreeriVaiksemadKui10 = () => {
        const tulemus = numbrid.filter(number => number < 10);
        uuendaNumbreid(tulemus);
    }
  
    return (
    <div>
        {numbrid.map((number) => <div key={number}>{number}</div>)}
        <button onClick={reset}>Reset</button>
        <button onClick={numbridKahanevalt}> Numbrid kahanevalt</button>
        <button onClick={numbridKasvavalt}> Numbrid kasvavalt</button> <br />

        <button onClick= {filtreeriSuuremadKui8}>Suuremad kui 8</button>
        <button onClick= {filtreeriVaiksemadKui10}>Väiksemad kui 10</button>

    </div>
  )
}

export default Numbrid