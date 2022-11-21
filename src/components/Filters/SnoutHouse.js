import React, {useState, useEffect} from 'react'
import './SnoutHouse.css'
import SearchResult from '../SearchResult';
import {useLocation} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import NoRecordYet from '../NoRecordYet';
import BaseURL from '../BaseUrl';
import { Button } from '@mui/material';
import { FaFilter } from 'react-icons/fa';
import { Close } from '@mui/icons-material';

function SnoutHouse() {

    const room = useLocation();

    const [matchSearch, setMatchSearch] = useState([]);
    const [loadStone, setLoadStone] = useState(true);

    useEffect(()=>{
        const getJoinSearchDetails = async () => {
            if(room.state.matchSearch) {
                setLoadStone(false)
                setMatchSearch(room.state.matchSearch);
            }
        }
        getJoinSearchDetails();
    },[room]);

    const [showFilter, setShowFilter] = useState(false);

    const handleShowFilters = () => {
        setShowFilter(!showFilter);
    }

    const [showReal, setShowReal] = useState(false);


    useEffect(()=>{
        function fanyaMambo() {
            for(var i=0; i < matchSearch.length; i++) {
                if(matchSearch[i].house_type === "snout house") {
                    setShowReal(true);
                    break;
                }
            }
        }
        fanyaMambo();
      },[matchSearch]);

    const Navigate = useNavigate();

  return (
    <div className='snout-house'>
        {showFilter !== false ?
            <div className='HEYosnout-house'>
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
                    Navigate(`/tower`,{state:{
                        matchSearch
                    }
                    })
                }}>tower house</Button>
                <Button onClick={()=>{
                    Navigate(`/split-house`,{state:{
                        matchSearch
                    }
                    })
                }}>split house</Button>
                <Button onClick={()=>{
                    Navigate(`/tower`,{state:{
                        matchSearch
                    }
                    })
                }}>Tower house</Button>
                <Button onClick={()=>{
                    Navigate(`/split-level`,{state:{
                        matchSearch
                    }
                    })
                }}>split-level house</Button>
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
                }}>Courtyard house</Button>
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

        <div className='snout-house__info'>

            <Button onClick={()=>{
                Navigate(-1);
            }}>Back</Button>

            <Button onClick={handleShowFilters}>Filters <FaFilter /></Button>

            {loadStone === false ?
                <>
                {matchSearch && matchSearch.filter((val) => {
                    if (val.house_type === "snout-house") {
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
                })
                }
                </>
                :
                <NoRecordYet />
            }
            
        </div>

        {showReal === false ?
            <NoRecordYet />
            :
            null
        }
    </div>
  )
}

export default SnoutHouse