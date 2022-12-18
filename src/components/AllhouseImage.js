import React, {useState, useEffect} from 'react'
import './AllHouseImage.css'
import {useNavigate} from 'react-router-dom'
import { Button } from '@mui/material';
import BaseURL from './BaseUrl';
import {useSearchParams} from 'react-router-dom'
import axios from 'axios'
function AllhouseImage() {

    const [searchParams] = useSearchParams();
    
    var paramaId = searchParams.get('id');

    var title = searchParams.get('name');

    const Navigate = useNavigate();

    const [thousand, setThousand] = useState([]);
    const [lebo, setLebo] = useState(null);
    const [lebo2, setLebo2] = useState(null);
    const [lebo3, setLebo3] = useState(null);
    const [lebo4, setLebo4] = useState(null);
    const [lebo5, setLebo5] = useState(null);
    const [lebo6, setLebo6] = useState(null);
    const [lebo7, setLebo7] = useState(null);
    const [lebo8, setLebo8] = useState(null);
    const [lebo9, setLebo9] = useState(null);
    const [lebo10, setLebo10] = useState(null);
    const [lebo11, setLebo11] = useState(null);
    const [lebo12, setLebo12] = useState(null);
    const [lebo13, setLebo13] = useState(null);
    const [lebo14, setLebo14] = useState(null);
    const [lebo15, setLebo15] = useState(null);
    const [lebo16, setLebo16] = useState(null);
 
   useEffect(()=>{
    const getThousandDetails = async () => {
        const userPin = paramaId;
        const request = await axios.get(`${BaseURL}/api/get-all-house-more-details/${userPin}`);
        if(request.data.status) {
        setThousand(request.data.bookingInfoForHost[0]);
    
        setLebo(`${BaseURL}/parts/${request.data.bookingInfoForHost[0].sitting_room}`);
       
    
        setLebo2(`${BaseURL}/parts/${request.data.bookingInfoForHost[0].dinning_room}`);
       
    
        setLebo3(`${BaseURL}/parts/${request.data.bookingInfoForHost[0].kitchen}`);
       
    
        setLebo4(`${BaseURL}/parts/${request.data.bookingInfoForHost[0].bathroom}`);
       
    
        setLebo5(`${BaseURL}/parts/${request.data.bookingInfoForHost[0].bedroom}`);
        
    
        setLebo6(`${BaseURL}/parts/${request.data.bookingInfoForHost[0].swimming_pool}`);
        
    
        setLebo7(`${BaseURL}/parts/${request.data.bookingInfoForHost[0].lake}`);
    
        setLebo8(`${BaseURL}/parts/${request.data.bookingInfoForHost[0].beach}`);
    
        setLebo9(`${BaseURL}/parts/${request.data.bookingInfoForHost[0].ocean_view}`);
    
        setLebo10(`${BaseURL}/parts/${request.data.bookingInfoForHost[0].balcony}`);
      
    
        setLebo11(`${BaseURL}/parts/${request.data.bookingInfoForHost[0].parking}`);
        
    
        setLebo12(`${BaseURL}/parts/${request.data.bookingInfoForHost[0].front}`);
        
    
        setLebo13(`${BaseURL}/parts/${request.data.bookingInfoForHost[0].right}`);
       
    
        setLebo14(`${BaseURL}/parts/${request.data.bookingInfoForHost[0].left}`);
       
    
        setLebo15(`${BaseURL}/parts/${request.data.bookingInfoForHost[0].back}`);
       
    
        setLebo16(`${BaseURL}/parts/${request.data.bookingInfoForHost[0].aerial}`);
        }
        
      }
     getThousandDetails();
   },[paramaId]);

    //Scroll to the top on load
    useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    },[]);
    //End of Scroll to the top on load
  return (
    <div className='AllHousesAmerica'>
        <Button onClick={()=> {
            Navigate(`/more-details?name=${title}&id=${thousand.house_id}`,{state:{
                paramaId: thousand.house_id,
            }
            });
        }}>Back</Button>
        <p>{title}</p>
        <div className='ParentAllHouses'>
        {thousand.sitting_room !== null ?
            <div className='ChildAllHouses'>
                <img src={lebo} alt="" />
                <p>Sitting room</p>
            </div>
            :
            null
        }

        {thousand.dinning_room !== null ?
            <div className='ChildAllHouses'>
                <img src={lebo2} alt="" />
                <p>Dining room</p>
            </div>
            :
            null
        }

        {thousand.kitchen !== null ?
            <div className='ChildAllHouses'>
                <img src={lebo3} alt="" />
                <p>Kitchen</p>
            </div>
            :
            null
        }

        {thousand.bathroom !== null ?
            <div className='ChildAllHouses'>
                <img src={lebo4} alt="" />
                <p>Bathroom</p>
            </div>
            :
            null
        }

        {thousand.bedroom !== null ?
            <div className='ChildAllHouses'>
                <img src={lebo5} alt="" />
                <p>Bedroom</p>
            </div>
            :
            null
        }

        {thousand.swimming_pool !== null ?
            <div className='ChildAllHouses'>
                <img src={lebo6} alt="" />
                <p>Swimming pool</p>
            </div>
            :
            null
        }

        {thousand.lake !== null ?
            <div className='ChildAllHouses'>
                <img src={lebo7} alt="" />
                <p>Lake</p>
            </div>
            :
            null
        }

        {thousand.beach !== null ?
            <div className='ChildAllHouses'>
                <img src={lebo8} alt="" />
                <p>Beach</p>
            </div>
            :
            null
        }

        {thousand.ocean_view !== null ?
            <div className='ChildAllHouses'>
                <img src={lebo9} alt="" />
                <p>Ocean view</p>
            </div>
            :
            null
        }

        {thousand.balcony !== null ?
            <div className='ChildAllHouses'>
                <img src={lebo10} alt="" />
                <p>Balcony</p>
            </div>
            :
            null
        }

        {thousand.parking !== null ?
            <div className='ChildAllHouses'>
                <img src={lebo11} alt="" />
                <p>Parking</p>
            </div>
            :
            null
        }

        {thousand.front !== null ?
            <div className='ChildAllHouses'>
                <img src={lebo12} alt="" />
                <p>Front</p>
            </div>
            :
            null
        }

        {thousand.right !== null ?
            <div className='ChildAllHouses'>
                <img src={lebo13} alt="" />
                <p>Right view</p>
            </div>
            :
            null
        }

        {thousand.left !== null ?
            <div className='ChildAllHouses'>
                <img src={lebo14} alt="" />
                <p>Left view</p>
            </div>
            :
            null
        }

        {thousand.back !== null ?
            <div className='ChildAllHouses'>
                <img src={lebo15} alt="" />
                <p>Back view</p>
            </div>
            :
            null
        }

        {thousand.aerial !== null ?
            <div className='ChildAllHouses'>
                <img src={lebo16} alt="" />
                <p>Aerial view</p>
            </div>
            :
            null
        }
        </div>
    </div>
  )
}

export default AllhouseImage