import React, {useState, useEffect} from 'react'
import './TenantReview.css'
import Add from '@mui/icons-material/Add';
import {Link} from 'react-router-dom'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'
import BaseURL from '../BaseUrl';
import { Button } from '@mui/material';
import { MoreHoriz } from '@mui/icons-material';
import swal from 'sweetalert'
function TenantsReview() {
  const userData = JSON.parse(localStorage.getItem('user-info'));
  const [userId] = useState(userData.data.id);
  const [userFirstName] = useState(userData.data.first_name);
  const [imageToBe, setImageToBe] = useState(null); 

  const params = useParams();
  const paramaId = params.id;

  useEffect(()=>{
    const realThree = async () => {
      const SendId = userId;
      const request = await axios.get(`${BaseURL}/api/get-host-specific-details/${SendId}`);
      setImageToBe(`${BaseURL}/users/${request.data.hostSpecific.image}`);
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

      const handleLogout = async () => {
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
    }

        // star ratings

      var [arr] = useState([]);

      var [finalFinaly, setFinalyFinaly] = useState([]);


      useEffect(()=>{
          const getAllSpecificReviews = async (e, id) => {
              let url = `${BaseURL}/api/get-all-specific-customer-review/${userId}`;
              const request = await axios.get(url);
              if(request.data.status === 200) {
                  setFinalyFinaly(request.data.review_page);
                  
              }
          }
          getAllSpecificReviews();
      },[paramaId, arr, userId]);


      // end
    return (
      <div className='tenant-review__page'>
  
            <div className='tenant-review__info'>
                <div className="tenant-review__info-left">
                    <div className='incase-you-know'>
                        <div className="host-image"><img src={imageToBe} alt="" /></div>
                        <div>
                            <h4>{userFirstName}</h4>
                            <p>Host</p>
                        </div>
                        <div className='TenantsDetailsMenuBar' onClick={handleMenuBar}><h2 style={{ display: 'flex', alignItems: 'center' }}><MoreHoriz /></h2></div>
                    </div>
                    {showMenuBar ?
                    <p>Navigation</p>
                    :
                    null
                    }
        
                    {showMenuBar ?
                    <ul className='host-navigation'>
                        <li onClick={()=>{
                            Navigate('/main-host-account');
                        }}>Dashboard</li>
                        <li><Link to="/host-houses" className='lilo-link'>Your houses</Link></li>
                        <li><Link to="/add-house-host" className='lilo-link'><Add /> house</Link></li>
                        <li style={{ backgroundColor: '#F78513' }}>Tenants Details</li>
                        <li onClick={()=> Navigate('/host-profile')}>Host Profile</li>
                        <li onClick={()=> Navigate('/host-settings')} className='deal-done'>Settings</li>
                        <li onClick={handleLogout}
                        className='baby'>Logout</li>
                    </ul>
                    :
                    null
                    }
                </div>
                <div className="tenant-review__info-right">
                    <Button onClick={()=>{
                        Navigate(`/tenants-details`);
                    }}>Back</Button>
                    {finalFinaly.length >= 1 ?
                    <>
                        <h4>{finalFinaly.length} {finalFinaly.length > 1 ? 
                            'reviews'
                        :
                            'review'
                        }</h4>
                        
                            <div className="tenant-review__info-right_container_rating">
                            {finalFinaly.map((object, index)=>(
                                    <div className="tenant-review__info-right_child_rating" key={index}><p>{index + 1}</p> <p>{object.review_rating} star rating</p> <p>{object.review_comment}</p></div>

                                ))}
                            </div>
                    </>
                    :
                        <p>No review yet</p>
                    }
                </div>
        </div>
  
      </div>
    )
  }

export default TenantsReview