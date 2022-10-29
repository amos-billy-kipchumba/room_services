import React, {useState, useEffect} from 'react'
import './EditAdminThird.css'
import {useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'
import { Dashboard, Logout, MoreHoriz, People, PeopleAltOutlined, PeopleOutlineTwoTone } from '@mui/icons-material';
import BaseURL from '../BaseUrl';
function EditAdminThird() {
  const userData = JSON.parse(localStorage.getItem('user-info'));
  const [userId] = useState(userData.data.id);
  const [imageToBe, setImageToBe] = useState(null);
  const [useful, setUseful] = useState([]);
  const [oneHost, setOneHost] = useState([]);

  const params = useParams();
  const paramaId = params.id;
  const [sendImage, setSendImage] = useState(null);


  useEffect(()=>{
    const realThree = async () => {
      const SendId = userId;
      const request = await axios.get(`${BaseURL}/api/get-host-specific-details/${SendId}`);
      setImageToBe(`${BaseURL}/users/${request.data.hostSpecific.image}`);
      setUseful(request.data.hostSpecific);
    }
    realThree();
  },[userId]);

  useEffect(()=>{
    const realFive = async () => {
      const request = await axios.get(`${BaseURL}/api/get-one-host-details/${paramaId}`);
      setOneHost(request.data.oneHost[0]);
      setSendImage(`${BaseURL}/users/${request.data.oneHost[0].image}`)
    }
    realFive();
  },[paramaId]);

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
      <div className='edit_admin_third__page'>
  
          <div className='edit_admin_third__info'>
             <div className="edit_admin_third__info-left">
              <div className='incase-you-know'>
                  <div className="host-image"><img src={imageToBe} alt="" /></div>
                  <div>
                      <h4>{useful.first_name}</h4>
                      <p>Admin</p>
                  </div>
                  <div className='editAdminThirdMenuBar' onClick={handleMenuBar}><h2 style={{ display: 'flex', alignItems: 'center' }}><MoreHoriz /> </h2></div>
              </div>

              {showMenuBar ?
              <p>Navigation</p>
              :
              null
              }
  
              {showMenuBar ?
              <ul className='host-navigation'>
                <li
                onClick={()=> {
                    Navigate('/admin-dashboard');
                }}><Dashboard style={{ margin: 'auto 5px' }} /> Dashboard</li>
                <li
                onClick={()=> {
                  Navigate('/admin-second')
                }}><People style={{ margin: 'auto 5px' }} /> Hosts</li>
                <li
                style={{ backgroundColor: '#ff7779' }}
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
                className='baby'><Logout style={{ margin: 'auto 5px' }} /> Logout</li>
              </ul>
              :
              null
              }
             </div>
             <div className="edit_admin_third__info-right">
             
                <div className="edit_admin_third__info-rightContainer">
                    <div className="edit_admin_third__info-rightContainerImage">
                        <img src={sendImage} alt="" />
                    </div>
                    <div className="edit_admin_third__info-rightContainerDetails">
                        <p>First name</p>
                        <span>{oneHost.first_name}</span>
                        <p>Last Name</p>
                        <span>{oneHost.last_name}</span>
                        <p>Email</p>
                        <span>{oneHost.email}</span>
                        <p>Phone</p>
                        <span>{oneHost.phone}</span>
                    </div>
                </div>
              
             </div>
          </div>
  
      </div>
    )
  }

export default EditAdminThird