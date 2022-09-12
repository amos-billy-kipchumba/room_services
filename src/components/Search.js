import React, {useState} from 'react'
import './Search.css'
import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"
import { DateRangePicker } from 'react-date-range'
import PeopleIcon from '@mui/icons-material/People'
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom'

function Search(props) {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [noOfGuests, setNoOfGuest] = useState(1);

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    const navigate = useNavigate();

    function navigateSearch (props) {
        navigate('/search-page');
    }

  return (
    <div className='search'>

        <DateRangePicker ranges={[selectionRange]} minDate={new Date()} rangeColors={['#ff7779']} onChange={handleSelect} />

        <div className='searchNumber__container'>
            <h2>Number of guests<span><PeopleIcon /></span></h2>
            <input min={1} type="number" value={noOfGuests} onChange={(e)=> setNoOfGuest(e.target.value)} />
            <Button variant='outlined' onClick={navigateSearch}>Search Rooms</Button>
            <Button variant='outlined' onClick={props.searchData}><CloseIcon /></Button>
        </div>

    </div>
  )

}

export default Search