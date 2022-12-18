import React, {useState, useEffect} from 'react'
import './AllPayments.css'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { ArrowUpward, Logout, MoreHoriz } from '@mui/icons-material';
import BaseURL from '../BaseUrl';
import swal from 'sweetalert'
import { Button } from '@mui/material';
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

    const [searchFul, setSearchFul] = useState('');

    const [paymentStatus, setPaymentStatus] = useState([]);
    useEffect(()=>{
      const realSa = async () => {
        const request = await axios.get(`${BaseURL}/api/get-total-booked-for-admin`);
        if(request.data.status === 200) {
          setPaymentStatus(request.data.bookingInfoForAdmin);
        }
      }
      realSa();
    },[]);

    const changeStatus = async (e, id) => {
      e.preventDefault();
      const request = await axios.get(`${BaseURL}/api/get-to-booking-info/${id}`); 


      const formData = new FormData();
      formData.append('number_of_guests', request.data.info[0].number_of_guests);
      formData.append('number_of_hours', request.data.info[0].number_of_hours);
      formData.append('house_id', request.data.info[0].house_id);
      formData.append('user_id', request.data.info[0].user_id);
      formData.append('start_date', request.data.info[0].start_date);
      formData.append('end_date', request.data.info[0].end_date);
      formData.append('number_of_days', request.data.info[0].number_of_days);
      formData.append('total_price', request.data.info[0].total_price);
      formData.append('booking_phone', request.data.info[0].booking_phone);
      formData.append('pay_id', request.data.info[0].pay_id);

      if(request.data.status === 200){
        const request = await axios.post(`${BaseURL}/api/update-booking-info/${id}`, formData); 
        if(request.data.status === 200) {
          swal('success','Payment transfer made successfully','success');
        }
      }
    }
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
                <div className='admin_host_reviews__info-right_search'><input type='search' placeholder='Search ...' value={searchFul} onChange={(e)=>{
                  setSearchFul(e.target.value);
                }} /></div>

                <div className='admin_host_reviews__info-right_payment'>
                  <table>
                    <thead>
                      <tr>
                        <th>id</th>
                        <th>House name</th>
                        <th>host name</th>
                        <th>host email</th>
                        <th>host phone</th>
                        <th>payment status</th>
                        <th>amount</th>
                        <th>mpesa receipt_no</th>
                        <th>transaction date</th>
                        <th>customer number</th>
                        <th>make transfer</th>
                      </tr>
                    </thead>
                    <tbody>
                    {paymentStatus && paymentStatus.filter((val) => {
                      if(searchFul === "") {
                        return val
                      }
                      else if (val.first_name.toLowerCase().includes(searchFul.toLowerCase())) {
                        return val
                      }
                      else if (val.title.toLowerCase().includes(searchFul.toLowerCase())) {
                        return val
                      }
                     
                      else if (val.Amount.toLowerCase().includes(searchFul.toLowerCase())) {
                        return val
                      }
                      else if (val.paid.toString().includes(searchFul.toString())) {
                        return val
                      }
                      else if (val.MpesaReceiptNumber.toLowerCase().includes(searchFul.toLowerCase())) {
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
                    }).map((data, index)=> {
                      let loco = new Date(data.created_at);
                      var dateTo =  loco.toLocaleDateString(loco);
                      return(
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{data.title}</td>
                          <td>{data.first_name}</td>
                          <td>{data.email}</td>
                          <td>{data.phone}</td>
                          <td>{data.paid}</td>
                          <td>ksh {data.Amount}</td>
                          <td>{data.MpesaReceiptNumber}</td>
                          <td>{dateTo}</td>
                          <td>+{data.booking_phone}</td>
                          <td><Button onClick={(e)=>{
                            changeStatus(e, data.pay_id)
                          }}>Make <ArrowUpward style={{ marginLeft: '5px' }} /></Button></td>
                      </tr>
                      );
                    })}
                    </tbody>
                  </table>
                </div>
             </div>
          </div>
  
      </div>
    )
  }

export default AllPayments