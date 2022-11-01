import React, {useState, useEffect} from 'react'
import './AdminFirst.css'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { Dashboard, Logout, MoreHoriz, People, PeopleAltOutlined, PeopleAltRounded, PeopleOutlineTwoTone } from '@mui/icons-material';
import BaseURL from '../BaseUrl';
function AdminFirst() {
  const userData = JSON.parse(localStorage.getItem('user-info'));
  const [userId] = useState(userData.data.id);
  const [imageToBe, setImageToBe] = useState(null);
  const [useful, setUseful] = useState([]);


  useEffect(()=>{
    const realThree = async () => {
      const SendId = userId;
      const request = await axios.get(`${BaseURL}/api/get-host-specific-details/${SendId}`);
      setImageToBe(`http://127.0.0.1:8000/users/${request.data.hostSpecific.image}`);
      setUseful(request.data.hostSpecific);
    }
    realThree();
  },[userId]);

  var hostUserType = 1;
  const [hostLength, setHostLength] = useState([]);
  useEffect(()=>{
    const realFour = async () => {
      const request = await axios.get(`${BaseURL}/api/get-all-host-details/${hostUserType}`);
      setHostLength(request.data.allHost);
    }
    realFour();
  },[hostUserType]);

  var customerUserType = 2;
  const [customerLength, setCustomerLength] = useState([]);
  useEffect(()=>{
    const realFour = async () => {
      const request = await axios.get(`${BaseURL}/api/get-all-host-details/${customerUserType}`);
      setCustomerLength(request.data.allHost);
    }
    realFour();
  },[customerUserType]);


  var adminUserType = 3;
  const [adminLength, setAdminLength] = useState([]);
  useEffect(()=>{
    const realFour = async () => {
      const request = await axios.get(`${BaseURL}/api/get-all-host-details/${adminUserType}`);
      setAdminLength(request.data.allHost);
    }
    realFour();
  },[adminUserType]);

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
    return (
      <div className='admin_first__page'>
  
          <div className='admin_first__info'>
             <div className="admin_first__info-left">
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
                <li style={{ backgroundColor: '#F78513' }}><Dashboard style={{ margin: 'auto 5px' }} /> Dashboard</li>
                <li
                onClick={()=> {
                  Navigate('/admin-second')
                }}><People style={{ margin: 'auto 5px' }} /> Hosts</li>
                <li
                onClick={()=> {
                  Navigate('/admin-third')
                }}><PeopleAltOutlined style={{ margin: 'auto 5px' }} /> Admins</li>
                <li
                onClick={()=> {
                  Navigate('/admin-fourth')
                }}><PeopleOutlineTwoTone style={{ margin: 'auto 5px' }} /> Customers</li>
                <li
                onClick={()=> {
                  Navigate('/admin-fifth')
                }}>Profile</li>
                <li onClick={()=> {
                  localStorage.removeItem("user-info");
                  Navigate('/');
                }}
                className="baby"><Logout style={{ margin: 'auto 5px' }} /> Logout</li>
              </ul>
              :
              null
              }
             </div>
             <div className="admin_first__info-right">
              <div className="admin_first__info-rightONE"
              onClick={()=>{
                Navigate('/admin-second');
              }}>
                <PeopleAltRounded />
                <p style={{ marginLeft: '10px' }}>Hosts</p>
                <p style={{ marginLeft: '10px' }}>{hostLength.length}</p>
              </div>
              <div className="admin_first__info-rightTWO"
              onClick={()=>{
                Navigate('/admin-fourth');
              }}>
                <PeopleAltRounded />
                <p style={{ marginLeft: '10px' }}>Customers</p>
                <p style={{ marginLeft: '10px' }}>{customerLength.length}</p>
              </div>
              <div className="admin_first__info-rightTHREE"
              onClick={()=>{
                Navigate('/admin-third');
              }}>
                <PeopleAltRounded />
                <p style={{ marginLeft: '10px' }}>Admins</p>
                <p style={{ marginLeft: '10px' }}>{adminLength.length}</p>
              </div>
             </div>
          </div>
  
      </div>
    )
  }

export default AdminFirst