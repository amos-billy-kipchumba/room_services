import React, {useState, useEffect} from 'react'
import './Home.css'
import Banner from './Banner'
import Card from './Card'
import axios from 'axios'

function Home() {
  const [houseData, setHouseData] = useState([]);

  const getHouseData = async () => {
    const data = await axios.get('http://127.0.0.1:8000/api/get-house-details');
    console.log(data.data);
    setHouseData(data.data.house_details);
  }

  useEffect(()=>{
    getHouseData();
  },[]);

  return (
    <div className='home'>

      <Banner />
      <div className='home__section'>
      {houseData && houseData.map((data)=>{
        return (
          <Card
            src={"http://127.0.0.1:8000/uploads/" + data.cover}
            title={data.title}
            description={data.description}
            price={data.price}
            location={data.location}
            key={data.id}
            id={data.id}
          />
        );
      })}
      </div>

    </div>
  )
}

export default Home
