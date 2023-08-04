import React, { useEffect, useState } from "react";
import config from "../data/config.json" 

function Haldajooke() {
  const [joogid, uuendaJoogid] = useState([]);

  useEffect(() => {
    fetch(config.joogidDbUrl)
      .then(res => res.json())
      .then(data => uuendaJoogid(data || [])) // null || []
  }, []);

  const kustuta = (index) => {
    joogid.splice(index, 1);
    uuendaJoogid(joogid.slice());
    fetch(config.joogidDbUrl, {
      method: "PUT", 
      body: JSON.stringify(joogid)
    })
  };

  return (
    <div>
        Joogid:
      {joogid.map((jook, index) => (
        <div key={index}>
          {jook.nimi} <span></span>
          <button onClick={() => kustuta(index)}>x</button>
        </div>
      ))}
    </div>
  );
}

export default Haldajooke;
