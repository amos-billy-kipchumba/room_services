import React, {useState} from 'react'
import './Header.css'
import Logo from './Images/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';

import './Search.css'
import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"
import { DateRangePicker } from 'react-date-range'
import PeopleIcon from '@mui/icons-material/People'
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom'

function Header() {
    const [showSearch, setShowSearch] = useState(false);
    const [searchInput, setSearchInput] = useState("");

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [noOfGuests, setNoOfGuest] = useState(1);

    function showView() {
        setShowSearch(!showSearch)
    }

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

    function navigateSearch () {
            navigate('/search-page',{state:{
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfGuests: noOfGuests,
            }
            });
       
        setShowSearch(!showSearch)
    }

    const userData = JSON.parse(localStorage.getItem('user-info'));
    const userInfo = userData;

  return (
    <div className='header__container'>

        <div className='header'>

            <Link to='/'>
                <img className="header__icon" src={Logo} alt="" />
            </Link>

            <div className='header__center' onClick={showView}>
                <input type='text' placeholder='Start your search' value={searchInput} onChange={(e)=> setSearchInput(e.target.value)} name="placeholder" required />
                <SearchIcon />
            </div>

            <div className='header__right'>
                {
                userInfo ?
                <Link to='/main-host-account' className='text-decoration-none'>
                <p>Account</p>
                </Link>
                 :
                 <Link to='/become-a-host' className='text-decoration-none'>
                    <p>Become a host</p>
                 </Link>
                 }
                
                <span><LanguageIcon /></span>
                <span><ExpandMoreIcon /></span>
                <Link to='/sign-in' className='text-decoration-none'>
                    <span><Avatar /></span>
                </Link>
            </div>

        </div>
        {showSearch && <div className='search'>

            <DateRangePicker ranges={[selectionRange]} minDate={new Date()} rangeColors={['#ff7779']} onChange={handleSelect} />

            <div className='searchNumber__container'>
                <h2>Number of guests<span><PeopleIcon /></span></h2>
                <input min={1} type="number" value={noOfGuests} onChange={(e)=> setNoOfGuest(e.target.value)} />
                <Button variant='outlined' onClick={navigateSearch}>Search Rooms</Button>
                <Button variant='outlined' onClick={showView}><CloseIcon /></Button>
            </div>

        </div> }

    </div>
  )
}

export default Header