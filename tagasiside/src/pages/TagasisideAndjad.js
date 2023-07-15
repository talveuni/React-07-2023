import React, { useRef, useState } from 'react'
import nimedFailist from "../nimed.json"
import { Link } from 'react-router-dom';

function TagasisideAndjad() {
  const [nimed, uuendaNimed] = useState(nimedFailist);
 // const prefix = "EST"


  const reset = () => {
    uuendaNimed(nimedFailist);
  };

  const nimiRef = useRef();

  const filtreeriMt2hega = () => {
    const tulemus = nimed.filter(nimi => nimi.startsWith("M"))
    uuendaNimed(tulemus);
  }

  const filtreeri6Kohlised = () => {
    const tulemus = nimed.filter(nimi => nimi.length === 6)
    uuendaNimed(tulemus);
  }

  const filtreeriYgaLoppevad = () => {
    const tulemus = nimed.filter(nimi => nimi.endsWith("y"))
    uuendaNimed(tulemus);
  }

  const sorteeriAZ = () => {
    nimed.sort((a,b) => a.localeCompare(b, 'fi'))
    uuendaNimed(nimed.slice()); 
  }

  const kustutaNimi = (index) => {
    nimed.splice(index, 1);
    uuendaNimed(nimed.slice());    
  }

  const lisaUusNimi = () => {
    nimed.push(nimiRef.current.value);
    uuendaNimed(nimed.slice());
  }

  const lisaEST = () => {
    const prefix = "EST"
    const muudetudNimed = nimed.map(nimi=> prefix + nimi);
    uuendaNimed(muudetudNimed.slice());
 
  }


  return (
    <div>
        Nimesid kokku: {nimed.length} tk <br />
        <label>Lisa uus</label>
        <input ref={nimiRef} type="text" />
        <button onClick={lisaUusNimi}>Lisa</button> <br /><br />
        <button onClick={reset}>Reset</button>
        <button onClick={filtreeriMt2hega}>Filtreeri M-ga algavad</button>
        <button onClick={filtreeri6Kohlised}>Filtreeri 6-kohalised</button>
        <button onClick={filtreeriYgaLoppevad}>Filtreeri Y-ga lõppevad </button> <br /><br />
        <button onClick={sorteeriAZ}>Sorteeri A-Z </button>
        <button onClick={lisaEST}>Lisa EST algusse</button>
       

       
        {nimed.map((nimi, index) => 
            <div key={index}>{nimi + " "}
            <button onClick={() => kustutaNimi(index)}>x</button>
            <Link to= {"/tagasiside-andjad/" + index}>
             <button>Vaata detaile</button>
            </Link>
              
        </div>)}
    </div>
  )
}

export default TagasisideAndjad