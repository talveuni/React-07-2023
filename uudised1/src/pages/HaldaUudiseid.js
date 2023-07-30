import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function HaldaUudiseid() {
    const [uudised, uuendaUudised] = useState(JSON.parse(localStorage.getItem("uudised")) || []);
    const kustutaUudis = (index) => {
        uudised.splice(index, 1);
        uuendaUudised(uudised.slice());
        localStorage.setItem("uudised",  JSON.stringify(uudised));
    }

return (
    <div>
        <br/>
        {uudised.map ((uudis, index) =>
          <div key= {index}>
            <Link to={"/muuda/" + index}> {uudis + " "} </Link>
            <button onClick={()=>kustutaUudis(index)}>x</button>
          </div>
          )}
     </div>
  )
}

export default HaldaUudiseid