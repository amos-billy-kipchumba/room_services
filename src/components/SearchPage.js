import React from 'react'
import './SearchPage.css'
import Button from '@mui/material/Button';
import SearchResult from './SearchResult';
import Mule5 from './Images/mule5.jpg'
import Mule6 from './Images/mule1.jpg'
import {useLocation} from 'react-router-dom'
import { format } from 'date-fns'

function SearchPage() {

    const room = useLocation();

    const { location, startDate, endDate, noOfGuests } = room.state;

    const formattedStartDate = format(new Date(startDate), "dd MMM yy");

    const formattedEndDate = format(new Date(endDate), "dd MMM yy");

    const range = `${formattedStartDate} --- ${formattedEndDate}`;

  return (
    <div className='search__page'>

        <div className='searchPage__info'>

            <p>300+ .Stays - {range} - for {noOfGuests}</p>
            <h1>Stays in {location}</h1>
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

            <SearchResult 
                img={Mule5}
                title="Stay at this spacious Edwardian House"
                location="Private room in center of London"
                description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . Wifi . Kitchen . Free parking . Washing Machine"
                star={4.73}
                price="$30 / night"
                total="$117 total"
            />

            <SearchResult 
                img={Mule6}
                title="Stay at Malibu club"
                location="City of Florida"
                description="10 guest . 20 bedroom . 40 bed . 2.5 shared bathrooms . Wifi . Kitchen . Free parking . Washing Machine"
                star={4.62}
                price="$30 / night"
                total="$117 total"
            />

        </div>

    </div>
  )
}

export default SearchPage