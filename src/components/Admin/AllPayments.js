import React, {useState, useEffect} from 'react'
import './AllPayments.css'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { Logout, MoreHoriz } from '@mui/icons-material';
import BaseURL from '../BaseUrl';
import swal from 'sweetalert'
function AllPayments() {
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

    

    //Scroll to the top on load
    useEffect(()=>{
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
      },[]);
    //End of Scroll to the top on load

  const Navigate = useNavigate();

    //from back end data

    // end   
    return (
      <div className='admin_host_reviews__page'>
  
          <div className='admin_host_reviews__info'>
             <div className="admin_host_reviews__info-left">
              <div className='incase-you-know'>
                  <div className="host-image"><img src={imageToBe} alt="" /></div>
                  <div>
                      <h4>{useful.first_name}</h4>
                      <p>Admin</p>
                  </div>
                  <div className='adminFirstMenuBar' onClick={handleMenuBar}><h2 style={{ display: 'flex', alignItems: 'center' }}><MoreHoriz /> </h2></div>
              </div>
              {showMenuBar ?
              <p>Navigation</p>
              :
              null 
              }
  
              {showMenuBar ?
              <ul className='host-navigation'>
                <li onClick={()=>{
                    Navigate('/admin-dashboard');
                }}>Dashboard</li>
                <li
                onClick={()=> {
                  Navigate('/admin-second')
                }}>Hosts</li>
                <li
                onClick={()=> {
                  Navigate('/admin-third')
                }}>Admins</li>
                <li
                onClick={()=> {
                  Navigate('/admin-fourth')
                }}>Customers</li>
                <li
                style={{ backgroundColor: '#F78513' }}
                onClick={()=> {
                  Navigate('/all-payments')
                }}>Payments</li>
                <li
                onClick={()=> {
                  Navigate('/admin-fifth')
                }}>Profile</li>
                <li onClick={async()=> {
                  const willDelete = await swal({
                    title: "Are you sure?",
                    text: "Are you sure that you want to logout ? if no click outside the box",
                    icon: "warning",
                    dangerMode: true,
                  });
              
                  if (willDelete) {
                    localStorage.removeItem("user-info");
                    Navigate('/');
                  }
                }}
                className="baby"><Logout style={{ margin: 'auto 5px' }} /> Logout</li>
              </ul>
              :
              null
              }
             </div>
             <div className="admin_host_reviews__info-right">
                <div><input type='search' placeholder='Search ...' /></div>
             </div>
          </div>
  
      </div>
    )
  }

export default AllPayments