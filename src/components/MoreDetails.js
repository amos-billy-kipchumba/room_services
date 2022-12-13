
import React, {useState, useEffect} from 'react'
import './MoreDetails.css'
import Button from '@mui/material/Button';
import { FaSwimmingPool, FaRegStar, FaRegCalendarTimes, FaBed, FaToilet, FaUtensils, FaPencilRuler, FaWineBottle, FaBabyCarriage, FaStar } from 'react-icons/fa';
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
import { BeachAccessTwoTone, BookOnline, Camera, ChildCare, Close, ContactMail, Grass, HeatPump, Landscape, MiscellaneousServices, ShoppingBag, Shower, SportsSoccer} from '@mui/icons-material';
import MoreDetailsLoader from '../MoreDetailsLoader';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import BaseURL from './BaseUrl';
import swal from 'sweetalert';

function MoreDetails() {
    var userData = JSON.parse(localStorage.getItem('user-info'));
    var userDataPie = JSON.parse(localStorage.getItem('user-info'));
    if (userDataPie !== null) {
        var userId = userDataPie.data.id;
        var firstName = userDataPie.data.first_name;
        var lastName = userDataPie.data.last_name;
        var userImage = userDataPie.data.image;
        var userEmail = userDataPie.data.email;
        var userPhone = userDataPie.data.phone;
    }
    var [loading, setLoading] = useState(true);
    var [hostDit, setHostDit] = useState([]);

    const params = useParams();
    const paramaId = params.id;

    var [nomaCount] = useState([]);
    var [outputNoma] = useState([]);


    const [allHousesForMore, setAllHousesForMore] = useState([]);
    useEffect(()=>{
        const getAllForMoreDetails = async () => {
            const userPin = paramaId;
            const request = await axios.get(`${BaseURL}/api/get-all-house-more-details/${userPin}`);
            if(request.data.status === 200){
                setLoading(false);
                setAllHousesForMore(request.data.bookingInfoForHost[0]);
                if(request.data.bookingInfoForHost[0].aqua_farm === "1") {
                    nomaCount.push("aqua_farm");
                }


                if(request.data.bookingInfoForHost[0].barber === "1") {
                    nomaCount.push("barber")
                }

                if(request.data.bookingInfoForHost[0].bookshop === "1") {
                    nomaCount.push("bookshop")
                }

                if(request.data.bookingInfoForHost[0].butchery === "1") {
                    nomaCount.push("butchery")
                }

                if(request.data.bookingInfoForHost[0].cake_baker === "1") {
                    nomaCount.push("cake_baker")
                }

                if(request.data.bookingInfoForHost[0].chef === "1") {
                    nomaCount.push("chef")
                }

                if(request.data.bookingInfoForHost[0].chemist === "1") {
                    nomaCount.push("chemist")
                }

                if(request.data.bookingInfoForHost[0].creamy_inn === "1") {
                    nomaCount.push("creamy_inn")
                }

                if(request.data.bookingInfoForHost[0].event_planner === "1") {
                    nomaCount.push("event_planner")
                }

                if(request.data.bookingInfoForHost[0].grocery_store === "1") {
                    nomaCount.push("grocery_store")
                }

                if(request.data.bookingInfoForHost[0].hotel === "1") {
                    nomaCount.push("hotel")
                }

                if(request.data.bookingInfoForHost[0].kfc === "1") {
                    nomaCount.push("kfc")
                }

                if(request.data.bookingInfoForHost[0].java === "1") {
                    nomaCount.push("java")
                }

                if(request.data.bookingInfoForHost[0].library === "1") {
                    nomaCount.push("library")
                }

                if(request.data.bookingInfoForHost[0].maasai_market === "1") {
                    nomaCount.push("maasai_market")
                }

                if(request.data.bookingInfoForHost[0].min_mart === "1") {
                    nomaCount.push("min_mart")
                }

                if(request.data.bookingInfoForHost[0].organic_farm === "1") {
                    nomaCount.push("organic_farm")
                }

                if(request.data.bookingInfoForHost[0].petrol_station === "1") {
                    nomaCount.push("petrol_station")
                }

                if(request.data.bookingInfoForHost[0].pizza_inn === "1") {
                    nomaCount.push("pizza_inn")
                }

                if(request.data.bookingInfoForHost[0].supermarket === "1") {
                    nomaCount.push("supermarket")
                }

                if(request.data.bookingInfoForHost[0].ranch === "1") {
                    nomaCount.push("ranch")
                }

                if(request.data.bookingInfoForHost[0].spice_mart === "1") {
                    nomaCount.push("spice_mart")
                }

                if(request.data.bookingInfoForHost[0].tent_hire === "1") {
                    nomaCount.push("tent_hire")
                }

                nomaCount.forEach((item) => {
                    if (outputNoma.indexOf(item) === -1) {
                      outputNoma.push(item);
                    }
                  });
            }
        }
        getAllForMoreDetails();
    },[paramaId, nomaCount, outputNoma]);

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

   
    const [hostImageFor, setHostImageFor] = useState();
    useEffect(()=>{
        const seventhHeaven = async () => {
            const request = await axios.get(`${BaseURL}/api/get-host-join-details/${paramaId}`);
            if(request.data.status === 200) {
                setHostDit(request.data.hostJoin[0]);
                setHostImageFor(`${BaseURL}/users/${request.data.hostJoin[0].image}`);
            }
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

    const [handleMaxGuestNo, setHandleMaxGuestNo] = useState(1);

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
                text: "please register or login as customer first!",
                icon: "warning",
                dangerMode: true,
            });
            Navigate("/sign-in")
        }

        if(userData.data.user_type !== 2) {
            swal({
                title: "Not signed in",
                text: "please register or login as customer first!",
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
                hostEmail: hostDit.email,
            };

            Navigate(`/customer-house-room-reservation/${paramaId}`,{state:{
                allHousesForMore
            }
            });
            localStorage.setItem("booking-data", JSON.stringify(formData));
        }
    }

    //end of booking calendar

    useEffect(()=> {
        if(allHousesForMore.max_no_of_guests === null) {
            Navigate('/');
        }
    },[Navigate, allHousesForMore]);


    const [showExploreMore, setShowExploreMore] = useState(false);


    //Scroll to the top on load
        useEffect(()=>{
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
        },[]);
    //End of Scroll to the top on load

    const [showHide, setShowHide] = useState(false);

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

    const reviewForm = new FormData();

    reviewForm.append('review_rating', reviewNumber);
    reviewForm.append('review_comment', reviewComment);
    reviewForm.append('user', userId);
    reviewForm.append('house_id', paramaId);

    const handleSubmitReview = async (e) => {
        e.preventDefault();

        if(userData === null || userData === "") {
            swal({
                title: "Not signed in",
                text: "please register or login as customer first!",
                icon: "warning",
                dangerMode: true,
            });
            Navigate("/sign-in")
        } 

        else {
            const url = `${BaseURL}/api/add-review`;
            const request = await axios.post(url, reviewForm);
            if(request.data.status === 200) {
                setShowButtonText(!showButtonText);
            }
        }
    }

    var [finalFinaly, setFinalyFinaly] = useState([]);
    var [allSpecificReviews, setAllSpecificReviews] = useState(0);

    const [reviewFalse, setReviewFalse] = useState(false);

    const [reviewFinalId, setReviewFinalId] = useState('');
    useEffect(()=>{
        const getAllSpecificReviews = async () => {
            let url = `${BaseURL}/api/get-all-specific-review/${paramaId}`;
            const request = await axios.get(url);
            if(request.data.status === 200) {

                setFinalyFinaly(request.data.review_page);
                var finalSpecificReviews = () => request.data.review_page.map((item)=>{
                    let i = 0;
                    if(userId === parseInt(item.user)) {
                        setReviewFalse(true);
                    }
                    if(userId === parseInt(item.user) && parseInt(paramaId) === parseInt(item.house_id)){
                        setReviewFinalId(item.id);
                    }
                    setAllSpecificReviews((i += parseInt(item.review_rating)))
                    return arr;
                })
            }

            finalSpecificReviews();
        }
        getAllSpecificReviews();
    },[paramaId, arr, userId]);

    const handleSubmitReviewUpdate = async (e) => {
        e.preventDefault();
        const reviewForm = new FormData();

        reviewForm.append('review_rating', reviewNumber);
        reviewForm.append('review_comment', reviewComment);
        reviewForm.append('user', userId);
        reviewForm.append('house_id', paramaId);

        const url = `${BaseURL}/api/update-review/${reviewFinalId}`;
        const request = await axios.post(url, reviewForm);
        if(request.data.status === 200) {
            setShowButtonText(!showButtonText);
        }
    }
    // end

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
                        <Button onClick={()=>{
                            setShowExploreMore(!showExploreMore);
                        }}><span><MiscellaneousServices /></span>Nearby services</Button>
                    </div>
                </div>

                <div className="setSliderRight">
                    <Slider lured={paramaId} allHousesForMore={allHousesForMore} />
                </div>

                <Button className="viewAllImages" onClick={()=> {
                    Navigate(`/all-house-images/${paramaId}`,{state:{
                        allHousesForMore
                    }
                    });
                }}>View all house images</Button>

                {reviewFalse === false ?
                <div className='rate_this_host'>
                    <p>Rate this host</p>
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
                                onClick={handleSubmitReview}>Send your review</Button>

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
                    <p>Update this host ratings</p>
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
                                onClick={handleSubmitReviewUpdate}>Update your review</Button>

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
                                <img src={hostImageFor} alt="" />
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
                                <p>{finalFinaly.length > 0 ?
                                    <>{allSpecificReviews / finalFinaly.length}</>
                                    :
                                    <>No</>
                                }    {allSpecificReviews > 1 ?
                                'star rating'
                                :
                                'star rating yet'
                                } from {finalFinaly.length} {finalFinaly.length > 1 ?
                                    'reviews'
                                    :
                                    'review'
                                    }</p>
                                <Button onClick={()=>{
                                    Navigate(`/host-reviews/${paramaId}`,{state:{
                                        finalFinaly
                                    }
                                    });
                                }}>View all reviews</Button>
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
                                {allHousesForMore.bathtub === `1` || allHousesForMore.bathtub === `1` ?
                                <h4>Bedroom</h4>
                                :
                                null
                                }
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


                                {allHousesForMore.washer === `1` ?
                                <h4 style={{ marginTop: '10px' }}>Bedroom and laundry</h4>
                                :
                                null
                                }
                                
                                {allHousesForMore.washer === `1` || allHousesForMore.drier === `1` || allHousesForMore.essentials === `1` || allHousesForMore.iron === `1` ?
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

                                {allHousesForMore.shower === `1` ?
                                <div className="mine-rude">
                                    <div className='less-rude'>
                                        <span><Shower /></span>
                                    </div>
                                    <div className="more-rude">
                                        <span>Shower</span>
                                    </div>
                                </div>
                                :
                                null}

                                {allHousesForMore.toilet === `1` ?
                                <div className="mine-rude">
                                    <div className='less-rude'>
                                        <span><FaToilet /></span>
                                    </div>
                                    <div className="more-rude">
                                        <span>Toilet</span>
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

                                {allHousesForMore.baby_cot === `1` ?
                                <div className="mine-rude">
                                    <div className='less-rude'>
                                        <span><FaBabyCarriage /></span>
                                    </div>
                                    <div className="more-rude">
                                        <span>Baby cot</span>
                                    </div>
                                </div>
                                :
                                null}
                        
                                {allHousesForMore.tv === `1` ?
                                <h4 style={{ marginTop: '10px' }}>Entertainment</h4>
                                :
                                null
                                }

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

                                {allHousesForMore.mini_bar === `1` ?
                                <div className="mine-rude">
                                    <div className='less-rude'>
                                        <span><FaWineBottle /></span>
                                    </div>
                                    <div className="more-rude">
                                        <span>Mini bar</span>
                                    </div>
                                </div>
                                :
                                null}

                                {allHousesForMore.cinema === `1` ?
                                <div className="mine-rude">
                                    <div className='less-rude'>
                                        <span><Camera /></span>
                                    </div>
                                    <div className="more-rude">
                                        <span>Allows photography and cinematography</span>
                                    </div>
                                </div>
                                :
                                null}

                                {allHousesForMore.air_condition === `1` ?
                                <h4 style={{ marginTop: '10px' }}>Heating and cooling</h4>
                                :
                                null
                                }
                                {allHousesForMore.air_condition === `1` || allHousesForMore.heating === `1` ?
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

                                {allHousesForMore.wifi === `1` ?
                                <h4 style={{ marginTop: '10px' }}>Internet and office</h4>
                                :
                                null
                                }
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

                                {allHousesForMore.office_equipment === `1` ?
                                <div className="mine-rude">
                                    <div className='less-rude'>
                                        <span><FaPencilRuler /></span>
                                    </div>
                                    <div className="more-rude">
                                        <span>Office equipment</span>
                                    </div>
                                </div>
                                :
                                null}

                                {allHousesForMore.refrigeration === `1` ?
                                <h4 style={{ marginTop: '10px' }}>Kitchen and dining</h4>
                                :
                                null
                                }
                                {allHousesForMore.refrigeration === `1` || allHousesForMore.microwave === `1` || allHousesForMore.dishes_silverware === `1` || allHousesForMore.kitchen === `1` || allHousesForMore.blender === `1` || allHousesForMore.coffee_maker === `1` || allHousesForMore.fire_extinguisher === `1` || allHousesForMore.bread_toaster === `1` ?
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

                                {allHousesForMore.oven === `1` ?
                                <div className="mine-rude">
                                    <div className='less-rude'>
                                        <span><HeatPump /></span>
                                    </div>
                                    <div className="more-rude">
                                        <span>Oven</span>
                                    </div>
                                </div>
                                :
                                null}

                                {allHousesForMore.chef === `1` ?
                                <div className="mine-rude">
                                    <div className='less-rude'>
                                        <span><FaUtensils /></span>
                                    </div>
                                    <div className="more-rude">
                                        <span>Chef at a cost</span>
                                    </div>
                                </div>
                                :
                                null}

                                {allHousesForMore.shopping === `1` ?
                                <div className="mine-rude">
                                    <div className='less-rude'>
                                        <span><ShoppingBag /></span>
                                    </div>
                                    <div className="more-rude">
                                        <span>Shopping at an extra cost</span>
                                    </div>
                                </div>
                                :
                                null}

                                {allHousesForMore.patio_balcony === `1` ?
                                <h4 style={{ marginTop: '10px' }}>Outdoor</h4>
                                :
                                null
                                }
                                {allHousesForMore.patio_balcony === `1` || allHousesForMore.backyard === `1` || allHousesForMore.outdoor_grill === `1` || allHousesForMore.beach_essential === `1` || allHousesForMore.pool === `1` || allHousesForMore.parking === `1` || allHousesForMore.long_term === `1` || allHousesForMore.private_entrance === `1` ?
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

                                {allHousesForMore.beach_front === `1` ?
                                <div className="mine-rude">
                                    <div className='less-rude'>
                                        <span><BeachAccessTwoTone /></span>
                                    </div>
                                    <div className="more-rude">
                                        <span>Beach Front</span>
                                    </div>
                                </div>
                                :
                                null}

                                {allHousesForMore.games_court === `1` ?
                                <div className="mine-rude">
                                    <div className='less-rude'>
                                        <span><SportsSoccer /></span>
                                    </div>
                                    <div className="more-rude">
                                        <span>Games court</span>
                                    </div>
                                </div>
                                :
                                null}

                                {allHousesForMore.ranch === `1` ?
                                <div className="mine-rude">
                                    <div className='less-rude'>
                                        <span><Grass /></span>
                                    </div>
                                    <div className="more-rude">
                                        <span>Ranch</span>
                                    </div>
                                </div>
                                :
                                null}

                                {allHousesForMore.farm === `1` ?
                                <div className="mine-rude">
                                    <div className='less-rude'>
                                        <span><Landscape /></span>
                                    </div>
                                    <div className="more-rude">
                                        <span>Farm</span>
                                    </div>
                                </div>
                                :
                                null}

                                {allHousesForMore.children_play === `1` ?
                                <div className="mine-rude">
                                    <div className='less-rude'>
                                        <span><ChildCare /></span>
                                    </div>
                                    <div className="more-rude">
                                        <span>Children play</span>
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
                                <h4><span className='strong-text'>Ksh {allHousesForMore.price}</span> / night</h4>
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
                                            setShowHide(true);
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
                                <p style={{ marginRight: '20px' }}>Number of guests</p>
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
                                
                                {showHide === false ?
                                    null
                                    :
                                    <div className="strike-price">
                                        <h4>Total price</h4>
                                        <div className='strike-price-top'>
                                            <p>{numberTag} guest  x Ksh {priceTag}  x {dayDay} days</p>
                                            <p>Ksh {totalPriceTag}</p>
                                        </div>
                                    </div>
                                }

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>

        {showExploreMore === false ? 
        null 
        :
        <div className='explore-nearby-services' id="all_about_noma">
            <h4>Nearby services</h4>
            <Button onClick={()=>{
                setShowExploreMore(!showExploreMore);
            }}><Close /> </Button>
            <div className='explore-nearby-services-wrapper'>
                {allHousesForMore.aqua_farm === "1" ?
                <div className='explore-nearby-services-wrapper-child'>
                    <label>Aqua farm</label>
                    <p>{allHousesForMore.aqua_farm_distance} km</p>
                </div>
                :
                null
                }

                {allHousesForMore.barber === "1" ?
                <div className='explore-nearby-services-wrapper-child'>
                    <label>Barber shop</label>
                    <p>{allHousesForMore.barber_distance} km</p>
                </div>
                :
                null
                }

                {allHousesForMore.bookshop === "1" ?
                <div className='explore-nearby-services-wrapper-child'>
                    <label>Bookshop</label>
                    <p>{allHousesForMore.bookshop_distance} km</p>
                </div>
                :
                null
                }

                {allHousesForMore.butchery === "1" ?
                <div className='explore-nearby-services-wrapper-child'>
                    <label>Butchery</label>
                    <p>{allHousesForMore.butchery_distance} km</p>
                </div>
                :
                null
                }

                {allHousesForMore.cake_baker === "1" ?
                <div className='explore-nearby-services-wrapper-child'>
                    <label>Cake baker</label>
                    <p>{allHousesForMore.cake_baker_distance} km</p>
                </div>
                :
                null
                }

                {allHousesForMore.chef === "1" ?
                <div className='explore-nearby-services-wrapper-child'>
                    <label>Chef</label>
                    <p>{allHousesForMore.chef_distance} km</p>
                </div>
                :
                null
                }

                {allHousesForMore.chemist === "1" ?
                <div className='explore-nearby-services-wrapper-child'>
                    <label>Chemist</label>
                    <p>{allHousesForMore.chemist_distance} km</p>
                </div>
                :
                null
                }

                {allHousesForMore.creamy_inn === "1" ?
                <div className='explore-nearby-services-wrapper-child'>
                    <label>Creamy inn</label>
                    <p>{allHousesForMore.creamy_inn_distance} km</p>
                </div>
                :
                null
                }

                {allHousesForMore.event_planner === "1" ?
                <div className='explore-nearby-services-wrapper-child'>
                    <label>Event planner</label>
                    <p>{allHousesForMore.event_planner_distance} km</p>
                </div>
                :
                null
                }

                {allHousesForMore.grocery_store === "1" ?
                <div className='explore-nearby-services-wrapper-child'>
                    <label>Grocery store</label>
                    <p>{allHousesForMore.grocery_store_distance} km</p>
                </div>
                :
                null
                }

                {allHousesForMore.hotel === "1" ?
                <div className='explore-nearby-services-wrapper-child'>
                    <label>Hotel</label>
                    <p>{allHousesForMore.hotel_distance} km</p>
                </div>
                :
                null
                }

                {allHousesForMore.java === "1" ?
                <div className='explore-nearby-services-wrapper-child'>
                    <label>Java</label>
                    <p>{allHousesForMore.java_distance} km</p>
                </div>
                :
                null
                }

                {allHousesForMore.kfc === "1" ?
                <div className='explore-nearby-services-wrapper-child'>
                    <label>KFC</label>
                    <p>{allHousesForMore.kfc_distance} km</p>
                </div>
                :
                null
                }

                {allHousesForMore.library === "1" ?
                <div className='explore-nearby-services-wrapper-child'>
                    <label>Library</label>
                    <p>{allHousesForMore.library_distance} km</p>
                </div>
                :
                null
                }

                {allHousesForMore.maasai_market === "1" ?
                <div className='explore-nearby-services-wrapper-child'>
                    <label>Maasai market</label>
                    <p>{allHousesForMore.maasai_market_distance} km</p>
                </div>
                :
                null
                }

                {allHousesForMore.mini_mart === "1" ?
                <div className='explore-nearby-services-wrapper-child'>
                    <label>Mini mart</label>
                    <p>{allHousesForMore.mini_mart_distance} km</p>
                </div>
                :
                null
                }

                {allHousesForMore.organic_farm === "1" ?
                <div className='explore-nearby-services-wrapper-child'>
                    <label>Organic farm</label>
                    <p>{allHousesForMore.organic_farm_distance} km</p>
                </div>
                :
                null
                }

                {allHousesForMore.petrol_station === "1" ?
                <div className='explore-nearby-services-wrapper-child'>
                    <label>Petrol station</label>
                    <p>{allHousesForMore.petrol_station_distance} km</p>
                </div>
                :
                null
                }

                {allHousesForMore.pizza_inn === "1" ?
                <div className='explore-nearby-services-wrapper-child'>
                    <label>Pizza inn</label>
                    <p>{allHousesForMore.pizza_inn_distance} km</p>
                </div>
                :
                null
                }

                {allHousesForMore.ranch === "1" ?
                <div className='explore-nearby-services-wrapper-child'>
                    <label>Ranch</label>
                    <p>{allHousesForMore.ranch_distance} km</p>
                </div>
                :
                null
                }

                {allHousesForMore.salon === "1" ?
                <div className='explore-nearby-services-wrapper-child'>
                    <label>Salon</label>
                    <p>{allHousesForMore.salon_distance} km</p>
                </div>
                :
                null
                }

                {allHousesForMore.spice_mart === "1" ?
                <div className='explore-nearby-services-wrapper-child'>
                    <label>Spice mart</label>
                    <p>{allHousesForMore.spice_mart_distance} km</p>
                </div>
                :
                null
                }

                {allHousesForMore.supermarket === "1" ?
                <div className='explore-nearby-services-wrapper-child'>
                    <label>Supermarket</label>
                    <p>{allHousesForMore.supermarket_distance} km</p>
                </div>
                :
                null
                }

                {allHousesForMore.tent_hire === "1" ?
                <div className='explore-nearby-services-wrapper-child'>
                    <label>Tent hire</label>
                    <p>{allHousesForMore.tent_hire_distance} km</p>
                </div>
                :
                null
                }
            </div>
            {outputNoma.length <= 9 ? 
            null
            :
            <Button onClick={()=>{
                setShowExploreMore(!showExploreMore);
            }}><Close /> </Button>
            }
        </div>
        }

    </div>
    }
    </>
  )
}

export default MoreDetails