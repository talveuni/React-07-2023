import React, { useState } from 'react'

function Muutmine() {
    const [hind, uuendaHind] = useState('39');

    return (
    <div>
        <span className='pakett' onClick={() => uuendaHind(39)}>Family</span>
        <span className='pakett' onClick={() => uuendaHind(17)}>Standard</span>
        <span className='pakett' onClick={() => uuendaHind(7)}>Mini</span>
        <div>Kuumakse: 0€</div>
        <div>Tavahind: {hind}€</div>
    </div>
  )
}

export default Muutmine