import React, {useState, useEffect} from 'react'
import './Home.css'
import Banner from './Banner'
import Card from './Card'
import axios from 'axios'
import HomeLoading from './HomeLoading'
import BaseURL from './BaseUrl'
import {useNavigate} from 'react-router-dom'

function Home() {
    const [houseData, setHouseData] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(()=>{
      const getHouseData = async () => {
        const data = await axios.get(`${BaseURL}/api/get-house-details`);
        if(data.data.status === 200) {
          setLoading(false);
        }
        setHouseData(data.data.house_details);
      }
      getHouseData();
    },[]);

    //Scroll to the top on load
    useEffect(()=>{
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    },[]);
    //End of Scroll to the top on load

    const Navigate = useNavigate();

    const handleNavigation =(e, id)=> {
      Navigate(`/more-details/${id}`)
    }

  return (
    <div className='home'>

      <Banner />
      {loading !== false ? 
        <HomeLoading /> 
        :
      <div className='home__section'>
      {houseData && houseData.map((data)=>{
        return (
          <Card
            src={`${BaseURL}/uploads/${data.cover}`}
            title={data.title}
            description={data.description}
            price={data.price}
            location={data.location}
            key={data.id}
            handleNavigating={(e)=> handleNavigation(e, data.id)}
          />
        );
      })}
      </div>
      }

    </div>
  )
}

export default Home
