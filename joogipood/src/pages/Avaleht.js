import React, { useState } from "react";
import joogidFailist from "../joogid.json";

function Avaleht() {
  const [joogid, uuendaJoogid] = useState(joogidFailist);

  const kustuta = (index) => {
    joogidFailist.splice(index, 1);
    uuendaJoogid(joogidFailist.slice());
  };

  return (
    <div>
      <div>
        {joogid.map((jook, index) => (
          <div key={index}>
            {jook + " "}
            <button onClick={() => kustuta(index)}>x</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Avaleht;
