import React from 'react'
import './PageTwoAdd.css'
import HostImage from '../../Images/people/face20.jpg'
import {useNavigate} from 'react-router-dom'
import Button from '@mui/material/Button';
import Add from '@mui/icons-material/Add';
function PageTwoAdd() {
    const navigate = useNavigate()
  return (
    <div className='page-two-add__page'>

        <div className='page-two-add__info'>
           <div className="page-two-add__info-left">
            <div className='incase-you-know'>
                <div className="host-image"><img src={HostImage} alt="" /></div>
                <div>
                    <h4>Henry Klein</h4>
                    <p>Host</p>
                </div>
                <div><h2 style={{ display: 'flex', alignItems: 'center' }}>...</h2></div>
            </div>
            <p>Navigation</p>

            <ul className='host-navigation'>
                <li onClick={()=> navigate('/main-host-account')}>DashBoard</li>
                <li style={{ backgroundColor: '#ff7779' }}><Add /> Add House or Room</li>
                <li>Your House or Room</li>
                <li>Tenants Details</li>
                <li>Host Profile</li>
            </ul>
           </div>
           <div className="page-two-add__info-right">
                <div className="fill-up-detail-header"><p>Add your house/room details:</p> <p><span><strong>50%</strong></span> to completion</p></div>
                <form className="fill-up-detail-form page-two">
                    <input type="text" name="house-max-guests" placeholder="Enter the max-number of Guests" />
                    <input type="text" name="no-of-bedrooms" placeholder="Enter the number of bedrooms" />
                    <input type="text" name="no-of-beds" placeholder="Enter the number of beds" />
                    <input type="text" name="no-of-bathtubs" placeholder="Enter the number of bathtubs" />
                    <Button type="submit" onClick={()=> navigate('/add-house-host-page-three')}>Submit</Button>
                </form>

                <Button onClick={()=> navigate('/add-house-host')}>Back</Button>
           </div>
        </div>

    </div>
  )
}

export default PageTwoAdd