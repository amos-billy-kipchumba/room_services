import React, {useState, useEffect} from 'react'
import './CustomerSettings.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom';
import { MoreHoriz, Settings } from '@mui/icons-material';
import BaseURL from '../BaseUrl';
import { Button } from '@mui/material';
import swal from 'sweetalert';
function CustomerSettings() {
        const userData = JSON.parse(localStorage.getItem('user-info'));
        const [userId] = useState(userData.data.id);
        const [imageToBe, setImageToBe] = useState(null);
        const [useful, setUseful] = useState([]);

        useEffect(()=>{
            const realThree = async () => {
            const SendId = userId;
            const request = await axios.get(`${BaseURL}/api/get-host-specific-details/${SendId}`);
            setImageToBe(`${BaseURL}/users/${request.data.hostSpecific.image}`);
            setUseful(request.data.hostSpecific);
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
            const request = await axios.delete(`${BaseURL}/api/delete-customer/${SendId}`);
            swal("Deleted!", `${request.data.message}`, "success");
            Navigate('/');
            localStorage.clear();
        }
        }

        const [showMenuBar, setShowMenuBar] = useState(false);

        useEffect(()=>{
          if(window.innerWidth < 1024) {
            setShowMenuBar(false)
          }
        
          if(window.innerWidth > 1024) {
            setShowMenuBar(true);
          }
        },[]);

        const handleMenuBar = () => {
          setShowMenuBar(!showMenuBar);
          
        }

        const Navigate = useNavigate();
    return (
      <div className='customer-settings__page'>
  
          <div className='customer-settings__info'>
             <div className="customer-settings__info-left">
              <div className='incase-you-know'>
                  <div className="host-image"><img src={imageToBe} alt="" onClick={()=> Navigate('/customer-profile')} /></div>
                  <div>
                      <h4>{useful.first_name}</h4>
                      <p>Customer</p>
                  </div>
                  <div className='customerSettingsMenuBar' onClick={handleMenuBar}><h2 style={{ display: 'flex', alignItems: 'center' }}><MoreHoriz /> </h2></div>
              </div>
              {showMenuBar ?
              <p>Navigation</p>
              :
              null
              }
  
              {showMenuBar ?
              <ul className='host-navigation'>
                <li onClick={()=> Navigate('/customer-main-account')}>Dashboard</li>
                <li onClick={()=> Navigate('/customer-second-page')}>Booked houses</li>
                <li onClick={()=> Navigate('/customer-profile')}>Profile</li>
                <li
                style={{ backgroundColor: '#F78513' }}><Settings style={{ margin: 'auto 5px' }} /> Settings</li>
                <li onClick={()=> {
                  localStorage.removeItem("user-info");
                  Navigate('/');
                }}
                >Logout</li>
              </ul>
              :
              null
              }
             </div>
             <div className="customer-settings__info-right">
                <Button
                onClick={()=>handleDelete()}>Delete account</Button>
             </div>
          </div>
  
      </div>
    )
  }

export default CustomerSettings