import React, {useState, useEffect} from 'react'
import './HostReviews.css'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { Button } from '@mui/material';
import { Face } from '@mui/icons-material'
import { StarBorderOutlined } from '@mui/icons-material';
import BaseURL from './BaseUrl';
import axios from 'axios'
function HostReviews() {


    const [searchParams] = useSearchParams();
    
    var paramaId = searchParams.get('id');

    var title = searchParams.get('title');

    const Navigate = useNavigate();

    //Scroll to the top on load
        useEffect(()=>{
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
        },[]);
    //End of Scroll to the top on load


    var [finalFinaly, setFinalyFinaly] = useState([]);

    useEffect(()=>{
        const getAllSpecificReviews = async () => {
            let url = `${BaseURL}/api/get-all-specific-review/${paramaId}`;
            const request = await axios.get(url);
            if(request.data.status === 200) {

                setFinalyFinaly(request.data.review_page);
    
            }

        }
        getAllSpecificReviews();
    },[paramaId]);
  return (
    <div className='host_review_container'>
        <Button onClick={()=>{
            Navigate(`/more-details?name=${title}&id=${paramaId}`,{state:{
                paramaId: paramaId,
            }
            });
        }}>Back</Button>

        <p>{finalFinaly.length} {finalFinaly.length > 1 ?
        'reviews'
        :
        'review'}</p>

        <div className='host_review_container_wrapper'>
        {finalFinaly.length > 0 ?
        <>
        {finalFinaly.map((object, index)=>{
            return(
                <div 
                key={index}
                className='host_review_container_wrapper_child'>
                <img src={`${BaseURL}/users/${object.image}`} alt='review' /> <p>{object.first_name}</p> <p>Rating of {object.review_rating} stars <StarBorderOutlined style={{ margin: 'auto 5px' }} /> </p> <p>{object.review_comment}</p>
                </div>
            );
        })}
        </>
        :
        <p>No review yet <Face style={{ marginLeft: '5px' }} /> </p>
        }
        </div>
    </div>
  )
}

export default HostReviews