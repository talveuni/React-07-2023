import React, { useState } from 'react'
import poedFailist from "../data/poed.json";

function Poed() {
  const [poed, uuendaPoed] = useState(poedFailist);
  const reset = () => {
    uuendaPoed(poedFailist)
  }
  const sorteeriAZ = () => {
    //poed.sort(); <-- default variant toimib siin
    poed.sort((a,b) => a.localeCompare(b, 'fi'))
    uuendaPoed(poed.slice());
    
  };
  const sorteeriZA = () => {
    poed.sort((a,b) => b.localeCompare(a), 'fi')
    uuendaPoed(poed.slice());
  };
  const sorteeriTahedKasv = () => {
    poed.sort((a,b) => a.length - b.length)
    uuendaPoed(poed.slice());
  };
  const sorteeriTahedKah = () => {
    poed.sort((a,b) => b.length - a.length)
    uuendaPoed(poed.slice());
   
  };
  const sorteeriKolmasTaht = () => {
    poed.sort((a,b) => a[2].localeCompare(b[2], 'fi'))
    uuendaPoed(poed.slice());

  };

  const filtreeriEgaLoppevad = () => {
    const filtreeritudPoed = poed.filter(pood => pood.endsWith('e'));
    uuendaPoed(filtreeritudPoed);

  };
  const filtreeriSisaldabLyhendit = () => {
    const filtreeritudPoed = poed.filter(pood => pood.includes('is'));
    uuendaPoed(filtreeritudPoed);
  };

  const filtreeriPikkus9 = () => {
    const filtreeritudPoed = poed.filter(pood => pood.length === 9);
    uuendaPoed(filtreeritudPoed);
  };
  const filtreeriVahemalt7Tahte = () => {
    const filtreeritudPoed = poed.filter(pood => pood.length >= 7);
    uuendaPoed(filtreeritudPoed);

  };
  const filtreeriKolmasTahtI = () => {
    const filtreeritudPoed = poed.filter(pood => pood[2] === 'i');
    uuendaPoed(filtreeritudPoed);

  };

    return (
    <div>
        <button onClick={reset}>Reset</button>
        <div>Kokku: {poed.length} tk</div>
        
        <button onClick={sorteeriAZ}>Sorteeri A-Z </button>
        <button onClick={sorteeriZA}>Sorteeri Z-A </button>
        <button onClick={sorteeriTahedKah}>Sorteeri tähtede arv kahanevalt</button>
        <button onClick={sorteeriTahedKasv}>Sorteeri tähtede arv kasvavalt</button>
        <button onClick={sorteeriKolmasTaht}>Sorteeri 3. tähe järgi A-Z</button>
        <br /><br />

        <button onClick={filtreeriEgaLoppevad}>Jäta alles e-ga lõppevad</button>
        <button onClick={filtreeriSisaldabLyhendit}>Sisaldab is lühendit</button>
        <button onClick={filtreeriPikkus9}>Pikkus 9 tähemärki</button>
        <button onClick={filtreeriVahemalt7Tahte}>Pikkus vähemalt 7 tähte</button>
        <button onClick={filtreeriKolmasTahtI}>3. täht on i</button>


        {poed.map((yksPood) => <div key = {yksPood}>{yksPood}</div>)}
        
    </div>
  )
}

export default Poed