import React, {useState, useEffect} from 'react'
import './HostSettings.css'
import Add from '@mui/icons-material/Add';
import {Link} from 'react-router-dom'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import BaseURL from '../../BaseUrl';
import { Button } from '@mui/material';
import swal from 'sweetalert';
function HostSettings() {
  const userData = JSON.parse(localStorage.getItem('user-info'));
  const [userId] = useState(userData.data.id);
  const [userFirstName] = useState(userData.data.first_name);
  const [imageToBe, setImageToBe] = useState(null); 

  useEffect(()=>{
    const realThree = async () => {
      const SendId = userId;
      const request = await axios.get(`${BaseURL}/api/get-host-specific-details/${SendId}`);
      setImageToBe(`${BaseURL}/users/${request.data.hostSpecific.image}`);
    }
    realThree();
  },[userId]);

  const handleDelete = async () => {
        const willDelete = await swal({
            title: "Are you sure?",
            text: "Are you sure that you want to delete this account? if no click outside the box",
            icon: "warning",
            dangerMode: true,
        });
       
      if (willDelete) {
        const SendId = userId;
        const request = await axios.delete(`${BaseURL}/api/delete-host/${SendId}`);
        swal("Deleted!", `${request.data.message}`, "success");
        Navigate('/');
        localStorage.clear();
      }
  }

  //Scroll to the top on load
  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  },[]);
  //End of Scroll to the top on load

    const Navigate = useNavigate();
    return (
      <div className='host-settings__page'>
  
          <div className='host-settings__info'>
             <div className="host-settings__info-left">
              <div className='incase-you-know'>
                  <div className="host-image"><img src={imageToBe} alt="" /></div>
                  <div>
                      <h4>{userFirstName}</h4>
                      <p>Host</p>
                  </div>
                  <div><h2 style={{ display: 'flex', alignItems: 'center' }}>...</h2></div>
              </div>
              <p>Navigation</p>
  
              <ul className='host-navigation'>
                <li onClick={()=>{
                    Navigate('/main-host-account');
                }}>Dashboard</li>
                <li><Link to="/host-houses" className='lilo-link'>Your houses</Link></li>
                <li><Link to="/add-house-host" className='lilo-link'><Add /> house</Link></li>
                <li onClick={()=>{
                  Navigate('/tenants-details');
                }}>Tenants Details</li>
                <li onClick={()=> Navigate('/host-profile')}>Host Profile</li>
                <li className='deal-done' style={{ backgroundColor: '#ff7779' }}>Settings</li>
              </ul>
             </div>
             <div className="host-settings__info-right">
                <Button className='host-settings__info-rightDelete' onClick={()=>handleDelete()} 
                style={{ 
                    backgroundColor: '#ff7779',
                    color: 'white',
                    textTransform: 'inherit'
                 }}
                >Delete account</Button>
             </div>
          </div>
  
      </div>
    )
  }

export default HostSettings