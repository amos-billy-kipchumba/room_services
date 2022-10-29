import React, {useState, useEffect} from 'react'
import './SearchPage.css'
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

            <p>Stays - {range} - for {noOfGuests}</p>

            {location === "" ?
            <h1>All houses</h1>
            :
            <h1>Places nearby {location}</h1>
            }

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
                            img={`${BaseURL}/uploads/${item.cover}`}
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