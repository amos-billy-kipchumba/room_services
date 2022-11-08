import React, {useState, useEffect} from 'react'
import './Apartment.css'
import SearchResult from '../SearchResult';
import {useLocation} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import NoRecordYet from '../NoRecordYet';
import BaseURL from '../BaseUrl';
import { Button } from '@mui/material';
import { FaFilter } from 'react-icons/fa';
import { Close } from '@mui/icons-material';

function Apartment() {

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

    const Navigate = useNavigate();

  return (
    <div className='apartment'>
        {showFilter !== false ?
            <div className='HEYoApartment'>
                <Button>Creative heavens</Button>
                <Button>Apartment</Button>
                <Button>Bungalow</Button>
                <Button>Mansion</Button>
                <Button>Villa</Button>
                <Button>Palace</Button>
                <Button>Castle</Button>
                <Button>Split house</Button>
                <Button>tower house</Button>
                <Button>Split level</Button>
                <Button>Ranch</Button>
                <Button>i-house</Button>
                <Button>long house</Button>
                <Button>house barn</Button>
                <Button>town house</Button>
                <Button>Condominium</Button>
                <Button>Duplex</Button>
                <Button>courtyard house</Button>
                <Button>Snout house</Button>
                <Button>Octagon</Button>
                <Button>Mobile home</Button>
                <Button>Modular building</Button>
                <Button>Cottage</Button>
                <Button>Terraced house</Button>
                <Button>family homes</Button>
                <Button>gable front</Button>
                <Button onClick={()=>{
                    setShowFilter(!showFilter);
                }}>close <Close /></Button>
            </div>
            :
            null
        }

        <div className='apartment__info'>

            <Button onClick={()=>{
                Navigate(-1);
            }}>Back</Button>

            <Button onClick={handleShowFilters}>Filters <FaFilter /></Button>

            {matchSearch.length === 0 || loadStone === true ?
                <NoRecordYet />
                :
                <>
                {matchSearch && matchSearch.filter((val) => {
                    if (val.house_type === "apartment") {
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

export default Apartment