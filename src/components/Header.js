import React, {useEffect, useState, useRef} from 'react'
import './Header.css'
import Logo from './Images/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import Close from '@mui/icons-material/Close';
import './Search.css'
import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"
import { DateRangePicker } from 'react-date-range'
import PeopleIcon from '@mui/icons-material/People'
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom'
import BaseURL from './BaseUrl';
import { Cottage } from '@mui/icons-material';

function Header() {
    const [showSearch, setShowSearch] = useState(false);
    const [searchInput, setSearchInput] = useState("");

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
    const [magicProfile, setMagicProfile] = useState(null);
    const [magicLink, setMagicLink] = useState(null);

    const [loginDetails, setLoginDetails] = useState(null);
    useEffect(()=>{
        if(userData){
            setLoginDetails(userData.data.user_type)
            setMagicProfile(`${BaseURL}/users/${userData.data.image}`);
            if(userData.data.user_type === 1) {
                setMagicLink("/main-host-account");
            }
            if(userData.data.user_type === 2) {
                setMagicLink("/customer-main-account");
            }
            if(userData.data.user_type === 3) {
                setMagicLink("/admin-dashboard");
            }
        }
    },[loginDetails, userData, magicProfile]);

    const [showLogOut, setShowLogOut] = useState(false);
    

    let menuRef = useRef();

    useEffect(()=>{
        let handler = (e) => {
            if(!menuRef?.current?.contains(e.target)) {
                setShowLogOut(false);
            }
        };

        document.addEventListener("mousedown", handler);

        return() => {
            document.removeEventListener("mousedown", handler);
        }
    },[]);

    const handleNowLogOut = () => {
        localStorage.clear();
        navigate('/');
    }

    let searchRef = useRef();
    useEffect(()=>{
        let handler = (e) => {
            if(!searchRef?.current?.contains(e.target)) {
                setShowSearch(false);
            }
        };

        document.addEventListener("mousedown", handler);

        return() => {
            document.removeEventListener("mousedown", handler);
        }
    },[showSearch]);

    const handleHomeNavigation = () => {
        navigate('/');
    }
  return (
    <div className={showSearch === false ? 'header__container' : 'header__scrollable'}>

        <div className='header'>

            <img className="header__icon"
             src={Logo}
            alt=""
            onClick={handleHomeNavigation} />

            <div className={showSearch === false ? 'header__center_realer header__center' : 'header__center'} onClick={()=> setShowSearch(!showSearch)}>
                <input type='text' placeholder='Start your search' value={searchInput} onChange={(e)=> setSearchInput(e.target.value)} name="placeholder" required />
                <SearchIcon />
            </div>

            <div className='header__right'>
                <span className='live-it'>
                    <Link to={{ 
                        pathname: "become-a-host",
                    }} className='text-decoration-none'>
                    Become a host
                    </Link>
                </span>
                <span className="languageSpan"><Cottage /> </span>
                {showLogOut === false ?
                    <span onClick={()=> {
                        setShowLogOut(!showLogOut)
                    }}><ExpandMoreIcon /></span>
                    :
                    <span onClick={()=> {
                        setShowLogOut(!showLogOut)
                    }}><ExpandMoreIcon /></span>
                }
                <span>
                {userData !== null ?
                <Link to={{ 
                    pathname: magicLink,
                 }} className='text-decoration-none'>
                        <img src={magicProfile} alt="" className="magicImageSource" />
                </Link>
                :
                <Link to='/sign-in' className='text-decoration-none'>
                    <span><Avatar /></span>
                </Link>
                }
                </span>
            </div>

                {showLogOut !== false ?
                    <div className='header__right-float' ref={menuRef}>
                        <div className='magicFloatingHeader'>
                            {userData ? 
                                null
                                :
                                <>
                                <span onClick={()=>{
                                    navigate('/sign-in')
                                }}>Create client account</span>
                                <span onClick={()=>{
                                    navigate('/become-a-host-register');
                                }}>Create host account</span>
                                <span onClick={()=>{
                                    navigate('/login-user')
                                }}>Sign in</span>
                                </>
                            }
                            <Button onClick={handleNowLogOut}>Log out</Button>
                            <Button onClick={()=> {
                                setShowLogOut(!showLogOut)
                            }}><Close /></Button>
                        </div>
                    </div>
                    :
                    null
                }
        </div>
        {showSearch && <div className='search' ref={searchRef}>

            <DateRangePicker ranges={[selectionRange]}
             minDate={new Date()} 
             rangeColors={['#F78513']}
              onChange={handleSelect} className="sumbufDate" />

            <div className='searchNumber__container'>
                <h2>Number of guests<span><PeopleIcon /></span></h2>
                <input min={1} type="number" value={noOfGuests} onChange={(e)=> setNoOfGuest(e.target.value)} />
                <Button variant='outlined' onClick={navigateSearch}>Search Rooms</Button>
                <Button variant='outlined' onClick={()=>  setShowSearch(!showSearch)}><CloseIcon /></Button>
            </div>

        </div> }

    </div>
  )
}

export default Header