import React, {useState, useEffect} from 'react'
import './SearchPage.css'
import SearchResult from './SearchResult';
import {useLocation} from 'react-router-dom'
import { format } from 'date-fns'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import NoRecordYet from './NoRecordYet';
import BaseURL from './BaseUrl';
import { Button } from '@mui/material';
import { FaFilter } from 'react-icons/fa';
import { Close } from '@mui/icons-material';

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

    const [showFilter, setShowFilter] = useState(false);

    const handleShowFilters = () => {
        setShowFilter(!showFilter);
    }

    useEffect(()=>{
        setSearchPrice(location);
    },[location]);

    const Navigate = useNavigate();

  return (
    <div className='search__page'>
        {showFilter !== false ?
            <div className='HEYo'>
                <Button onClick={()=>{
                    Navigate(`/creative-heaven`,{state:{
                        matchSearch
                    }
                    })
                }}>Creative heavens</Button>
                <Button onClick={()=>{
                    Navigate(`/apartments`,{state:{
                        matchSearch
                    }
                    })
                }}>Apartment</Button>
                <Button onClick={()=>{
                    Navigate(`/bungalow`,{state:{
                        matchSearch
                    }
                    })
                }}>Bungalow</Button>
                <Button onClick={()=>{
                    Navigate(`/mansion`,{state:{
                        matchSearch
                    }
                    })
                }}>Mansion</Button>
                <Button onClick={()=>{
                    Navigate(`/villa`,{state:{
                        matchSearch
                    }
                    })
                }}>Villa</Button>
                <Button onClick={()=>{
                    Navigate(`/palace`,{state:{
                        matchSearch
                    }
                    })
                }}>Palace</Button>
                <Button onClick={()=>{
                    Navigate(`/castle`,{state:{
                        matchSearch
                    }
                    })
                }}>Castle</Button>
                <Button onClick={()=>{
                    Navigate(`/split-house`,{state:{
                        matchSearch
                    }
                    })
                }}>Split house</Button>
                <Button onClick={()=>{
                    Navigate(`/tower`,{state:{
                        matchSearch
                    }
                    })
                }}>tower house</Button>
                <Button onClick={()=>{
                    Navigate(`/split-level`,{state:{
                        matchSearch
                    }
                    })
                }}>Split level</Button>
                <Button onClick={()=>{
                    Navigate(`/ranch`,{state:{
                        matchSearch
                    }
                    })
                }}>Ranch</Button>
                <Button onClick={()=>{
                    Navigate(`/i-house`,{state:{
                        matchSearch
                    }
                    })
                }}>i-house</Button>
                <Button onClick={()=>{
                    Navigate(`/long-house`,{state:{
                        matchSearch
                    }
                    })
                }}>long house</Button>
                <Button onClick={()=>{
                    Navigate(`/house-barn`,{state:{
                        matchSearch
                    }
                    })
                }}>house barn</Button>
                <Button onClick={()=>{
                    Navigate(`/town-house`,{state:{
                        matchSearch
                    }
                    })
                }}>town house</Button>
                <Button onClick={()=>{
                    Navigate(`/condominium`,{state:{
                        matchSearch
                    }
                    })
                }}>Condominium</Button>
                <Button onClick={()=>{
                    Navigate(`/duplex`,{state:{
                        matchSearch
                    }
                    })
                }}>Duplex</Button>
                <Button onClick={()=>{
                    Navigate(`/courtyard`,{state:{
                        matchSearch
                    }
                    })
                }}>courtyard house</Button>
                <Button onClick={()=>{
                    Navigate(`/snout-house`,{state:{
                        matchSearch
                    }
                    })
                }}>Snout house</Button>
                <Button onClick={()=>{
                    Navigate(`/octagon`,{state:{
                        matchSearch
                    }
                    })
                }}>Octagon</Button>
                <Button onClick={()=>{
                    Navigate(`/mobile-home`,{state:{
                        matchSearch
                    }
                    })
                }}>Mobile home</Button>
                <Button onClick={()=>{
                    Navigate(`/modular-building`,{state:{
                        matchSearch
                    }
                    })
                }}>Modular building</Button>
                <Button onClick={()=>{
                    Navigate(`/cottage`,{state:{
                        matchSearch
                    }
                    })
                }}>Cottage</Button>
                <Button onClick={()=>{
                    Navigate(`/terraced-house`,{state:{
                        matchSearch
                    }
                    })
                }}>Terraced house</Button>
                <Button onClick={()=>{
                    Navigate(`/single-family-homes`,{state:{
                        matchSearch
                    }
                    })
                }}>family homes</Button>
                <Button onClick={()=>{
                    Navigate(`/gable-front`,{state:{
                        matchSearch
                    }
                    })
                }}>gable front</Button>
                <Button onClick={()=>{
                    setShowFilter(!showFilter);
                }}>close <Close /></Button>
            </div>
            :
            null
        }

        <div className='searchPage__info'>

            <p>Stays - {range} - for {noOfGuests}</p>

            {location === "" ?
            <h1>All houses</h1>
            :
            <h1>Places nearby {location}</h1>
            }


            <Button onClick={handleShowFilters}>Filters <FaFilter /></Button>

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
                            price={`Ksh${item.price} / night`}
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