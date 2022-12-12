import React from 'react'
import './Card.css'
function Card({ src, title, description, price, location, handleNavigating}) {

  return (
    <div className='card' onClick={handleNavigating}>

        <img src={src} alt="" />

        <div className='card__info'>
            <h2>{title}</h2>
            <h4>{description}</h4>
            <h4 style={{ color: '#272727', fontWeight: 'bold' }}>{location}</h4>
            <h3>Ksh{price}</h3>
        </div>

    </div>
  )
}

export default Card