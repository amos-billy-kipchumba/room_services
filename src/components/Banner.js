import Button from '@mui/material/Button';
import React from 'react'
import {useNavigate} from 'react-router-dom'
import './Banner.css'
function Banner(props) {
  const navigate = useNavigate();
  return (
    <div className='banner'>

        <div className='banner__info'>
            <h1>Lovely modelled homes</h1>
            <h5>perfectly priced for the current market</h5>
            <Button variant="outlined" onClick={()=> navigate('/become-a-host')}>Become a host</Button>
        </div>

    </div>
  )
}

export default Banner