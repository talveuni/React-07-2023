import React, { useRef, useState } from 'react'

function Tagasiside() {
  const [tagasisided, uuendaTagasisided] = useState(["Oli hea", "Huvitav", "Teistsugune", "Põnev"]);
  const kustuta = (index) => {
    tagasisided.splice(index,1);
    uuendaTagasisided(tagasisided.slice());
  }

  const tagasisideRef = useRef();

  const lisaUusTagasiside = () => {
    tagasisided.push(tagasisideRef.current.value);
    uuendaTagasisided(tagasisided.slice());
  }


  return (
    <div>
        Tagasisided:
        {tagasisided.map((tagasiside, index) => 
          <div key = {index}>
            {tagasiside + " "} 
            <button onClick={()=>kustuta(index)}>x</button>
          </div>)}

          <label>Uus tagasiside</label>
          <input ref={tagasisideRef} type="text" />
          <button onClick={lisaUusTagasiside}>Lisa</button>
    </div>
  )
}

export default Tagasiside