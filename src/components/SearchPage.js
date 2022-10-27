import React, {useState, useEffect} from 'react'
import './SearchPage.css'
import Button from '@mui/material/Button';
import SearchResult from './SearchResult';
import {useLocation} from 'react-router-dom'
import { format } from 'date-fns'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import NoRecordYet from './NoRecordYet';
import BaseURL from './BaseUrl';

function SearchPage() {

    const room = useLocation();

    const { location, startDate, endDate, noOfGuests } = room.state;

    const formattedStartDate = format(new Date(startDate), "dd MMM yy");

    const formattedEndDate = format(new Date(endDate), "dd MMM yy");

    const range = `${formattedStartDate} --- ${formattedEndDate}`;

    const [matchSearch, setMatchSearch] = useState([]);
    const [loadStone, setLoadStone] = useState(true);

    useEffect(()=>{
        const getJoinSearchDetails = async () => {
            const request = await axios.get(`${BaseURL}/api/get-join-magic-details`);
            setMatchSearch(request.data.joinSearchDetails);
            if(request.data.joinSearchDetails) {
                setLoadStone(false)
            }
        }
        getJoinSearchDetails();
    },[]);

    const [searchFul, setSearchFul] = useState("");
    const [searchTitle, setSearchTitle] = useState("");
    const [searchPrice, setSearchPrice] = useState("");

    useEffect(()=>{
        setSearchFul(location);
    },[location]);

    useEffect(()=>{
        setSearchTitle(location);
    },[location]);

    useEffect(()=>{
        setSearchPrice(location);
    },[location]);

    const Navigate = useNavigate();

  return (
    <div className='search__page'>

        <div className='searchPage__info'>

            <p>300+ .Stays - {range} - for {noOfGuests}</p>
            <h1>Stays nearby {location}</h1>
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

            {matchSearch === null || loadStone === true ?
                <NoRecordYet />
                :
                <>
                    {matchSearch && matchSearch.filter((val) => {
                        if(searchFul === "") {
                        return val
                        }
                        if (val.location.toLowerCase().includes(searchFul.toLowerCase())) {
                        return val
                        }
                        if (val.title.toLowerCase().includes(searchTitle.toLowerCase())) {
                            return val
                        }
                        if (val.price.toLowerCase().includes(searchPrice.toLowerCase())) {
                        return val
                        }
                        else {
                        return ""
                        }
                    }).map((item,index)=>{
                        return(
                            <div onClick={()=> {
                                Navigate(`/more-details/${item.id}`);
                            }} key={index}>
                            <SearchResult 
                            img={`http://127.0.0.1:8000/uploads/${item.cover}`}
                            title={item.title}
                            location={`${item.location}`}
                            description={`${item.max_no_of_guests} guests . ${item.number_of_bedrooms} bedrooms . ${item.number_of_beds} beds . ${item.number_of_bathtubs} bathrooms`}
                            star={4.73}
                            price={`$${item.price} / night`}
                            />
                            </div>
                        );
                    })}
                </>
            }
            
        </div>

    </div>
  )
}

export default SearchPage