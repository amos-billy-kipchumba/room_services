import React from 'react'
import './AdminDashboard.css'
import Button from '@mui/material/Button';


function AdminDashboard() {

  return (
    <div className='admin-dashboard__page'>

        <div className='admin-dashboardPage__info'>

            <Button variant="outlined">
                Type of place
            </Button>

            <Button variant="outlined">
                Price
            </Button>

            <Button variant="outlined">
                Rooms and beds
            </Button>

            <Button variant="outlined">
                More filters
            </Button>

            

        </div>

    </div>
  )
}

export default AdminDashboard