import React, { useRef } from 'react'
import { useParams } from 'react-router-dom'

function MuudaUudis() {
    const {index} = useParams();
    const uudised = JSON.parse(localStorage.getItem("uudised")) || [];
    const found = uudised[index];
    const uudiseRef = useRef();

    const muuda = () => {
        uudised[index] = uudiseRef.current.value;
        localStorage.setItem("uudised", JSON.stringify(uudised));
    }
  
    return (
    <div>
         <br />
        <label>Uudis:</label> <br />
        <input ref = {uudiseRef} defaultValue = {found} type="text" /> <br />
        <button onClick={muuda}>Muuda</button> <br />
    </div>
  )
}

export default MuudaUudis