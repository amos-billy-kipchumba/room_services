import React, {useState, useEffect} from 'react'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import './Slider.css'
import axios from 'axios'
import ArrowRight from '@mui/icons-material/ArrowRight';
import BaseURL from './BaseUrl';
function Slider(props) {


   const [ArrayListSome] = useState([]);
   const [output] = useState([]);
  useEffect(()=>{
    const getThousandDetails = async () => {
      const request = await axios.get(`${BaseURL}/api/get-join-thousand-details/${props.lured}`);
  
      if(request.data.joinThousand[0].sitting_room)
      {
        ArrayListSome.push(`${BaseURL}/parts/${request.data.joinThousand[0].sitting_room}`);
      }
  
      if(request.data.joinThousand[0].dinning_room !== null)
      {
        ArrayListSome.push(`${BaseURL}/parts/${request.data.joinThousand[0].dinning_room}`);
      }
  
      if(request.data.joinThousand[0].kitchen !== null)
      {
        ArrayListSome.push(`${BaseURL}/parts/${request.data.joinThousand[0].kitchen}`);
      }
  
      if(request.data.joinThousand[0].bathroom !== null)
      {
        ArrayListSome.push(`${BaseURL}/parts/${request.data.joinThousand[0].bathroom}`);
      }
  
  
      if(request.data.joinThousand[0].bedroom !== null)
      {
        ArrayListSome.push(`${BaseURL}/parts/${request.data.joinThousand[0].bedroom}`);
      }
  
  
      if(request.data.joinThousand[0].swimming_pool !== null)
      {
        ArrayListSome.push(`${BaseURL}/parts/${request.data.joinThousand[0].swimming_pool}`);
      }
  
      if(request.data.joinThousand[0].lake !== null)
      {
        ArrayListSome.push(`${BaseURL}/parts/${request.data.joinThousand[0].lake}`);
      }
  
  
      if(request.data.joinThousand[0].beach !== null)
      {
        ArrayListSome.push(`${BaseURL}/parts/${request.data.joinThousand[0].beach}`);
      }
  
  
      if(request.data.joinThousand[0].ocean_view !== null)
      {
        ArrayListSome.push(`${BaseURL}/parts/${request.data.joinThousand[0].ocean_view}`);
      }
  
      if(request.data.joinThousand[0].balcony !== null)
      {
        ArrayListSome.push(`${BaseURL}/parts/${request.data.joinThousand[0].balcony}`);
      }
  
      if(request.data.joinThousand[0].parking !== null)
      {
        ArrayListSome.push(`${BaseURL}/parts/${request.data.joinThousand[0].parking}`);
      }
  
      if(request.data.joinThousand[0].front !== null)
      {
        ArrayListSome.push(`${BaseURL}/parts/${request.data.joinThousand[0].front}`);
      }
  
      if(request.data.joinThousand[0].right !== null)
      {
        ArrayListSome.push(`${BaseURL}/parts/${request.data.joinThousand[0].right}`);
      }
  
  
      if(request.data.joinThousand[0].left !== null)
      {
        ArrayListSome.push(`${BaseURL}/parts/${request.data.joinThousand[0].left}`);
      }
  
  
      if(request.data.joinThousand[0].back !== null)
      {
        ArrayListSome.push(`${BaseURL}/parts/${request.data.joinThousand[0].back}`);
      }
  
      if(request.data.joinThousand[0].aerial !== null)
      {
        ArrayListSome.push(`${BaseURL}/parts/${request.data.joinThousand[0].aerial}`);
      }
  
      ArrayListSome.forEach((item) => {
        if (output.indexOf(item) === -1) {
          output.push(item);
        }
      })
    }
    getThousandDetails();
  },[ArrayListSome, output, props.lured]);




  //Start of sliding arrows

  const [sliderIndex, setSliderIndex] = useState(1);

   const nextSlide = () => {
    if(sliderIndex !== output.length) {
      setSliderIndex(sliderIndex + 1);
    }
    else if (sliderIndex === output.length) {
      setSliderIndex(1);
    }
   }

   const prevSlide = () => {
    if(sliderIndex !== 1) {
      setSliderIndex(sliderIndex - 1);
    }
    else if (sliderIndex === 1) {
      setSliderIndex(output.length)
    }
   }

   const moveDot = index => {
    setSliderIndex(index);
   }


   //end of sliding arrows

  return (
    <div className='container-slider' id="myList">
      {output && output.map((object, index)=>{
        return(
          <div className={sliderIndex === index + 1 ? "slide active-anim" : "slide"} key={index}>
            <img src={object} alt="" /> 
          </div>
        );
      })}

      <span className={sliderIndex === 1 ? "vanish" : "prev"} onClick={prevSlide}><ArrowLeftIcon /></span>
      <span className={sliderIndex === output.length ? "vanish" : "next"} onClick={nextSlide}><ArrowRight /></span>
      <div className='dots'>
        {Array.from({length: output.length}).map((item, index) => (
          <div 
          className={sliderIndex === index + 1 ? "dot dot-outlined" : "dot"}
          onClick={()=> {
            moveDot(index + 1);
          }} key={index}></div>
        ))}
      </div>
    </div>
  )
}

export default Slider