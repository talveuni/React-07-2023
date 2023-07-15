import React, { useState } from 'react'

function Nimekiri() {
    const [nimekiri, uuendaNimekiri] = useState(['shoes', 'shirts', 'socks', 'sweaters','pigs', 'goats', 'sheep', 'spray', 'limit', 'elite', 'exuberant', 'destruction', 'present', 'March', 'Jan', 'Feb', 'Dec']);
    const kustuta = (index) =>{
        nimekiri.splice(index, 1);
        uuendaNimekiri(nimekiri.slice());
    }
    const tyhjenda = () => {
        nimekiri.splice(0);
        uuendaNimekiri(nimekiri.slice());
    }

    const sorteeriAZ = () => {
        nimekiri.sort((a,b) => a.localeCompare(b));
        uuendaNimekiri(nimekiri.slice());
    }

    const filtreeriRohkemKui4 = () => {
        const tulemus = nimekiri.filter(element => element.length > 4);
        uuendaNimekiri(tulemus);
    }

    const lisa3Asja = () => {
        nimekiri.push("chickens", "cats","dogs");
        uuendaNimekiri(nimekiri.slice());
    }

 
    return (
    <div>
       Kokku: {nimekiri.length} tk <br />
       <button onClick={()=>tyhjenda()}>Tühjenda nimekiri</button> <br />
       <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
       <button onClick={filtreeriRohkemKui4}>Filtreeri pikemad kui 4 tähte</button>
       <button onClick={lisa3Asja}>Lisa 3 asja</button>
       {nimekiri.map((element, index) =>
       <div key = {index}>
        {element + " "}
        <button onClick={()=>kustuta(index)}>x</button>
       </div>    
       )}
    </div>
  )
}

export default Nimekiri