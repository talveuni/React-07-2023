import React, { useRef, useState } from 'react'

function Leht() {
    const inputistLugeja = useRef();
    const[muutuvHTMLs, funktsioonMuutujaMuutmiseks] = useState('');

    const onClickFunktsioon = () => {
        funktsioonMuutujaMuutmiseks(inputistLugeja.current.value);
    }

  return (
    <div className='keskel'>
        <br />
        <input ref={inputistLugeja} type="text" />
        <button onClick={onClickFunktsioon}>Muuda</button>
        <div>{muutuvHTMLs}</div>

    </div>
  )
}

export default Leht