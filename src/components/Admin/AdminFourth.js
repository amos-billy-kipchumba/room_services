import React, {useState, useEffect} from 'react'
import './AdminFourth.css'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { CheckOutlined, Dashboard, Delete, Logout, People, PeopleAltOutlined, PeopleOutlineTwoTone } from '@mui/icons-material';
import BaseURL from '../BaseUrl';
function AdminFourth() {
  const userData = JSON.parse(localStorage.getItem('user-info'));
  const [userId] = useState(userData.data.id);
  const [imageToBe, setImageToBe] = useState(null);
  const [useful, setUseful] = useState([]);
  const [searchFul, setSearchFul] = useState('');
  const [customerDetails, setCustomerDetails] = useState([]);


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
    const realFour = async () => {
      const hostId = 2;
      const request = await axios.get(`${BaseURL}/api/get-all-host-details/${hostId}`);
      setCustomerDetails(request.data.allHost);
    }
    realFour();
  },[]);

  const deleteStudent = async (e, id) => {
    const clickedNight = e.currentTarget;
    clickedNight.innerText = "x";
    const res = await axios.delete(`${BaseURL}/api/delete-host/${id}`);

    if(res.data.status === 200)
    {
      clickedNight.closest("tr").remove();
      console.log(res.data.message);
    }
  }

  //Scroll to the top on load
  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    },[]);
  //End of Scroll to the top on load

  const Navigate = useNavigate();
    return (
      <div className='admin-fourth__page'>
  
          <div className='admin-fourth__info'>
             <div className="admin-fourth__info-left">
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
                onClick={()=> {
                    Navigate('/admin-dashboard');
                }}><Dashboard style={{ margin: 'auto 5px' }} /> Dashboard</li>
                <li
                onClick={()=> {
                    Navigate('/admin-second')
                  }}><People style={{ margin: 'auto 5px' }} /> Hosts</li>
                <li
                onClick={()=> {
                    Navigate('/admin-third')
                  }}
                ><PeopleAltOutlined style={{ margin: 'auto 5px' }} /> Admins</li>
                <li
                style={{ backgroundColor: '#ff7779' }}
                ><PeopleOutlineTwoTone style={{ margin: 'auto 5px' }} /> Customers</li>
                <li onClick={()=> {
                  localStorage.removeItem("user-info");
                  Navigate('/');
                }}
                className='baby'><Logout style={{ margin: 'auto 5px' }} /> Logout</li>
              </ul>
             </div>
             <div className="admin-fourth__info-right">
                <h4>Number of customers: {customerDetails.length}</h4>
                <div className="admin-fourth__info-rightFilter">
                  <input type="text" placeholder="search ..." value={searchFul} onChange={(e)=>{
                    setSearchFul(e.target.value);
                  }} />
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>First name</th>
                      <th>Last name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Image</th>
                      <th>More</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                  {customerDetails && customerDetails.filter((val) => {
                    if(searchFul === "") {
                      return val
                    }
                    else if (val.first_name.toLowerCase().includes(searchFul.toLowerCase())) {
                      return val
                    }
                    else if (val.last_name.toString().includes(searchFul.toString())) {
                      return val
                    }
                    else if (val.email.toLowerCase().includes(searchFul.toLowerCase())) {
                      return val
                    }
                    else if (val.phone.toString().includes(searchFul.toString())) {
                      return val
                    }
                    else {
                      return ""
                    }
                    }).map((data)=> {
                    return(
                      <tr key={data.id}>
                        <td>{data.first_name}</td>
                        <td>{data.last_name}</td>
                        <td>{data.email}</td>
                        <td>{data.phone}</td>
                        <td>
                          <div className='realFunny'>
                            <img src={`${BaseURL}/users/${data.image}`} alt="" />
                          </div>
                        </td>
                        <td>
                          <span onClick={()=> Navigate(`/edit-admin-fourth/${data.id}`)}><CheckOutlined /></span>
                        </td>
                        <td>
                          <span onClick={(e) => deleteStudent(e, data.id)}><Delete /></span>
                        </td>
                      </tr>
                    );
                  })}
                  </tbody>
                </table>
             </div>
          </div>
  
      </div>
    )
  }

export default AdminFourth