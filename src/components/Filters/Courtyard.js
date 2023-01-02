import React, {useState, useEffect, useRef} from 'react'
import './Courtyard.css'
import SearchResult from '../SearchResult';

import {useNavigate} from 'react-router-dom'
import NoRecordYet from '../NoRecordYet';
import BaseURL from '../BaseUrl';
import { Button } from '@mui/material';
import { FaFilter } from 'react-icons/fa';
import { Close } from '@mui/icons-material';
import axios from 'axios'

function Courtyard() {

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

    const [showFilter, setShowFilter] = useState(false);

    const handleShowFilters = () => {
        setShowFilter(!showFilter);
    }

    const [showReal, setShowReal] = useState(false);


    useEffect(()=>{
        function fanyaMambo() {
            for(var i=0; i < matchSearch.length; i++) {
                if(matchSearch[i].house_type === "Courtyard house") {
                    setShowReal(true);
                    break;
                }
            }
        }
        fanyaMambo();
      },[matchSearch]);

    const Navigate = useNavigate();

    //Scroll to the top on load
    useEffect(()=>{
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    },[]);
    //End of Scroll to the top on load


    //  Overlay ref
        let overlayRef = useRef();
        useEffect(()=>{
            let handler = (e) => {
                if(showFilter !== false){
                    if(!overlayRef?.current?.contains(e.target)) {
                        setShowFilter(!showFilter);
                    }
                }
            };

            document.addEventListener("mousedown", handler);

            return() => {
                document.removeEventListener("mousedown", handler);
            }
        },[showFilter]);
    // end

  return (
    <div className='courtyard'>
        {showFilter !== false ?
            <div className='courtyard_overlay'>
                <div className='heyo_before' ref={overlayRef}>
                    <p>Search filters according to house type</p>
                    <Button onClick={()=>{
                        setShowFilter(!showFilter);
                    }}>close <Close /></Button>
                    <div className='HEYocourtyard'>
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
                    </div>
                </div>
            </div>
            :
            null
        }

        <div className='courtyard__info'>

            <Button onClick={()=>{
                Navigate(-1);
            }}>Back</Button>

            <Button onClick={handleShowFilters}>Filters <FaFilter /></Button>

            {loadStone === false ?
                <>
                {matchSearch && matchSearch.filter((val) => {
                    if (val.house_type === "courtyard") {
                        return val
                    }
                    else {
                    return ""
                    }
                }).map((item,index)=>{
                    return(
                        <div onClick={()=> {
                            Navigate(`/more-details?id=${item.id}`);
                        }} key={index}>
                        <SearchResult 
                        img={`${BaseURL}/uploads/${item.cover}`}
                        title={item.title}
                        location={`${item.location}`}
                        description={`${item.max_no_of_guests} guests . ${item.number_of_bedrooms} bedrooms . ${item.number_of_beds} beds . ${item.number_of_bathtubs} bathrooms`}
                        star={4.73}
                        price={`Ksh ${item.price} / night`}
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

export default Courtyard