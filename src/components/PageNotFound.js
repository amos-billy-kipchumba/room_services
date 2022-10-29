import { Face } from '@mui/icons-material'
import React from 'react'
import './PageNotFound.css'
import {useNavigate} from 'react-router-dom'
import { Button } from '@mui/material';
function PageNotFound() {
    const Navigate = useNavigate();
  return (
    <div className='pageNotFound'>
        <p>Sorry page not found</p>
        <span><Face /> </span>
        <Button
        onClick={() => {
            Navigate(-1);
            }}>Go back</Button>
    </div>
  )
}

export default PageNotFound