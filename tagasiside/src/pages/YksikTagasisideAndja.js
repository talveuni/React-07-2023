import React from 'react'
import nimedFailist from '../nimed.json'
import { useParams } from 'react-router-dom'

function YksikTagasisideAndja() {
  const {index} = useParams();
  const leitud = nimedFailist[index];

  return (
    <div>
      {index + ' ' + leitud}
    </div>
  )
}

export default YksikTagasisideAndja