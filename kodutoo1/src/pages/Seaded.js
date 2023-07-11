import React, { useState } from 'react'

function Seaded() {
  const [kujundus, muudaKujundus] = useState(localStorage.getItem('veebilehe_kujundus'))

  const muudaKujundusTumedaks = () => {
    localStorage.setItem('veebilehe_kujundus', 'dark_mode');
    muudaKujundus('dark_mode');
  }
  const muudaKujundusHeledaks = () => {
    localStorage.setItem('veebilehe_kujundus', 'light_mode');
    muudaKujundus('light_mode')
  }

  return (
    <div>
      <button onClick={muudaKujundusTumedaks}>Tume kujundus</button>
      <button onClick={muudaKujundusHeledaks}>Hele kujundus</button>

      {kujundus === 'dark_mode' && <div>Tume leht</div>}
      {kujundus === 'light_mode' && <div>Hele leht</div>}
     

    </div>
  )
}

export default Seaded