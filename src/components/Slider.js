import React, {useState, useEffect} from 'react'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ImageDetails from './HouseImages';
import './Slider.css'
import ArrowRight from '@mui/icons-material/ArrowRight';
function Slider() {
   const [imageData, setImageData] = useState([]);

   useEffect(()=>{
    setImageData(ImageDetails);
   },[]);

   const [slideIndex, setSlideIndex] = useState(1);

   const nextSlide = () => {
    if(slideIndex !== imageData.length) {
        setSlideIndex(slideIndex + 1)
    }
    else if (slideIndex === imageData.length) {
        setSlideIndex(1)
    }
   }

   const prevSlide = () => {
    if(slideIndex !== 1) {
        setSlideIndex(slideIndex - 1)
    }
    else if(slideIndex === 1){
        setSlideIndex(imageData.length)
    }
   }

   const moveDot = index => {
    setSlideIndex(index)
   }

  return (
    <div className='container-slider'>
      {imageData && imageData.map((obj, index)=> {
        return(
            <div className={slideIndex === index + 1 ? "slide active-anim" : "slide"} key={obj.id} >
                <img src={obj.img} alt="" /> 
            </div>
        );
      })}

      <span className="prev" onClick={prevSlide}><ArrowLeftIcon /></span>
      <span className="next" onClick={nextSlide}><ArrowRight /></span>

      <div className='dots'>
        {Array.from({length: imageData.length}).map((item, index) => (
            <div className={slideIndex === index + 1 ? "dot-outlined" : "dot"} onClick={()=> moveDot(index + 1)}></div>
        ))}
      </div>
    </div>
  )
}

export default Slider