import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
        <h2>Sellist lehte ei leitud...</h2>
        <Link to = "/">
            <button>Avalehele</button>
        </Link>
        
    </div>
  )
}

export default NotFound