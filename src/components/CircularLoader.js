import { CircularProgress } from '@mui/material'
import React from 'react'
import './CircularLoader.css'
function CircularLoader() {
  return (
    <div className='CircularLoader'>
        <CircularProgress />
    </div>
  )
}

export default CircularLoader