import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import config from "../data/config.json" 

function Avaleht() {
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
      <div> Joogid: 
        {joogid.map((jook, index) => (
          <div>
            <Link to = {"/jook/" + index}>
               {jook.nimi}<span></span>          
            </Link>
            <button onClick={() => kustuta(index)}>x</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Avaleht;
