import React, {useState, useEffect} from 'react'
import './EditAdminSecond.css'
import {useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'
import { Dashboard, Logout, People, PeopleAltOutlined, PeopleOutlineTwoTone } from '@mui/icons-material';
import BaseURL from '../BaseUrl';
function EditAdminSecond() {
  const userData = JSON.parse(localStorage.getItem('user-info'));
  const [userId] = useState(userData.data.id);
  const [imageToBe, setImageToBe] = useState(null);
  const [useful, setUseful] = useState([]);
  const [oneHost, setOneHost] = useState([]);

  const params = useParams();
    const paramaId = params.id;

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
      setOneHost(request.data.oneHost);
      console.log(request.data.oneHost);
    }
    realFive();
  },[paramaId]);

  //Scroll to the top on load
  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    },[]);
  //End of Scroll to the top on load

  const Navigate = useNavigate();
    return (
      <div className='edit_admin_second__page'>
  
          <div className='edit_admin_second__info'>
             <div className="edit_admin_second__info-left">
              <div className='incase-you-know'>
                  <div className="host-image"><img src={imageToBe} alt="" /></div>
                  <div>
                      <h4>{useful.first_name}</h4>
                      <p>Admin</p>
                  </div>
                  <div><h2 style={{ display: 'flex', alignItems: 'center' }}>...</h2></div>
              </div>
              <p>Navigation</p>
  
              <ul className='host-navigation'>
                <li 
                style={{ backgroundColor: '#ff7779' }}
                onClick={()=>{
                  Navigate('/admin-dashboard');
                }}><Dashboard style={{ margin: 'auto 5px' }} /> Dashboard</li>
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
                <li onClick={()=> {
                  localStorage.removeItem("user-info");
                  Navigate('/');
                }}
                className="baby"><Logout style={{ margin: 'auto 5px' }} /> Logout</li>
              </ul>
             </div>
             <div className="edit_admin_second__info-right">
             {oneHost && oneHost.map((data)=> {
                return(
                <div className="edit_admin_second__info-rightContainer">
                    <div className="edit_admin_second__info-rightContainerImage">
                        <img src={`${BaseURL}/users/${data.image}`} alt="" />
                    </div>
                    <div className="edit_admin_second__info-rightContainerDetails" key={data.id}>
                        <p>First name</p>
                        <span>{data.first_name}</span>
                        <p>Last Name</p>
                        <span>{data.last_name}</span>
                        <p>Email</p>
                        <span>{data.email}</span>
                        <p>Phone</p>
                        <span>{data.phone}</span>
                    </div>
                </div>
                );
            })}
             </div>
          </div>
  
      </div>
    )
  }

export default EditAdminSecond