import React, {useState, useEffect} from 'react'
import './MoreDetails.css'
import Button from '@mui/material/Button';
import { FaSwimmingPool, FaUpload, FaRegStar, FaRegCalendarTimes, FaBed } from 'react-icons/fa';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import {useLocation} from 'react-router-dom'
import HouseDetailsData from './HouseDetailsData';
import {Link} from 'react-router-dom'
import Family1 from './Images/family1.jpg'
import Offers from './Offers';
import Slider from './Slider';



function MoreDetails() {

    const [selectedData, setSelectedData] = useState();

    useEffect(()=> {
        setSelectedData(HouseDetailsData)
    }, []);

    const location = useLocation();
    const { id } = location.state;

    console.log(id);

    console.log(selectedData);

    const [offers, setOffers] = useState([]);

    useEffect(()=> {
        setOffers(Offers);
    },[])

    const filteredLocationOne = offers.filter(offer => {
        return offer.location === 'bedroom';
    })

    const filteredLocationTwo = offers.filter(offer => {
        return offer.location === 'Bedroom and laundry';
    })

    const filteredLocationThree = offers.filter(offer => {
        return offer.location === 'entertainment';
    })

    const filteredLocationFour = offers.filter(offer => {
        return offer.location === 'heating and cooling';
    })

    const filteredLocationFive = offers.filter(offer => {
        return offer.location === 'internet and office';
    })

    const filteredLocationSix = offers.filter(offer => {
        return offer.location === 'Kitchen and dining';
    })

    const filteredLocationSeven = offers.filter(offer => {
        return offer.location === 'Outdoor';
    })

  return (
    <div className='more__page'>

        <div className='morePage__info'>

            <Button variant="outlined">
                Type of place
            </Button>

            <Button variant="outlined">
                Price
            </Button>

            <Button variant="outlined">
                Rooms and beds
            </Button>

            <Button variant="outlined">
                More filters
            </Button>

            <div className="selected-info">
                <h2>Casa Acantilado</h2>
                <div className='map-save'>
                    <p><Link to="/" className='map-save-link'>Salobreña, Andalucía, Spain</Link></p>
                    <div className='button-share'>
                        <Button><span><FaUpload /></span>Share</Button>
                        <Button><span><FavoriteBorderIcon /></span>Save</Button>
                    </div>
                </div>

                <div className="setSliderRight">
                <Slider />
                </div>

                <div className='hosted-by'>
                    <div className='hosted-by-left-main'>
                        <div className='hosted-by-left'>
                            <div className='hosted-by-left-one'>
                                <h2>Entire villa hosted by Bookiply</h2>
                                <p>6 guests . 3 bedrooms . 4 beds . 3 baths</p>
                            </div>
                            <div className='hosted-by-left-two'>
                                <img src={Family1} alt="" />
                            </div>
                        </div>

                        <div className='dive-right'>
                            <div className='dive-right-one'><FaSwimmingPool /></div>
                            <div className='dive-right-two'>
                                <h2>Dive right in</h2>
                                <p>This is one of the few places in the area with a pool.</p>
                            </div>
                        </div>

                        <div className='dive-right'>
                            <div className='dive-right-one'><FaRegStar /></div>
                            <div className='dive-right-two'>
                                <h2>Experienced host</h2>
                                <p>Bookiply has 650 reviews for other places.</p>
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
                                <p>Number of Bedrooms: 3</p>
                                <p>Number of Beds: 7</p>
                                <p>King-size bed: 2</p>
                                <p>Master Bedroom: 1</p>
                            </div>
                        </div>

                        <div className='dive-right'>
                            <div className='dive-right-two'>
                                <h2>What this place offers</h2>
                                <h4>Bedroom</h4>
                                {filteredLocationOne && filteredLocationOne.map((object, index)=>{
                                    return(
                                            <div key={object.id} style={{ display: 'flex', flexDirection: 'column' }}>
                                                <p style={{ alignItems: 'center', marginTop: '10px', display: 'flex' }}><span style={{ marginRight: '10px', color: 'black', alignItems: 'center' }}>{object.facility}</span> <span style={{ alignItems: 'center' }}>{object.name}</span></p>
                                                <p>{object.details}</p>
                                            </div>
                                    );
                                })}

                                <h4 style={{ marginTop: '10px' }}>Bedroom and laundry</h4>
                                {filteredLocationTwo && filteredLocationTwo.map((object, index)=>{
                                    return(
                                            <div key={object.id} className="mine-rude">
                                                <div className='less-rude'>
                                                    <span>{object.facility}</span>
                                                </div>
                                                <div className="more-rude">
                                                    <span>{object.name}</span>
                                                    <span>{object.details ? `: ${object.details}` : null}</span>
                                                </div>
                                            </div>
                                    );
                                })}

                                <h4 style={{ marginTop: '10px' }}>Entertainment</h4>
                                {filteredLocationThree && filteredLocationThree.map((object, index)=>{
                                    return(
                                            <div key={object.id} className="mine-rude">
                                                <div className='less-rude'>
                                                    <span>{object.facility}</span>
                                                </div>
                                                <div className="more-rude">
                                                    <span>{object.name}</span>
                                                    <span>{object.details ? `: ${object.details}` : null}</span>
                                                </div>
                                            </div>
                                    );
                                })}

                                <h4 style={{ marginTop: '10px' }}>Heating and cooling</h4>
                                {filteredLocationFour && filteredLocationFour.map((object, index)=>{
                                    return(
                                            <div key={object.id} className="mine-rude">
                                                <div className='less-rude'>
                                                    <span>{object.facility}</span>
                                                </div>
                                                <div className="more-rude">
                                                    <span>{object.name}</span>
                                                    <span>{object.details ? `: ${object.details}` : null}</span>
                                                </div>
                                            </div>
                                    );
                                })}

                                <h4 style={{ marginTop: '10px' }}>Internet and office</h4>
                                {filteredLocationFive && filteredLocationFive.map((object, index)=>{
                                    return(
                                            <div key={object.id} className="mine-rude">
                                                <div className='less-rude'>
                                                    <span>{object.facility}</span>
                                                </div>
                                                <div className="more-rude">
                                                    <span>{object.name}</span>
                                                    <span>{object.details ? `: ${object.details}` : null}</span>
                                                </div>
                                            </div>
                                    );
                                })}

                                <h4 style={{ marginTop: '10px' }}>Kitchen and dining</h4>
                                {filteredLocationSix && filteredLocationSix.map((object, index)=>{
                                    return(
                                            <div key={object.id} className="mine-rude">
                                                <div className='less-rude'>
                                                    <span>{object.facility}</span>
                                                </div>
                                                <div className="more-rude">
                                                    <span>{object.name}</span>
                                                    <span>{object.details ? `: ${object.details}` : null}</span>
                                                </div>
                                            </div>
                                    );
                                })}

                                <h4 style={{ marginTop: '10px' }}>Outdoor</h4>
                                {filteredLocationSeven && filteredLocationSeven.map((object, index)=>{
                                    return(
                                            <div key={object.id} className="mine-rude">
                                                <div className='less-rude'>
                                                    <span>{object.facility}</span>
                                                </div>
                                                <div className="more-rude">
                                                    <span>{object.name}</span>
                                                    <span>{object.details ? `: ${object.details}` : null}</span>
                                                </div>
                                            </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='hosted-by-right'>
                        <div className="right-host-form">
                            <div className='right-host-form-inner'>
                                <h4><span className='strike-text'>$1,204</span> | <span className='strong-text'>$519</span> night</h4>
                                <div className="striker-date">
                                    <div className='strike-one'>
                                        <label>Check in</label>
                                        <input type="date" name="start-date" />
                                    </div>
                                    <div className='strike-two'>
                                        <label>Check out</label>
                                        <input type="date" name="end-date" />
                                    </div>
                                </div>

                                <div className="strike-number-guests">
                                    <input type="number" name='number-of-guests' placeholder='No of guests' />
                                </div>

                                <Button>Reserve</Button>
                                <p>You won't be charged yet</p>

                                <div className="strike-price">
                                    <h4>Total price</h4>
                                    <div className='strike-price-top'>
                                        <p>1 guest x $520 x 5 nights</p>
                                        <p>$2,600</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default MoreDetails