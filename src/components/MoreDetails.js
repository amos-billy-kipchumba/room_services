
import React, {useState, useEffect} from 'react'
import './MoreDetails.css'
import Button from '@mui/material/Button';
import { FaSwimmingPool, FaUpload, FaRegStar, FaRegCalendarTimes, FaBed } from 'react-icons/fa';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import Slider from './Slider';
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

import { FaBath, FaToiletPaper, FaTv, FaTemperatureHigh, FaWifi, FaBreadSlice } from "react-icons/fa";
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import IronIcon from '@mui/icons-material/Iron';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import MicrowaveIcon from '@mui/icons-material/Microwave';
import RiceBowlIcon from '@mui/icons-material/RiceBowl';
import BlenderIcon from '@mui/icons-material/Blender';
import CoffeeMakerIcon from '@mui/icons-material/CoffeeMaker';
import FireExtinguisherIcon from '@mui/icons-material/FireExtinguisher';
import BalconyIcon from '@mui/icons-material/Balcony';
import YardIcon from '@mui/icons-material/Yard';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import PoolIcon from '@mui/icons-material/Pool';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import NoMeetingRoomIcon from '@mui/icons-material/NoMeetingRoom';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import Drier from './Images/drier.jpg'
import KitchenIcon from '@mui/icons-material/Kitchen';
import { BookOnline, ContactMail, Favorite} from '@mui/icons-material';
import MoreDetailsLoader from '../MoreDetailsLoader';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import BaseURL from './BaseUrl';
import swal from 'sweetalert';

function MoreDetails() {
    var userData = JSON.parse(localStorage.getItem('user-info'));
    var [userDataPie] = useState(JSON.parse(localStorage.getItem('user-info')));
    if (userDataPie !== null) {
        var userId = userDataPie.data.id;
        var firstName = userDataPie.data.first_name;
        var lastName = userDataPie.data.last_name;
        var userImage = userDataPie.data.image;
        var userEmail = userDataPie.data.email;
        var userPhone = userDataPie.data.phone;
    }
    const [hostImage, setHostImage] = useState(null);
    const [loading, setLoading] = useState(true);
    const [hostDit, setHostDit] = useState([]);

    const params = useParams();
    const paramaId = params.id;


    const [allHousesForMore, setAllHousesForMore] = useState([]);
    useEffect(()=>{
        const getAllForMoreDetails = async () => {
            const userPin = paramaId;
            const request = await axios.get(`${BaseURL}/api/get-all-house-more-details/${userPin}`);
            if(request.data.status === 200){
                setAllHousesForMore(request.data.bookingInfoForHost[0])
                setLoading(false);
            }
        }
        getAllForMoreDetails();
    },[paramaId]);

    //booked dates converter

    const [containsDates] = useState([]);
    const [output] = useState([]);

    const [containsDates2] = useState([]);
    const [output2] = useState([]);

    var [arr] = useState([]);
    useEffect(()=>{
        const fetchBookingInfo = async () => {
            try {
                const request = await axios.get(`${BaseURL}/api/get-booked-dates/${paramaId}`);

                var fancyDates3 = () => request.data.selectedDates.map((item)=>{
                    var initialDate = new Date(item.start_date);
                    var laterDate = new Date(item.end_date);
                    while (initialDate <= laterDate) {
                        arr.push((new Date(initialDate)).toString().substring(0,15));
                        initialDate.setDate(initialDate.getDate() + 1);
                    }
                    return arr;
                })

                fancyDates3();

                var fancyDates4 = () => {
                    arr.forEach((item) => {
                        output.push(Date.parse(item));
                      })
                    return output;
                }

                fancyDates4();

                if(request.data.status === 200) {
                    var fancyDates = () => request.data.selectedDates.map((item)=>{
                        let dateSiri = ""
                        dateSiri = Date.parse(item.start_date);
                        containsDates.push(dateSiri);
                        let dateGiri = ""
                        dateGiri = Date.parse(item.end_date);
                        containsDates.push(dateGiri);
                        containsDates.forEach((item) => {
                            if (output.indexOf(item) === -1) {
                              output.push(item);
                            }
                          })
                        return output;
                    })

                    fancyDates();



                    var fancyDates2 = () => request.data.selectedDates.map((item)=>{
                        let dateSiri2 = ""
                        dateSiri2 = Date.parse(item.end_date);
                        containsDates2.push(dateSiri2);
                        containsDates2.forEach((item) => {
                            if (output2.indexOf(item) === -1) {
                              output2.push(item);
                            }
                          })
                        return output2;
                    })

                    fancyDates2();
                }
            } catch (error) {
                console.error(error.message)
            }
        }
        fetchBookingInfo();
    },[paramaId, containsDates,output,containsDates2,output2, arr]);

    const excludedDates = output;

    //

   

    useEffect(()=>{
        const seventhHeaven = async () => {
            const request = await axios.get(`${BaseURL}/api/get-host-join-details/${paramaId}`);
            setHostImage(`${BaseURL}/users/${request.data.hostJoin[0].image}`);
            setHostDit(request.data.hostJoin[0]);
        }
        seventhHeaven();
    },[paramaId]);



      const Navigate = useNavigate();

      // all about booking calendar

    const [selectedDate, setSelectedDate] = useState('');
    const [selectedDate2, setSelectedDate2] = useState('');

    var [proposedNextDate, setProposedNextDate] = useState();

    //another booked dates
      useEffect(()=>{
        function fanyaMambo() {
            for(var i=0; i < output.length; i++) {
                if(output[i] > Date.parse(selectedDate)) {
                    setProposedNextDate(output[i]);
                    break;
                }
            }
        }
        fanyaMambo();
      },[output, selectedDate,output2]);

    // 


    const [trueFalse, setTrueFalse] = useState(true);
    const [trueFalse2, setTrueFalse2] = useState(true);

    const [handleMaxGuestNo, setHandleMaxGuestNo] = useState();

    const time = Math.abs(selectedDate2 - selectedDate);

    const hours = Math.ceil(time / (1000*60*60));

    const dayDay = Math.ceil(time / (1000*60*60*24));

    if(allHousesForMore){
        var priceTag = parseInt(allHousesForMore.price);

        var numberTag = parseInt(handleMaxGuestNo);

        var totalPriceTag = priceTag * numberTag * dayDay;
    }

    const dateFormatAux = (date) => {
        var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;

        return [year, month, day].join('-');
    }

    const dateFormatAux2 = (date) => {
        var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;

        return [year, month, day].join('-');
    }

    const dateFormat = (date) => {
        let formatYearMonthDay = dateFormatAux(date);
        
        let formartISO8601 = new Date(date).toISOString();
       
        return [formatYearMonthDay, formartISO8601];
    }

    const dateFormat2 = (date) => {
        let formatYearMonthDay = dateFormatAux2(date);
        
        let formartISO8601 = new Date(date).toISOString();
       
        return [formatYearMonthDay, formartISO8601];
    }


    const handleBookSubmit = (e) => {
        e.preventDefault();
        let startDateYMD, startDateISO8601;

        let endDateYMD, endDateISO8601;

        if(selectedDate != null) {
            [startDateYMD, startDateISO8601] = dateFormat(selectedDate); 
        }

        if(selectedDate2 != null) {
            [endDateYMD, endDateISO8601] = dateFormat2(selectedDate2); 
        }

        if(userData === null || userData === "") {
            swal({
                title: "Not signed in",
                text: "please login first!",
                icon: "warning",
                dangerMode: true,
            });
            Navigate("/sign-in")
        }

        else {
            let formData = {
                customerId: userId,
                customerFirstName: firstName,
                customerLastName: lastName,
                customerImage: userImage,
                customerPhone: userPhone,
                customerEmail: userEmail,

                customerStartDateRAW: selectedDate,
                customerStartDateFmtYMD: startDateYMD,
                customerStartDateFmtISO8601: startDateISO8601,

                customerEndDateRAW: selectedDate2,
                customerEndDateFmtYMD: endDateYMD,
                customerEndDateFmtISO8601: endDateISO8601,
                houseId: paramaId,
                houseCover: allHousesForMore.cover,
                houseTitle: allHousesForMore.title,
                houseDescription: allHousesForMore.description,
                houseLocation: allHousesForMore.location,
                housePrice: allHousesForMore.price,

                totalPrice: totalPriceTag,
                numberOfGuests: handleMaxGuestNo,
                hourDuration: hours,
            };


            Navigate(`/customer-house-room-reservation/${paramaId}`);
            localStorage.setItem("booking-data", JSON.stringify(formData));
        }
    }

    //end of booking calendar

    useEffect(()=> {
        if(allHousesForMore.max_no_of_guests === null) {
            Navigate('/');
        }
    },[Navigate, allHousesForMore]);

    const [likeLike, setLikeLike] = useState([]);

    useEffect(()=>{
        const getLikes = async () => {
            const userPin = paramaId;
            const request = await axios.get(`${BaseURL}/api/get-house-like/${userPin}`);
            setLikeLike(request.data.likes);
        }
        getLikes()
    },[paramaId]);

    const [trueLike, setTrueLike] = useState(false);

    useEffect(()=>{
        const handsLike = likeLike.find((element) => element.user_id === userId);

        if(handsLike !== null) {
            setTrueLike(true);
        }

        if(handsLike === undefined) {
            setTrueLike(false);
        }
    },[likeLike, userId]);

    const handleLike = async (e) => {
        e.preventDefault();
        if(userDataPie !== null) {
            const formData = new FormData();
            formData.append('house_id', paramaId);
            formData.append('user_id', userId);
            let url = `${BaseURL}/api/add-house-like`;

            const request = await axios.post(url, formData);
            if(request.data.status === 200) {
                window.location.reload();
            }
        }
        else {
            Navigate('/sign-in');
        }
    }


    //Scroll to the top on load
        useEffect(()=>{
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
        },[]);
    //End of Scroll to the top on load

    

  return (
    <>
    {loading !== false ?
        <MoreDetailsLoader /> 
        :
    <div className='more__page'>

        <div className='morePage__info'>

            <div className="selected-info">
                {allHousesForMore ?
                    <h2>{allHousesForMore.title}</h2>
                     :
                     null
                }
                <div className='map-save'>
                {allHousesForMore ?
                    <p style={{ margin: '0px 10px' }}>{allHousesForMore.location}</p>
                    :
                    null
                }
                    <div className='button-share'>
                        <Button><span><FaUpload /></span>Share</Button>
                        {trueLike === false ?
                        <Button
                        onClick={handleLike}><span><FavoriteBorderIcon /></span>like</Button>
                        :
                        <Button><span style={{ color: '#ff7779' }}><Favorite /></span>liked</Button>
                    }
                    </div>
                </div>

                <div className="setSliderRight">
                    <Slider lured={paramaId} allHousesForMore={allHousesForMore} />
                </div>

                <Button className="viewAllImages" onClick={()=> {
                    Navigate(`/all-house-images/${paramaId}`)
                }}>View all house images</Button>

                <div className='hosted-by'>
                    <div className='hosted-by-left-main'>
                        {allHousesForMore ? 
                        
                        <div className='hosted-by-left'>
                            <div className='hosted-by-left-one'>
                            {allHousesForMore ?
                                <h2>Entire {allHousesForMore.house_type} hosted by {hostDit.first_name}</h2>
                                :
                                null}
                                {allHousesForMore ?
                                <p>{allHousesForMore.max_no_of_guests} guests . {allHousesForMore.number_of_bedrooms} bedrooms . {allHousesForMore.number_of_beds} beds . {allHousesForMore.number_of_bathtubs} baths</p>
                                :
                                null
                                }
                            </div>
                            <div className='hosted-by-left-two'>
                                <img src={hostImage} alt="" />
                            </div>
                        </div>
                        :
                        null }

                        <div className='dive-right'>
                            <div className='dive-right-one'><ContactMail /></div>
                            <div className='dive-right-two'>
                                <h2>Contacts</h2>
                                <p><span style={{ fontWeight: 'bold' }}>Phone: </span><span>{hostDit.phone}</span> <span style={{ fontWeight: 'bold' }}>Email: </span><span>{hostDit.email}</span></p>
                            </div>
                        </div>
                        {allHousesForMore.pool === `1` ?
                        <div className='dive-right'>
                        {allHousesForMore.pool === `1` ?
                            <div className='dive-right-one'><FaSwimmingPool /></div> :
                            null
                         }
                            {allHousesForMore.pool === `1` ?
                            <div className='dive-right-two'>
                                <h2>Dive right in</h2>
                                <p>This is one of the few places in the area with a pool.</p>
                            </div>
                            :
                            null
                         }
                            
                        </div>
                        :
                            null
                         }

                        <div className='dive-right'>
                            <div className='dive-right-one'><FaRegStar /></div>
                            <div className='dive-right-two'>
                                <h2>Experienced host</h2>
                                <p>{hostDit.first_name} has:</p>
                                <p>{likeLike.length} {likeLike.length > 1 ?
                                'likes'
                                :
                                'like'
                                }</p>
                            </div>
                        </div>

                        <div className='dive-right'>
                            <div className='dive-right-one'><FaRegCalendarTimes /></div>
                            <div className='dive-right-two'>
                                <h2>Free cancellation for 48 hours.</h2>
                                <p>YES!</p>
                            </div>
                        </div>

                        <div className='dive-right'>
                            <div className='dive-right-one'><FaBed /></div>
                            <div className='dive-right-two'>
                                <h2>Where you will sleep.</h2>
                                {allHousesForMore ?
                                <p>Number of Bedrooms: {parseInt(allHousesForMore.number_of_bedrooms) >= 1 ? allHousesForMore.number_of_bedrooms : 0}</p>
                                :
                                null
                                }
                                {allHousesForMore ?
                                <p>Number of Beds: {parseInt(allHousesForMore.number_of_beds) >= 1 ? allHousesForMore.number_of_beds : 0}</p>
                                :
                                null}
                            </div>
                        </div>

                        <div className='dive-right'>
                            <div className='dive-right-two'>
                                <h2>What this place offers</h2>
                                <h4>Bedroom</h4>
                                {allHousesForMore.bathtub === `1` ?
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <p style={{ alignItems: 'center', marginTop: '10px', display: 'flex' }}><span style={{ marginRight: '10px', color: 'black', alignItems: 'center' }}><FaBath /></span> <span style={{ alignItems: 'center' }}>bath tub</span></p>
                                </div>
                                :
                                null}

                                {allHousesForMore.hair_drier === `1` ?
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <p style={{ alignItems: 'center', marginTop: '10px', display: 'flex' }}><span style={{ marginRight: '10px', color: 'black', alignItems: 'center' }}><img src={Drier} alt="" style={{ width: '20px' }} /></span> <span style={{ alignItems: 'center' }}>hair drier</span></p>
                                </div>
                                :
                                null}


                                <h4 style={{ marginTop: '10px' }}>Bedroom and laundry</h4>
                                
                                {allHousesForMore.washer === `1` ?
                                <div className="mine-rude">
                                    <div className='less-rude'>
                                        <span><LocalLaundryServiceIcon /></span>
                                    </div>
                                    <div className="more-rude">
                                        <span>washer</span>
                                    </div>
                                </div>
                                :
                                null}

                                {allHousesForMore.drier === `1` ?
                                <div className="mine-rude">
                                    <div className='less-rude'>
                                        <span><DryCleaningIcon /></span>
                                    </div>
                                    <div className="more-rude">
                                        <span>drier</span>
                                    </div>
                                </div>
                                :
                                null}

                                {allHousesForMore.essentials === `1` ?
                                <div className="mine-rude">
                                    <div className='less-rude'>
                                        <span><FaToiletPaper /></span>
                                    </div>
                                    <div className="more-rude">
                                        <span style={{ marginRight: '5px' }}>essentials:</span>
                                        <span>toilet-paper, Towels, Bedsheets, soap</span>
                                    </div>
                                </div>
                                :
                                null}

                                {allHousesForMore.iron === `1` ?
                                <div className="mine-rude">
                                    <div className='less-rude'>
                                        <span><IronIcon /></span>
                                    </div>
                                    <div className="more-rude">
                                        <span>iron</span>
                                    </div>
                                </div>
                                :
                                null}
                        
                                <h4 style={{ marginTop: '10px' }}>Entertainment</h4>
                                {allHousesForMore.tv === `1` ?
                                <div className="mine-rude">
                                    <div className='less-rude'>
                                        <span><FaTv /></span>
                                    </div>
                                    <div className="more-rude">
                                        <span>TV</span>
                                    </div>
                                </div>
                                :
                                null}

                                <h4 style={{ marginTop: '10px' }}>Heating and cooling</h4>
                                {allHousesForMore.air_condition === `1` ?
                                <div className="mine-rude">
                                    <div className='less-rude'>
                                        <span><AcUnitIcon /></span>
                                    </div>
                                    <div className="more-rude">
                                        <span>air Conditioner</span>
                                    </div>
                                </div>
                                :
                                null}

                                {allHousesForMore.heating === `1` ?
                                <div className="mine-rude">
                                    <div className='less-rude'>
                                        <span><FaTemperatureHigh /></span>
                                    </div>
                                    <div className="more-rude">
                                        <span>heating</span>
                                    </div>
                                </div>
                                :
                                null}

                                <h4 style={{ marginTop: '10px' }}>Internet and office</h4>
                                {allHousesForMore.wifi === `1` ?
                                <div className="mine-rude">
                                    <div className='less-rude'>
                                        <span><FaWifi /></span>
                                    </div>
                                    <div className="more-rude">
                                        <span>wifi</span>
                                    </div>
                                </div>
                                :
                                null}

                                <h4 style={{ marginTop: '10px' }}>Kitchen and dining</h4>
                                {allHousesForMore.refrigeration === `1` ?
                                <div className="mine-rude">
                                    <div className='less-rude'>
                                        <span><KitchenIcon /></span>
                                    </div>
                                    <div className="more-rude">
                                        <span>refrigerator</span>
                                    </div>
                                </div>
                                :
                                null}

                                {allHousesForMore.microwave === `1` ?
                                <div className="mine-rude">
                                    <div className='less-rude'>
                                        <span><MicrowaveIcon /></span>
                                    </div>
                                    <div className="more-rude">
                                        <span>microwave</span>
                                    </div>
                                </div>
                                :
                                null}

                                {allHousesForMore.dishes_silverware === `1` ?
                                <div className="mine-rude">
                                    <div className='less-rude'>
                                        <span><RiceBowlIcon /></span>
                                    </div>
                                    <div className="more-rude">
                                        <span>dishes and silverware</span>
                                    </div>
                                </div>
                                :
                                null}

                                {allHousesForMore.kitchen === `1` ?
                                <div className="mine-rude">
                                    <div className='less-rude'>
                                        <span><LocalDiningIcon /></span>
                                    </div>
                                    <div className="more-rude">
                                        <span style={{ marginRight: '5px' }}>kitchen:</span>
                                        <span>space where guests can cook their own meals</span>
                                    </div>
                                </div>
                                :
                                null}

                                {allHousesForMore.blender === `1` ?
                                <div className="mine-rude">
                                    <div className='less-rude'>
                                        <span><BlenderIcon /></span>
                                    </div>
                                    <div className="more-rude">
                                        <span>blender</span>
                                    </div>
                                </div>
                                :
                                null}

                                {allHousesForMore.coffee_maker === `1` ?
                                <div className="mine-rude">
                                    <div className='less-rude'>
                                        <span><CoffeeMakerIcon /></span>
                                    </div>
                                    <div className="more-rude">
                                        <span>coffee maker</span>
                                    </div>
                                </div>
                                :
                                null}

                                {allHousesForMore.fire_extinguisher === `1` ?
                                <div className="mine-rude">
                                    <div className='less-rude'>
                                        <span><FireExtinguisherIcon /></span>
                                    </div>
                                    <div className="more-rude">
                                        <span>fire extinguisher</span>
                                    </div>
                                </div>
                                :
                                null}

                                {allHousesForMore.bread_toaster === `1` ?
                                <div className="mine-rude">
                                    <div className='less-rude'>
                                        <span><FaBreadSlice /></span>
                                    </div>
                                    <div className="more-rude">
                                        <span>bread toaster</span>
                                    </div>
                                </div>
                                :
                                null}

                                <h4 style={{ marginTop: '10px' }}>Outdoor</h4>
                                {allHousesForMore.patio_balcony === `1` ?
                                <div className="mine-rude">
                                    <div className='less-rude'>
                                        <span><BalconyIcon /></span>
                                    </div>
                                    <div className="more-rude">
                                        <span>patio or balcony</span>
                                    </div>
                                </div>
                                :
                                null}

                                {allHousesForMore.backyard === `1` ?
                                <div className="mine-rude">
                                    <div className='less-rude'>
                                        <span><YardIcon /></span>
                                    </div>
                                    <div className="more-rude">
                                        <span>backyard</span>
                                    </div>
                                </div>
                                :
                                null}

                                {allHousesForMore.outdoor_grill === `1` ?
                                <div className="mine-rude">
                                    <div className='less-rude'>
                                        <span><OutdoorGrillIcon /></span>
                                    </div>
                                    <div className="more-rude">
                                        <span>out-door grill</span>
                                    </div>
                                </div>
                                :
                                null}

                                {allHousesForMore.beach_essential === `1` ?
                                <div className="mine-rude">
                                    <div className='less-rude'>
                                        <span><BeachAccessIcon /></span>
                                    </div>
                                    <div className="more-rude">
                                        <span style={{ marginRight: '5px' }}>beach essential:</span>
                                        <span>beach towels, umbrella, beach blanket, snorkeling gear</span>
                                    </div>
                                </div>
                                :
                                null}

                                {allHousesForMore.pool === `1` ?
                                <div className="mine-rude">
                                    <div className='less-rude'>
                                        <span><PoolIcon /></span>
                                    </div>
                                    <div className="more-rude">
                                        <span>pool</span>
                                    </div>
                                </div>
                                :
                                null}

                                {allHousesForMore.parking === `1` ?
                                <div className="mine-rude">
                                    <div className='less-rude'>
                                        <span><LocalParkingIcon /></span>
                                    </div>
                                    <div className="more-rude">
                                        <span>parking</span>
                                    </div>
                                </div>
                                :
                                null}

                                {allHousesForMore.long_term === `1` ?
                                <div className="mine-rude">
                                    <div className='less-rude'>
                                        <span><CalendarMonthIcon /></span>
                                    </div>
                                    <div className="more-rude">
                                        <span style={{ marginRight: '5px' }}>Long term stays allowed:</span>
                                        <span>Allow stay for 28 days or more</span>
                                    </div>
                                </div>
                                :
                                null}

                                {allHousesForMore.private_entrance === `1` ?
                                <div className="mine-rude">
                                    <div className='less-rude'>
                                        <span><NoMeetingRoomIcon /></span>
                                    </div>
                                    <div className="more-rude">
                                        <span>private entrance</span>
                                    </div>
                                </div>
                                :
                                null}
                            </div>
                        </div>
                    </div>
                    <div className='hosted-by-right'>
                        <div className="right-host-form">
                            <div className='right-host-form-inner'>
                                {allHousesForMore ?
                                <h4><span className='strong-text'>${allHousesForMore.price}</span> / night</h4>
                                :
                                null}
                                <div className="striker-date">
                                    <div className='strike-one'>
                                    {allHousesForMore ?
                                        <DatePicker
                                         selected={selectedDate}
                                         minDate={new Date()}
                                         onChange={date=> {
                                            setSelectedDate(date);
                                            setTrueFalse(false);
                                            }
                                            }
                                         excludeDates={excludedDates}
                                         className="datePickerTribe"
                                         required
                                         placeholderText='Start date & time'
                                         id="startDate"
                                         dateFormat="dd/MM/yyyy"
                                          />
                                          :
                                          null}
                                    </div>

                                    <div className='strike-two'>
                                    {allHousesForMore ?
                                        <DatePicker
                                         selected={selectedDate2}
                                         minDate={selectedDate}
                                         onChange={date=> {
                                            setSelectedDate2(date);
                                            setTrueFalse2(false);
                                            }}
                                         excludeDates={excludedDates}
                                         className="datePickerTribe"
                                         disabled={trueFalse}
                                         required
                                         placeholderText='End date & time'
                                         id="EndDate"
                                         dateFormat="dd/MM/yyyy"
                                         maxDate={proposedNextDate}
                                          />
                                          :
                                          null}
                                    </div>
                                </div>

                                <div className="strike-number-guests">
                                {allHousesForMore ?
                                    <input type="number"
                                     min="1"
                                     max={allHousesForMore.max_no_of_guests}
                                     name='number-of-guests'
                                     placeholder='No of guests'
                                     value={handleMaxGuestNo}
                                     onChange={(e)=> {
                                        setHandleMaxGuestNo(e.target.value);
                                    }} />
                                     :
                                     null}
                                </div>

                                <Button onClick={handleBookSubmit} disabled={trueFalse2}>
                                    Reserve<BookOnline style={{ marginLeft: '5px' }} />
                                </Button>
                                <p>You won't be charged yet</p>
                                
                                {handleMaxGuestNo !== undefined ?
                                    <div className="strike-price">
                                        <h4>Total price</h4>
                                        <div className='strike-price-top'>
                                            <p>{numberTag} guest x ${priceTag} x {dayDay} days</p>
                                            <p>${totalPriceTag}</p>
                                        </div>
                                    </div>
                                    :
                                    null
                                }

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>

    </div>
    }
    </>
  )
}

export default MoreDetails