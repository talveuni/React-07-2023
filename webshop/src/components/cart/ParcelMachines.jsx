import React, { useEffect, useState } from 'react'

function ParcelMachines() {
    const [parcelMachines, setParcelmachines] = useState([]);

    useEffect(()=> { //kohe lehele tulles tehakse API päring
        fetch('https://www.omniva.ee/locations.json')
          .then(response => response.json()) // päringu staatus ja metaandmed
          .then(json => setParcelmachines(json)) // json kujul veebilehe sisu
      }, []);

  return (
    <div>
        <select>{parcelMachines.filter(pm=> pm.A0_NAME === "EE").map((pm, index) => <option key={index}>{pm.NAME}</option>)}</select><br /> 
    </div>
  )
}

export default ParcelMachines