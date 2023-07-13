import React from 'react'
import { useParams } from 'react-router-dom'
import tootedFailist from "../data/tooted.json"

function MuudaToode() {
  const {index} = useParams();
  const leitud = tootedFailist[index];

  return (
    <div>
        <label>Toote nimi:</label> <br />
        <input defaultValue = {leitud} type="text" name=""/> <br />
        <button>Muuda</button>
    </div>
  )
}

export default MuudaToode