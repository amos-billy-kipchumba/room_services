import Button from '@mui/material/Button';
import React from 'react'
import {useNavigate} from 'react-router-dom'
import './Banner.css'
function Banner(props) {
  const navigate = useNavigate();
  return (
    <div className='banner'>

        <div className='banner__info'>
            <h1>Get out and stretch your imagination</h1>
            <h5>Plan a different kind of gate away to uncover the hidden gems near you</h5>
            <Button variant="outlined" onClick={()=> navigate('/become-a-host')}>Become a host</Button>
        </div>

    </div>
  )
}

export default Banner