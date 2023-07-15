import React, { useState } from "react";
import joogidFailist from "../joogid.json";
import { Link } from "react-router-dom";

function Avaleht() {
  const [joogid, uuendaJoogid] = useState(joogidFailist);

  const kustuta = (index) => {
    joogidFailist.splice(index, 1);
    uuendaJoogid(joogidFailist.slice());
  };

  return (
    <div>
      <div> Joogid: 
        {joogid.map((jook, index) => (
          <div>
            <Link to = {"/jook/" + index}>
                <span> {jook + " "}</span>                
            </Link>
            <button onClick={() => kustuta(index)}>x</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Avaleht;
