import React, { useState } from 'react'

function Hinnad() {
const [hinnad, uuendaHinnad] = useState([23, 24, 34, 11, 37, 98, 10, 10]);
const reset = () => {
    uuendaHinnad([23, 24, 34, 11, 37, 98, 10, 10]);
}

const hinnadKasvavalt = () => {
hinnad.sort((a, b) => a - b);
uuendaHinnad(hinnad.slice());
//uuendaHinnad([...hinnad]); <-- alternatiivne variant chatGPT 

}

const hinnadKahanevalt = () => {
hinnad.sort((a, b) => b - a);
uuendaHinnad(hinnad.slice());
}

const arvutaKokku = () => {
    let summa = 0;
    hinnad.forEach(hind => summa = summa + hind);
    return summa;
}

const filtreeriSuuremadKui20 = () => {
    const filtreeritudHinnad = hinnad.filter(hind => hind > 20);
    uuendaHinnad(filtreeritudHinnad);

}

const filtreeriVaiksemadKui50 = () => {
    const filtreeritudHinnad = hinnad.filter(hind => hind < 50);
    uuendaHinnad(filtreeritudHinnad);

}


  return (
    <div>
        <button onClick={hinnadKasvavalt}>Hind kasvavalt</button>
        <button onClick={hinnadKahanevalt}>Hind kahanevalt</button>
        <button onClick={filtreeriSuuremadKui20}>Suuremad kui 20</button>
        <button onClick={filtreeriVaiksemadKui50}>Väiksemad kui 50</button>
        <button onClick={reset}>Reset</button>
        {hinnad.map((hind, index) => <div key={index}>{hind}€</div>)}
        <div>Kokku: {arvutaKokku()}€</div>
    </div>
  )
}

export default Hinnad