import React, {useState, useEffect} from 'react'
import './TenantsDetails.css'
import Add from '@mui/icons-material/Add';
import {Link} from 'react-router-dom'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'
import BaseURL from '../BaseUrl';
import { Button } from '@mui/material';
import { Close, Delete, MoreHoriz, StarBorderOutlined } from '@mui/icons-material';
import swal from 'sweetalert'
import { FaStar } from 'react-icons/fa';
function TenantsDetails() {
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


  const [totalBooked, setTotalBooked] = useState([]);
  useEffect(()=>{
    const realFour = async () => {
      const SendId = userId;
      const request = await axios.get(`${BaseURL}/api/get-total-booked-for-host/${SendId}`);
      setTotalBooked(request.data.bookingInfoForHost);
    }
    realFour();

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
        const colors = {
          orange: '#FFBA5A',
          gray: '#a9a9a9'
      }

      const stars = Array(5).fill(0);
      const [currentValue, setCurrentValue] = useState(0);
      const [hoverValue, setHoverValue] = useState(undefined);

      const handleStarRatings = value => {
          setCurrentValue(value);
      }

      const handleMouseOver = value => {
          setHoverValue(value);
      }

      const handleMouseLeave = () => {
          setHoverValue(undefined);
      }

      const [showButtonText, setShowButtonText] = useState(false);

      const [reviewNumber, setReviewNumber] = useState();

      const [reviewComment, setReviewComment] = useState(''); 

      var [arr] = useState([]);

      const handleSubmitReview = async (e, id) => {
          e.preventDefault();

          const reviewForm = new FormData();

          reviewForm.append('review_rating', reviewNumber);
          reviewForm.append('review_comment', reviewComment);
          reviewForm.append('user', userId);
          reviewForm.append('house_id', id);

          console.log(reviewNumber, reviewComment, id);

          const url = `${BaseURL}/api/add-customer-review`;
          const request = await axios.post(url, reviewForm);
          if(request.data.status === 200) {
              setShowButtonText(!showButtonText);
          }
      }

      var [finalFinaly, setFinalyFinaly] = useState([]);

      var [allSpecificReviews, setAllSpecificReviews] = useState(0);

      const [reviewFalse, setReviewFalse] = useState(false);

      useEffect(()=>{
          const getAllSpecificReviews = async (e, id) => {
              let url = `${BaseURL}/api/get-all-specific-customer-review/${userId}`;
              const request = await axios.get(url);
              if(request.data.status === 200) {
                  setFinalyFinaly(request.data.review_page);
                  var finalSpecificReviews = () => request.data.review_page.map((item)=>{
                      let i = 0;
                      if(userId === parseInt(item.user)) {
                          setReviewFalse(true);
                      }
                      setAllSpecificReviews((i += parseInt(item.review_rating)))
                      return arr;
                  })
              }

              finalSpecificReviews();
          }
          getAllSpecificReviews();
      },[paramaId, arr, userId]);

      const handleSubmitReviewUpdate = async (e, id) => {
          e.preventDefault();
          const reviewForm = new FormData();

          reviewForm.append('review_rating', reviewNumber);
          reviewForm.append('review_comment', reviewComment);
          reviewForm.append('user', userId);
          reviewForm.append('house_id', id);

          const url = `${BaseURL}/api/update-customer-review/${userId}`;
          const request = await axios.post(url, reviewForm);
          if(request.data.status === 200) {
              setShowButtonText(!showButtonText);
          }
      }
      // end

      // deleting a tenant
      const handleDeleteTenant = async (e, id) => {
        e.preventDefault();

        const willDelete = await swal({
          title: "Are you sure?",
          text: "Are you sure that you want to delete ? if no click outside the box",
          icon: "warning",
          dangerMode: true,
        });
    
        if (willDelete) {
          const request = await axios.delete(`${BaseURL}/api/delete-customer-booking-two/${id}`);
          if(request.data.status === 200) {
            swal('success','deleted successfully','success');
            Navigate('/main-host-account');
          }
        }

      }
      // end
    return (
      <div className='tenants-details__page'>
  
          <div className='tenants-details__info'>
             <div className="tenants-details__info-left">
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
             <div className="tenants-details__info-right">
             {totalBooked.length > 0 ?
              <>
             {totalBooked && totalBooked.map((object, index)=>{
                    let loco = new Date(object.start_date);
                    var dateTo =  loco.toLocaleDateString(loco);

                    let loco2 = new Date(object.end_date);
                    var dateTo2 =  loco2.toLocaleDateString(loco2);

                return(
                    <div className="tenants-details__info-rightMainContainer" key={index}>
                        <div className="tenants-details__info-rightMainContainerTop">
                            <img src={`${BaseURL}/users/${object.image}`} alt="" />
                        </div>
                        <div className="tenants-details__info-rightMainContainerBottom">
                            <label>Tenant's first name</label>
                            <p>{object.first_name}</p>
                            <label>Tenant's last name</label>
                            <p>{object.last_name}</p>
                            <label>Phone number</label>
                            <p>{object.booking_phone}</p>
                            <label>Email</label>
                            <p>{object.email}</p>
                            <label>House Name</label>
                            <p>{object.title}</p>
                            <label>Start Date</label>
                            <p>{dateTo}</p>
                            <label>End Date</label>
                            <p>{dateTo2 }</p>
                            <label>Duration of Stay</label>
                            <p>{object.number_of_days}</p>
                            <label>Number of guests</label>
                            <p>{object.number_of_guests}</p>
                            <label>Total price</label>
                            <p>${object.total_price}</p>
                            <div className="tenants-details__info-rightMainContainerBottomImage">
                                <img src={`${BaseURL}/uploads/${object.cover}`} alt="" /> 
                            </div>

                            <div className="tenants-details__info-rightMainContainerBottomButton">
                                <Button onClick={()=> {
                                    Navigate(`/more-details/${object.house_id}`);
                                }}>More</Button>
                            </div>

                            <div className="tenants-details__info-rightMainContainerBottomButtonTwo">
                                <Button onClick={()=> {
                                    Navigate(`/tenant-review?name=${object.title}&id=${object.id}`,{state:{
                                      paramaId: object.id,
                                      title: object.title,
                                    }
                                    });
                                }}>Reviews</Button>

                                <Button onClick={(e)=> {
                                  handleDeleteTenant(e, object.id);
                                }}><Delete /> </Button>
                            </div>

                            <p className='whyP'><StarBorderOutlined style={{ marginRight: '5px' }} /> Rate this customer</p>
                            <p className='whyP2'>Has {finalFinaly.length > 1 ? {allSpecificReviews} : 'no'} star rating {finalFinaly.length > 1 ? null : 'yet'} from {finalFinaly.length} {finalFinaly.length > 1 ?
                            'hosts'
                            :
                            'host'}</p>
                            {reviewFalse === false ?
                              <div className='rate_this_host'>
                                  <p>Rate this customer</p>
                                  <div className='rate_this_host_container'>
                                      {stars.map((_, index)=>{
                                          return(
                                              <FaStar
                                              key={index} 
                                              className='rate_this_host_container_star'
                                              color={(hoverValue || currentValue) > index ? colors.orange : colors.gray}
                                              onMouseOver={()=>{
                                                  handleMouseOver(index + 1);
                                              }}
                                              onMouseLeave={handleMouseLeave}
                                              onClick={()=>{
                                                  handleStarRatings(index + 1);
                                                  setShowButtonText(!showButtonText);
                                                  setReviewNumber(index + 1)
                                              }} />
                                          );
                                      })}
                                  </div>
                                  {showButtonText !== false ? 
                                      <>
                                          <textarea 
                                          placeholder='What is your feedback' 
                                          name='review_comment' 
                                          value={reviewComment} 
                                          onChange={(e)=>setReviewComment(e.target.value)} 
                                          className='rate_this_host_container_comment'></textarea>
                                          <div className='rate_this_host_container_comment_button_button'>
                                              <Button 
                                              className='rate_this_host_container_button' 
                                              onClick={(e)=>{
                                                handleSubmitReview(e, object.house_id)
                                              }}>Send your review</Button>
              
                                              <Button 
                                              className='rate_this_host_container_button' 
                                              onClick={()=>{
                                                  setShowButtonText(!showButtonText);
                                              }}><Close /></Button>
                                          </div>
                                      </>
                                  :
                                      null
                                  }
                              </div>
                              :
                              <div className='rate_this_host'>
                                  <p>Update this customer rating</p>
                                  <div className='rate_this_host_container'>
                                      {stars.map((_, index)=>{
                                          return(
                                              <FaStar
                                              key={index} 
                                              className='rate_this_host_container_star'
                                              color={(hoverValue || currentValue) > index ? colors.orange : colors.gray}
                                              onMouseOver={()=>{
                                                  handleMouseOver(index + 1);
                                              }}
                                              onMouseLeave={handleMouseLeave}
                                              onClick={()=>{
                                                  handleStarRatings(index + 1);
                                                  setShowButtonText(!showButtonText);
                                                  setReviewNumber(index + 1)
                                              }} />
                                          );
                                      })}
                                  </div>
                                  {showButtonText !== false ? 
                                      <>
                                          <textarea 
                                          placeholder='What is your feedback' 
                                          name='review_comment' 
                                          value={reviewComment} 
                                          onChange={(e)=>setReviewComment(e.target.value)} 
                                          className='rate_this_host_container_comment'></textarea>
                                          <div className='rate_this_host_container_comment_button_button'>
                                              <Button 
                                              className='rate_this_host_container_button' 
                                              onClick={(e)=>{
                                                handleSubmitReviewUpdate(e, object.house_id);
                                              }}>Update your review</Button>
              
                                              <Button 
                                              className='rate_this_host_container_button' 
                                              onClick={()=>{
                                                  setShowButtonText(!showButtonText);
                                              }}><Close /></Button>
                                          </div>
                                      </>
                                  :
                                      null
                                  }
                              </div>
              
                                  }
                        </div>
                    </div>
                );
             })}
             </>
              :
              <>No tenant yet</>
              }
             </div>
          </div>
  
      </div>
    )
  }

export default TenantsDetails