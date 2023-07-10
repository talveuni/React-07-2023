import React, { useState } from 'react'

function Kujundus() {
    const [valitud, uuendaValitud] = useState('family');

  return (
    <div>
        <span className= {valitud === 'family' ? 'pakett-aktiivne' : 'pakett'} onClick={()=> uuendaValitud ('family')}>Family</span>
        <span className= {valitud === 'standard' ? 'pakett-aktiivne' : 'pakett'} onClick={()=> uuendaValitud ('standard')}>Standard</span>
        <span className= {valitud === 'mini' ? 'pakett-aktiivne' : 'pakett'} onClick={()=> uuendaValitud ('mini')}>Mini</span>
    </div>
  )
}

export default Kujundus