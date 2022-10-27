import React from 'react'
import './Card.css'
import {useNavigate} from 'react-router-dom'
function Card({ src, title, description, price, location, id }) {
  const navigate = useNavigate();

    function navigateHouse () {
        navigate(`/more-details/${id}`);
    }
  return (
    <div className='card' onClick={navigateHouse}>

        <img src={src} alt="" />

        <div className='card__info'>
            <h2>{title}</h2>
            <h4>{description}</h4>
            <h4 style={{ color: '#272727', fontWeight: 'bold' }}>{location}</h4>
            <h3>{price}</h3>
        </div>

    </div>
  )
}

export default Card