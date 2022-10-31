import React, {useState, useEffect} from 'react'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import './Slider.css'
import ArrowRight from '@mui/icons-material/ArrowRight';
import BaseURL from './BaseUrl';
function Slider(props) {


   const [ArrayListSome] = useState([]);
   const [output] = useState([]);

  useEffect(()=>{
    const getThousandDetails = async () => {

      if(props.allHousesForMore) {
        if(props.allHousesForMore.sitting_room !== null)
        {
          ArrayListSome.push(`${BaseURL}/parts/${props.allHousesForMore.sitting_room}`);
        }
    
        if(props.allHousesForMore.dinning_room !== null)
        {
          ArrayListSome.push(`${BaseURL}/parts/${props.allHousesForMore.dinning_room}`);
        }
    
        if(props.allHousesForMore.kitchen !== null)
        {
          ArrayListSome.push(`${BaseURL}/parts/${props.allHousesForMore.kitchen}`);
        }
    
        if(props.allHousesForMore.bathroom !== null)
        {
          ArrayListSome.push(`${BaseURL}/parts/${props.allHousesForMore.bathroom}`);
        }
    
    
        if(props.allHousesForMore.bedroom !== null)
        {
          ArrayListSome.push(`${BaseURL}/parts/${props.allHousesForMore.bedroom}`);
        }
    
    
        if(props.allHousesForMore.swimming_pool !== null)
        {
          ArrayListSome.push(`${BaseURL}/parts/${props.allHousesForMore.swimming_pool}`);
        }
    
        if(props.allHousesForMore.lake !== null)
        {
          ArrayListSome.push(`${BaseURL}/parts/${props.allHousesForMore.lake}`);
        }
    
    
        if(props.allHousesForMore.beach !== null)
        {
          ArrayListSome.push(`${BaseURL}/parts/${props.allHousesForMore.beach}`);
        }
    
    
        if(props.allHousesForMore.ocean_view !== null)
        {
          ArrayListSome.push(`${BaseURL}/parts/${props.allHousesForMore.ocean_view}`);
        }
    
        if(props.allHousesForMore.balcony !== null)
        {
          ArrayListSome.push(`${BaseURL}/parts/${props.allHousesForMore.balcony}`);
        }
    
        if(props.allHousesForMore.parking !== null)
        {
          ArrayListSome.push(`${BaseURL}/parts/${props.allHousesForMore.parking}`);
        }
    
        if(props.allHousesForMore.front !== null)
        {
          ArrayListSome.push(`${BaseURL}/parts/${props.allHousesForMore.front}`);
        }
    
        if(props.allHousesForMore.right !== null)
        {
          ArrayListSome.push(`${BaseURL}/parts/${props.allHousesForMore.right}`);
        }
    
    
        if(props.allHousesForMore.left !== null)
        {
          ArrayListSome.push(`${BaseURL}/parts/${props.allHousesForMore.left}`);
        }
    
    
        if(props.allHousesForMore.back !== null)
        {
          ArrayListSome.push(`${BaseURL}/parts/${props.allHousesForMore.back}`);
        }
    
        if(props.allHousesForMore.aerial !== null)
        {
          ArrayListSome.push(`${BaseURL}/parts/${props.allHousesForMore.aerial}`);
        }
    
        ArrayListSome.forEach((item) => {
          if (output.indexOf(item) === -1) {
            output.push(item);
          }
        })
      }

    }
    getThousandDetails();
  },[ArrayListSome, output, props.lured, props]);


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