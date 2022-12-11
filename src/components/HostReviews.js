import React, {useState, useEffect} from 'react'
import './HostReviews.css'
import {useLocation, useNavigate, useParams} from 'react-router-dom'
import { Button } from '@mui/material';
function HostReviews() {
    const params = useParams();
    const paramaId = params.id;

    const reviews = useLocation();

    const [allReviews, setAllReviews] = useState([]);
    useEffect(()=>{
        const getAllSpecificReviews = () => {
            if(reviews.state.finalFinaly) {
                setAllReviews(reviews.state.finalFinaly);
            }
        }
        getAllSpecificReviews();
    },[reviews]);

    const Navigate = useNavigate();

    //Scroll to the top on load
        useEffect(()=>{
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
        },[]);
    //End of Scroll to the top on load

    let i = 0;
  return (
    <div className='host_review_container'>
        <Button onClick={()=>{
            Navigate(`/more-details/${paramaId}`);
        }}>Back</Button>

        <p>{allReviews.length} {allReviews.length > 1 ?
        'reviews'
        :
        'review'}</p>

        <div className='host_review_container_wrapper'>
        {allReviews.map((object, index)=>{
            return(
                <div 
                key={index}
                className='host_review_container_wrapper_child'><p>{i += 1}</p> <p>Rating of {object.review_rating} stars</p> <p>{object.review_comment}</p></div>
            );
        })}
        </div>
    </div>
  )
}

export default HostReviews