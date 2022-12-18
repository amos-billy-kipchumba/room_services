import React, {useState, useEffect, useRef} from 'react'
import './EditFourth.css'
import Add from '@mui/icons-material/Add';
import { FaPen, FaTimes } from 'react-icons/fa';
import {Link} from 'react-router-dom'
import axios from 'axios'
import { Button } from '@mui/material';
import {useNavigate, useSearchParams} from 'react-router-dom';
import BaseURL from '../../BaseUrl';
import swal from 'sweetalert';
import { MoreHoriz } from '@mui/icons-material';
function EditFourth() {
    const [searchParams] = useSearchParams();
    
    var paramaId = searchParams.get('id');

    var title = searchParams.get('name');

  const userData = JSON.parse(localStorage.getItem('user-info'));
  const [userId] = useState(userData.data.id);
  const [imageToBe, setImageToBe] = useState(null);
  const [editImage, setEditImage] = useState(null);
  const [editImage1, setEditImage1] = useState(null);
  const [editImage2, setEditImage2] = useState(null);
  const [editImage3, setEditImage3] = useState(null);
  const [editImage4, setEditImage4] = useState(null);
  const [editImage5, setEditImage5] = useState(null);
  const [editImage6, setEditImage6] = useState(null);
  const [editImage7, setEditImage7] = useState(null);
  const [editImage8, setEditImage8] = useState(null);
  const [editImage9, setEditImage9] = useState(null);
  const [editImage10, setEditImage10] = useState(null);
  const [editImage11, setEditImage11] = useState(null);
  const [editImage12, setEditImage12] = useState(null);
  const [editImage13, setEditImage13] = useState(null);
  const [editImage14, setEditImage14] = useState(null);
  const [editImage15, setEditImage15] = useState(null);

  const [image, setImage] = useState();
  const [preview, setPreview] = useState();

  useEffect(()=>{
    if(image !== null)
    {
        setEditImage(image);
    }
  },[image]);

  const [image2, setImage2] = useState();
  const [preview2, setPreview2] = useState();

  useEffect(()=>{
    if(image2 !== null)
    {
        setEditImage1(image2);
    }
  },[image2]);

  const [image3, setImage3] = useState();
  const [preview3, setPreview3] = useState();

  useEffect(()=>{
    if(image3 !== null)
    {
        setEditImage2(image3);
    }
  },[image3]);

  const [image4, setImage4] = useState();
  const [preview4, setPreview4] = useState();

  useEffect(()=>{
    if(image4 !== null)
    {
        setEditImage3(image4);
    }
  },[image4]);

  const [image5, setImage5] = useState();
  const [preview5, setPreview5] = useState();

  useEffect(()=>{
    if(image5 !== null)
    {
        setEditImage4(image5);
    }
  },[image5]);

  const [image6, setImage6] = useState();
  const [preview6, setPreview6] = useState();

  useEffect(()=>{
    if(image6 !== null)
    {
        setEditImage5(image6);
    }
  },[image6]);

  const [image7, setImage7] = useState();
  const [preview7, setPreview7] = useState();

  useEffect(()=>{
    if(image7 !== null)
    {
        setEditImage6(image7);
    }
  },[image7]);

  const [image8, setImage8] = useState();
  const [preview8, setPreview8] = useState();

  useEffect(()=>{
    if(image8 !== null)
    {
        setEditImage7(image8);
    }
  },[image8]);

  const [image9, setImage9] = useState();
  const [preview9, setPreview9] = useState();

  useEffect(()=>{
    if(image9 !== null)
    {
        setEditImage8(image9);
    }
  },[image9]);

  const [image10, setImage10] = useState();
  const [preview10, setPreview10] = useState();

  useEffect(()=>{
    if(image10 !== null)
    {
        setEditImage9(image10);
    }
  },[image10]);

  const [image11, setImage11] = useState();
  const [preview11, setPreview11] = useState();

  useEffect(()=>{
    if(image11 !== null)
    {
        setEditImage10(image11);
    }
  },[image11]);

  const [image12, setImage12] = useState();
  const [preview12, setPreview12] = useState();

  useEffect(()=>{
    if(image12 !== null)
    {
        setEditImage11(image12);
    }
  },[image12]);

  const [image13, setImage13] = useState();
  const [preview13, setPreview13] = useState();

  useEffect(()=>{
    if(image13 !== null)
    {
        setEditImage12(image13);
    }
  },[image13]);

  const [image14, setImage14] = useState();
  const [preview14, setPreview14] = useState();

  useEffect(()=>{
    if(image14 !== null)
    {
        setEditImage13(image14);
    }
  },[image14]);

  const [image15, setImage15] = useState();
  const [preview15, setPreview15] = useState();

  useEffect(()=>{
    if(image15 !== null)
    {
        setEditImage14(image15);
    }
  },[image15]);

  const [image16, setImage16] = useState();
  const [preview16, setPreview16] = useState();

  useEffect(()=>{
    if(image16 !== null)
    {
        setEditImage15(image16);
    }
  },[image16]);

  const Navigate = useNavigate();
  const fileInputRef = useRef();
  const fileInputRef2 = useRef();
  const fileInputRef3 = useRef();
  const fileInputRef4 = useRef();
  const fileInputRef5 = useRef();
  const fileInputRef6 = useRef();
  const fileInputRef7 = useRef();
  const fileInputRef8 = useRef();
  const fileInputRef9 = useRef();
  const fileInputRef10 = useRef();
  const fileInputRef11 = useRef();
  const fileInputRef12 = useRef();
  const fileInputRef13 = useRef();
  const fileInputRef14 = useRef();
  const fileInputRef15 = useRef();
  const fileInputRef16 = useRef();


  useEffect(()=>{
    const realTwo = async () => {
        const love = await axios.get(`${BaseURL}/api/get-sun-details/${paramaId}`);
        if(love.data.status === 200){
        setEditImage(`${BaseURL}/parts/${love.data.sun.sitting_room}`);
        setEditImage1(`${BaseURL}/parts/${love.data.sun.dinning_room}`);
        setEditImage2(`${BaseURL}/parts/${love.data.sun.kitchen}`);
        setEditImage3(`${BaseURL}/parts/${love.data.sun.bathroom}`);
        setEditImage4(`${BaseURL}/parts/${love.data.sun.bedroom}`);
        setEditImage5(`${BaseURL}/parts/${love.data.sun.swimming_pool}`);
        setEditImage6(`${BaseURL}/parts/${love.data.sun.lake}`);
        setEditImage7(`${BaseURL}/parts/${love.data.sun.beach}`);
        setEditImage8(`${BaseURL}/parts/${love.data.sun.ocean_view}`);
        setEditImage9(`${BaseURL}/parts/${love.data.sun.balcony}`);
        setEditImage10(`${BaseURL}/parts/${love.data.sun.parking}`);
        setEditImage11(`${BaseURL}/parts/${love.data.sun.front}`);
        setEditImage12(`${BaseURL}/parts/${love.data.sun.right}`);
        setEditImage13(`${BaseURL}/parts/${love.data.sun.left}`);
        setEditImage14(`${BaseURL}/parts/${love.data.sun.back}`);
        setEditImage15(`${BaseURL}/parts/${love.data.sun.aerial}`);
        }
      }
    realTwo();
  },[paramaId])

  useEffect(()=>{
    const realThree = async () => {
        const SendId = userId;
        const request = await axios.get(`${BaseURL}/api/get-host-specific-details/${SendId}`);
        if(request.data.status === 200){
        setImageToBe(`${BaseURL}/users/${request.data.hostSpecific.image}`);
        }
      }
    realThree();
  },[userId]);

  useEffect(()=>{
    if(image) {
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreview(reader.result);
        }
        reader.readAsDataURL(image);
    }
    else {
        setPreview(null);
    }
  },[image]);

  useEffect(()=>{
    if(image2) {
        const reader2 = new FileReader();
        reader2.onloadend = () => {
            setPreview2(reader2.result);
        }
        reader2.readAsDataURL(image2);
    }
    else {
        setPreview2(null);
    }
  },[image2]);

  useEffect(()=>{
    if(image3) {
        const reader3 = new FileReader();
        reader3.onloadend = () => {
            setPreview3(reader3.result);
        }
        reader3.readAsDataURL(image3);
    }
    else {
        setPreview3(null);
    }
  },[image3]);

  useEffect(()=>{
    if(image4) {
        const reader4 = new FileReader();
        reader4.onloadend = () => {
            setPreview4(reader4.result);
        }
        reader4.readAsDataURL(image4);
    }
    else {
        setPreview4(null);
    }
  },[image4]);

  useEffect(()=>{
    if(image5) {
        const reader5 = new FileReader();
        reader5.onloadend = () => {
            setPreview5(reader5.result);
        }
        reader5.readAsDataURL(image5);
    }
    else {
        setPreview5(null);
    }
  },[image5]);

  useEffect(()=>{
    if(image6) {
        const reader6 = new FileReader();
        reader6.onloadend = () => {
            setPreview6(reader6.result);
        }
        reader6.readAsDataURL(image6);
    }
    else {
        setPreview6(null);
    }
  },[image6]);

  useEffect(()=>{
    if(image7) {
        const reader7 = new FileReader();
        reader7.onloadend = () => {
            setPreview7(reader7.result);
        }
        reader7.readAsDataURL(image7);
    }
    else {
        setPreview7(null);
    }
  },[image7]);

  useEffect(()=>{
    if(image8) {
        const reader8 = new FileReader();
        reader8.onloadend = () => {
            setPreview8(reader8.result);
        }
        reader8.readAsDataURL(image8);
    }
    else {
        setPreview8(null);
    }
  },[image8]);

  useEffect(()=>{
    if(image9) {
        const reader9 = new FileReader();
        reader9.onloadend = () => {
            setPreview9(reader9.result);
        }
        reader9.readAsDataURL(image9);
    }
    else {
        setPreview9(null);
    }
  },[image9]);

  useEffect(()=>{
    if(image10) {
        const reader10 = new FileReader();
        reader10.onloadend = () => {
            setPreview10(reader10.result);
        }
        reader10.readAsDataURL(image10);
    }
    else {
        setPreview10(null);
    }
  },[image10]);

  useEffect(()=>{
    if(image11) {
        const reader11 = new FileReader();
        reader11.onloadend = () => {
            setPreview11(reader11.result);
        }
        reader11.readAsDataURL(image11);
    }
    else {
        setPreview11(null);
    }
  },[image11]);

  useEffect(()=>{
    if(image12) {
        const reader12 = new FileReader();
        reader12.onloadend = () => {
            setPreview12(reader12.result);
        }
        reader12.readAsDataURL(image12);
    }
    else {
        setPreview12(null);
    }
  },[image12]);

  useEffect(()=>{
    if(image13) {
        const reader13 = new FileReader();
        reader13.onloadend = () => {
            setPreview13(reader13.result);
        }
        reader13.readAsDataURL(image13);
    }
    else {
        setPreview13(null);
    }
  },[image13]);

  useEffect(()=>{
    if(image14) {
        const reader14 = new FileReader();
        reader14.onloadend = () => {
            setPreview14(reader14.result);
        }
        reader14.readAsDataURL(image14);
    }
    else {
        setPreview14(null);
    }
  },[image14]);

  useEffect(()=>{
    if(image15) {
        const reader15 = new FileReader();
        reader15.onloadend = () => {
            setPreview15(reader15.result);
        }
        reader15.readAsDataURL(image15);
    }
    else {
        setPreview15(null);
    }
  },[image15]);

  useEffect(()=>{
    if(image16) {
        const reader16 = new FileReader();
        reader16.onloadend = () => {
            setPreview16(reader16.result);
        }
        reader16.readAsDataURL(image16);
    }
    else {
        setPreview16(null);
    }
  },[image16]);

    const handleUpdate = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('sitting_room', editImage);
        data.append('dinning_room', editImage1);
        data.append('kitchen', editImage2);
        data.append('bathroom', editImage3);
        data.append('bedroom', editImage4);
        data.append('swimming_pool', editImage5);
        data.append('lake', editImage6);
        data.append('beach', editImage7);
        data.append('ocean_view', editImage8);
        data.append('balcony', editImage9);
        data.append('parking', editImage10);
        data.append('front', editImage11);
        data.append('right', editImage12);
        data.append('left', editImage13);
        data.append('back', editImage14);
        data.append('aerial', editImage15);
        data.append('userId', userId);
        axios.post(`${BaseURL}/api/update-hundred-details/${paramaId}`,data).then((res)=>{
            if(res.data.status === 200) {
                swal('success','house details updated','success');
                document.getElementById('updated').innerHTML = "updated";
            }
        });

    }

    const deletePart = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('sitting_room', editImage);
        data.append('house_id', paramaId)
        const willDelete = await swal({
            title: "Are you sure?",
            text: "Are you sure that you want to delete sitting room image? if no click outside the box",
            icon: "warning",
            dangerMode: true,
        });
       
        if (willDelete) {
            const res = await axios.post(`${BaseURL}/api/delete-house-part/${paramaId}`,data);

            if(res.data.status === 200)
            {
            swal("Deleted!", "Sitting room image has been deleted!", "success");
            window.location.reload();
            console.log(res.data.message);
            }
        }

    }

    const deletePart2 = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('dinning_room', editImage1);
        data.append('house_id', paramaId)
        const willDelete = await swal({
            title: "Are you sure?",
            text: "Are you sure that you want to delete dining room image? if no click outside the box",
            icon: "warning",
            dangerMode: true,
        });
       
        if (willDelete) {
            const res = await axios.post(`${BaseURL}/api/delete-house-part2/${paramaId}`,data);

            if(res.data.status === 200)
            {
            swal("Deleted!", "dining room image has been deleted!", "success");
            window.location.reload();
            console.log(res.data.message);
            }
        }
    }

    const deletePart3 = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('kitchen', editImage2);
        data.append('house_id', paramaId)
        const willDelete = await swal({
            title: "Are you sure?",
            text: "Are you sure that you want to delete kitchen image? if no click outside the box",
            icon: "warning",
            dangerMode: true,
        });
       
        if (willDelete) {
            const res = await axios.post(`${BaseURL}/api/delete-house-part3/${paramaId}`,data);

            if(res.data.status === 200)
            {
            swal("Deleted!", "kitchen image has been deleted!", "success");
            window.location.reload();
            console.log(res.data.message);
            }
        }
    }

    const deletePart4 = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('bathroom', editImage3);
        data.append('house_id', paramaId)
        const willDelete = await swal({
            title: "Are you sure?",
            text: "Are you sure that you want to delete bathroom image? if no click outside the box",
            icon: "warning",
            dangerMode: true,
        });
       
        if (willDelete) {
            const res = await axios.post(`${BaseURL}/api/delete-house-part4/${paramaId}`,data);

            if(res.data.status === 200)
            {
            swal("Deleted!", "bathroom image has been deleted!", "success");
            window.location.reload();
            console.log(res.data.message);
            }
        }
    }

    const deletePart5 = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('bedroom', editImage4);
        data.append('house_id', paramaId)
        const willDelete = await swal({
            title: "Are you sure?",
            text: "Are you sure that you want to delete bedroom image? if no click outside the box",
            icon: "warning",
            dangerMode: true,
        });
       
        if (willDelete) {
            const res = await axios.post(`${BaseURL}/api/delete-house-part5/${paramaId}`,data);

            if(res.data.status === 200)
            {
            swal("Deleted!", "bedroom image has been deleted!", "success");
            window.location.reload();
            console.log(res.data.message);
            }
        }
    }

    const deletePart6 = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('swimming_pool', editImage5);
        data.append('house_id', paramaId)
        const willDelete = await swal({
            title: "Are you sure?",
            text: "Are you sure that you want to delete swimming pool image? if no click outside the box",
            icon: "warning",
            dangerMode: true,
        });
       
        if (willDelete) {
            const res = await axios.post(`${BaseURL}/api/delete-house-part6/${paramaId}`,data);

            if(res.data.status === 200)
            {
            swal("Deleted!", "swimming pool image has been deleted!", "success");
            window.location.reload();
            console.log(res.data.message);
            }
        }
    }

    const deletePart7 = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('lake', editImage6);
        data.append('house_id', paramaId)
        const willDelete = await swal({
            title: "Are you sure?",
            text: "Are you sure that you want to delete lake image? if no click outside the box",
            icon: "warning",
            dangerMode: true,
        });
       
        if (willDelete) {
            const res = await axios.post(`${BaseURL}/api/delete-house-part7/${paramaId}`,data);

            if(res.data.status === 200)
            {
            swal("Deleted!", "lake image has been deleted!", "success");
            window.location.reload();
            console.log(res.data.message);
            }
        }
    }

    const deletePart8 = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('beach', editImage7);
        data.append('house_id', paramaId)
        const willDelete = await swal({
            title: "Are you sure?",
            text: "Are you sure that you want to delete beach image? if no click outside the box",
            icon: "warning",
            dangerMode: true,
        });
       
        if (willDelete) {
            const res = await axios.post(`${BaseURL}/api/delete-house-part8/${paramaId}`,data);

            if(res.data.status === 200)
            {
            swal("Deleted!", "beach image has been deleted!", "success");
            window.location.reload();
            console.log(res.data.message);
            }
        }
    }

    const deletePart9 = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('ocean_view', editImage8);
        data.append('house_id', paramaId)
        const willDelete = await swal({
            title: "Are you sure?",
            text: "Are you sure that you want to delete ocean view image? if no click outside the box",
            icon: "warning",
            dangerMode: true,
        });
       
        if (willDelete) {
            const res = await axios.post(`${BaseURL}/api/delete-house-part9/${paramaId}`,data);

            if(res.data.status === 200)
            {
            swal("Deleted!", "ocean view image has been deleted!", "success");
            window.location.reload();
            console.log(res.data.message);
            }
        }
    }

    const deletePart10 = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('balcony', editImage9);
        data.append('house_id', paramaId)
        const willDelete = await swal({
            title: "Are you sure?",
            text: "Are you sure that you want to delete balcony view image? if no click outside the box",
            icon: "warning",
            dangerMode: true,
        });
       
        if (willDelete) {
            const res = await axios.post(`${BaseURL}/api/delete-house-part10/${paramaId}`,data);

            if(res.data.status === 200)
            {
            swal("Deleted!", "balcony view image has been deleted!", "success");
            window.location.reload();
            console.log(res.data.message);
            }
        }
    }

    const deletePart11 = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('parking', editImage10);
        data.append('house_id', paramaId)
        const willDelete = await swal({
            title: "Are you sure?",
            text: "Are you sure that you want to delete parking view image? if no click outside the box",
            icon: "warning",
            dangerMode: true,
        });
       
        if (willDelete) {
            const res = await axios.post(`${BaseURL}/api/delete-house-part11/${paramaId}`,data);

            if(res.data.status === 200)
            {
            swal("Deleted!", "parking view image has been deleted!", "success");
            window.location.reload();
            console.log(res.data.message);
            }
        }
    }


    const deletePart12 = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('front', editImage11);
        data.append('house_id', paramaId)
        const willDelete = await swal({
            title: "Are you sure?",
            text: "Are you sure that you want to delete front view image? if no click outside the box",
            icon: "warning",
            dangerMode: true,
        });
       
        if (willDelete) {
            const res = await axios.post(`${BaseURL}/api/delete-house-part12/${paramaId}`,data);

            if(res.data.status === 200)
            {
            swal("Deleted!", "front view image has been deleted!", "success");
            window.location.reload();
            console.log(res.data.message);
            }
        }
    }

    const deletePart13 = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('right', editImage12);
        data.append('house_id', paramaId)
        const willDelete = await swal({
            title: "Are you sure?",
            text: "Are you sure that you want to delete right view image? if no click outside the box",
            icon: "warning",
            dangerMode: true,
        });
       
        if (willDelete) {
            const res = await axios.post(`${BaseURL}/api/delete-house-part13/${paramaId}`,data);

            if(res.data.status === 200)
            {
            swal("Deleted!", "right view image has been deleted!", "success");
            window.location.reload();
            console.log(res.data.message);
            }
        }
    }

    const deletePart14 = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('left', editImage13);
        data.append('house_id', paramaId)
        const willDelete = await swal({
            title: "Are you sure?",
            text: "Are you sure that you want to delete left view image? if no click outside the box",
            icon: "warning",
            dangerMode: true,
        });
       
        if (willDelete) {
            const res = await axios.post(`${BaseURL}/api/delete-house-part14/${paramaId}`,data);

            if(res.data.status === 200)
            {
            swal("Deleted!", "left view image has been deleted!", "success");
            window.location.reload();
            console.log(res.data.message);
            }
        }
    }

    const deletePart15 = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('back', editImage14);
        data.append('house_id', paramaId)
        const willDelete = await swal({
            title: "Are you sure?",
            text: "Are you sure that you want to delete back view image? if no click outside the box",
            icon: "warning",
            dangerMode: true,
        });
       
        if (willDelete) {
            const res = await axios.post(`${BaseURL}/api/delete-house-part15/${paramaId}`,data);

            if(res.data.status === 200)
            {
            swal("Deleted!", "back view image has been deleted!", "success");
            window.location.reload();
            console.log(res.data.message);
            }
        }
    }

    const deletePart16 = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('aerial', editImage15);
        data.append('house_id', paramaId)
        const willDelete = await swal({
            title: "Are you sure?",
            text: "Are you sure that you want to delete aerial view image? if no click outside the box",
            icon: "warning",
            dangerMode: true,
        });
       
        if (willDelete) {
            const res = await axios.post(`${BaseURL}/api/delete-house-part16/${paramaId}`,data);

            if(res.data.status === 200)
            {
            swal("Deleted!", "aerial view image has been deleted!", "success");
            window.location.reload();
            console.log(res.data.message);
            }
        }
    }

        const [showMenuBar, setShowMenuBar] = useState(false);

        useEffect(()=>{
            if(window.innerWidth < 1024) {
            setShowMenuBar(false)
            }
        
            if(window.innerWidth > 1024) {
            setShowMenuBar(true);
            }
        },[]);

        const handleMenuBar = () => {
            setShowMenuBar(!showMenuBar);
            
        }

    //Scroll to the top on load
    useEffect(()=>{
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    },[]);
    //End of Scroll to the top on load

    const handleLogout = async () => {
        const willDelete = await swal({
          title: "Are you sure?",
          text: "Are you sure that you want to logout ? if no click outside the box",
          icon: "warning",
          dangerMode: true,
      });
    
        if (willDelete) {
          localStorage.removeItem("user-info");
          Navigate('/');
      }
    }

    return (
      <div className='edit-fourth__page'>
  
          <div className='edit-fourth__info'>
             <div className="edit-fourth__info-left">
              <div className='incase-you-know'>
                  <div className="host-image"><img src={imageToBe} alt="" /></div>
                  <div>
                      <h4>Henry Klein</h4>
                      <p>Host</p>
                  </div>
                  <div className='editFourthMenuBar' onClick={handleMenuBar}><h2 style={{ display: 'flex', alignItems: 'center' }}><MoreHoriz /> </h2></div>
              </div>
              {showMenuBar ? 
              <p>Navigation</p>
              :
              null
                }
  
                {showMenuBar ? 
              <ul className='host-navigation'>
                <li><Link to="/main-host-account" className='lilo-link'>DashBoard</Link></li>
                <li style={{ backgroundColor: '#F78513' }}><Link to="/host-houses" className='lilo-link'>Your houses</Link></li>
                <li><Link to="/add-house-host" className='lilo-link'><Add /> house</Link></li>
                <li onClick={()=> Navigate('/tenants-details')}>Tenants Details</li>
                <li onClick={()=> Navigate('/host-profile')}>Host Profile</li>
                <li onClick={()=> Navigate('/host-settings')}>Settings</li>
                <li onClick={handleLogout}
                  className='baby'>Logout</li>
              </ul>
              :
              null
                }
             </div>
             <div className="edit-fourth__info-right">
              <form className="edit-fourth__info-right-block" encType='multipart/form-data' onSubmit={handleUpdate}>
                <div className="fourth-flex-wrap">
                    {editImage !== null ?
                    <div className="edit-fourth__info-right-image-container">
                        <div className="edit-fourth__info-right-image">
                            <img src={preview === null ?
                                editImage
                                :
                                preview
                            } alt="" />
                            {preview === null ?
                            <span className='dance-update' onClick={(e)=> {
                                e.preventDefault();
                                fileInputRef.current.click();
                            }}><FaPen /></span>
                            :
                            <span className='dance-update' onClick={(e)=> {
                                e.preventDefault();
                                setPreview(null);
                            }}><FaTimes /></span>
                            }
                            <p className={editImage === `${BaseURL}/parts/null` ? "dance-title-two" : "dance-title"}>update sitting room</p>
                            {editImage !== `${BaseURL}/parts/null` ?
                            <Button 
                            className="edit-fourth__info-right-imageButtonCrazy"
                            style={{ 
                                backgroundColor: '#F78513',
                                color: 'white',
                                position: 'absolute',
                                bottom: '50px',
                                right: '20px',
                                textTransform: 'inherit',
                             }}
                             onClick={(e) => deletePart(e)}>Delete</Button>
                             :
                             null
                            }
                        </div>
                            <input type="file" name="image"
                            placeholder=""
                            accept="image/*"
                            onChange={(e)=> {
                            const file = e.target.files[0];
                            if(file && file.type.substring(0, 5) === "image"){
                                setImage(file);
                            }
                            else{
                                setImage(null);
                            }
                            }}
                            style={{ display: 'none' }}
                            ref={fileInputRef} />
                    </div>
                    :
                    null
                    }

                    {editImage1 !== null ?
                    <div className="edit-fourth__info-right-image-container">
                        <div className="edit-fourth__info-right-image">
                            <img src={preview2 === null ?
                            editImage1
                            :
                            preview2
                            } alt="" />
                            {preview2 === null ?
                            <span className='dance-update' onClick={(e)=> {
                                e.preventDefault();
                                fileInputRef2.current.click();
                            }}><FaPen /></span>
                            :
                            <span className='dance-update' onClick={(e)=> {
                                e.preventDefault();
                                setPreview2(null);
                            }}><FaTimes /></span>
                            }
                            <p className={editImage1 === `${BaseURL}/parts/null` ? "dance-title-two" : "dance-title"}>update dining room</p>
                            {editImage1 !== `${BaseURL}/parts/null` ?
                            <Button 
                            className="edit-fourth__info-right-imageButtonCrazy"
                            style={{ 
                                backgroundColor: '#F78513',
                                color: 'white',
                                position: 'absolute',
                                bottom: '50px',
                                right: '20px',
                                textTransform: 'inherit',
                             }}
                             onClick={(e) => deletePart2(e)}>Delete</Button>
                             :
                             null
                            }
                        </div>
                            <input type="file" name="image"
                            placeholder=""
                            accept="image/*"
                            onChange={(e)=> {
                            const file = e.target.files[0];
                            if(file && file.type.substring(0, 5) === "image"){
                                setImage2(file);
                            }
                            else{
                                setImage2(null);
                            }
                            }}
                            style={{ display: 'none' }}
                            ref={fileInputRef2} />
                    </div>
                    :
                    null
                    }

                    {editImage2 !== null ?
                    <div className="edit-fourth__info-right-image-container">
                        <div className="edit-fourth__info-right-image">
                            <img src={preview3 === null ?
                            editImage2
                            :
                            preview3
                            } alt="" />
                            {preview3 === null ?
                            <span className='dance-update' onClick={(e)=> {
                                e.preventDefault();
                                fileInputRef3.current.click();
                            }}><FaPen /></span>
                            :
                            <span className='dance-update' onClick={(e)=> {
                                e.preventDefault();
                                setPreview3(null);
                            }}><FaTimes /></span>
                            }
                            <p className={editImage2 === `${BaseURL}/parts/null` ? "dance-title-two" : "dance-title"}>update kitchen</p>
                            {editImage2 !== `${BaseURL}/parts/null` ?
                            <Button 
                            className="edit-fourth__info-right-imageButtonCrazy"
                            style={{ 
                                backgroundColor: '#F78513',
                                color: 'white',
                                position: 'absolute',
                                bottom: '50px',
                                right: '20px',
                                textTransform: 'inherit',
                             }}
                             onClick={(e) => deletePart3(e)}>Delete</Button>
                             :
                             null
                            }
                        </div>
                            <input type="file" name="image"
                            placeholder=""
                            accept="image/*"
                            onChange={(e)=> {
                            const file = e.target.files[0];
                            if(file && file.type.substring(0, 5) === "image"){
                                setImage3(file);
                            }
                            else{
                                setImage3(null);
                            }
                            }}
                            style={{ display: 'none' }}
                            ref={fileInputRef3} />
                    </div>
                    :
                    null
                    }

                    {editImage3 !==null ?
                    <div className="edit-fourth__info-right-image-container">
                        <div className="edit-fourth__info-right-image">
                            <img src={preview4 === null ?
                            editImage3
                            :
                            preview4
                            } alt="" />
                            {preview4 === null ?
                            <span className='dance-update' onClick={(e)=> {
                                e.preventDefault();
                                fileInputRef4.current.click();
                            }}><FaPen /></span>
                            :
                            <span className='dance-update' onClick={(e)=> {
                                e.preventDefault();
                                setPreview4(null);
                            }}><FaTimes /></span>
                            }
                            <p className={editImage3 === `${BaseURL}/parts/null` ? "dance-title-two" : "dance-title"}>update bathroom</p>
                            {editImage3 !== `${BaseURL}/parts/null` ?
                            <Button 
                            className="edit-fourth__info-right-imageButtonCrazy"
                            style={{ 
                                backgroundColor: '#F78513',
                                color: 'white',
                                position: 'absolute',
                                bottom: '50px',
                                right: '20px',
                                textTransform: 'inherit',
                             }}
                             onClick={(e) => deletePart4(e)}>Delete</Button>
                             :
                             null
                            }
                        </div>
                            <input type="file" name="image"
                            placeholder=""
                            accept="image/*"
                            onChange={(e)=> {
                            const file = e.target.files[0];
                            if(file && file.type.substring(0, 5) === "image"){
                                setImage4(file);
                            }
                            else{
                                setImage4(null);
                            }
                            }}
                            style={{ display: 'none' }}
                            ref={fileInputRef4} />
                    </div>
                    :
                    null
                    }

                    {EditFourth !== null ?
                    <div className="edit-fourth__info-right-image-container">
                        <div className="edit-fourth__info-right-image">
                            <img src={preview5 === null ?
                            editImage4
                            :
                            preview5
                            } alt="" />
                            {preview5 === null ?
                            <span className='dance-update' onClick={(e)=> {
                                e.preventDefault();
                                fileInputRef5.current.click();
                            }}><FaPen /></span>
                            :
                            <span className='dance-update' onClick={(e)=> {
                                e.preventDefault();
                                setPreview5(null);
                            }}><FaTimes /></span>
                            }
                            <p className={editImage4 === `${BaseURL}/parts/null` ? "dance-title-two" : "dance-title"}>update bedroom</p>
                            {editImage4 !== `${BaseURL}/parts/null` ?
                            <Button 
                            className="edit-fourth__info-right-imageButtonCrazy"
                            style={{ 
                                backgroundColor: '#F78513',
                                color: 'white',
                                position: 'absolute',
                                bottom: '50px',
                                right: '20px',
                                textTransform: 'inherit',
                             }}
                             onClick={(e) => deletePart5(e)}>Delete</Button>
                             :
                             null
                            }
                        </div>
                            <input type="file" name="image"
                            placeholder=""
                            accept="image/*"
                            onChange={(e)=> {
                            const file = e.target.files[0];
                            if(file && file.type.substring(0, 5) === "image"){
                                setImage5(file);
                            }
                            else{
                                setImage5(null);
                            }
                            }}
                            style={{ display: 'none' }}
                            ref={fileInputRef5} />
                    </div>
                    :
                    null
                    }

                    {editImage5 !== null ?
                    <div className="edit-fourth__info-right-image-container">
                        <div className="edit-fourth__info-right-image">
                            <img src={preview6 === null ?
                            editImage5
                            :
                            preview6
                            } alt="" />
                            {preview6 === null ?
                            <span className='dance-update' onClick={(e)=> {
                                e.preventDefault();
                                fileInputRef6.current.click();
                            }}><FaPen /></span>
                            :
                            <span className='dance-update' onClick={(e)=> {
                                e.preventDefault();
                                setPreview6(null);
                            }}><FaTimes /></span>
                            }
                            <p className={editImage5 === `${BaseURL}/parts/null` ? "dance-title-two" : "dance-title"}>update swimming pool</p>
                            {editImage5 !== `${BaseURL}/parts/null` ?
                            <Button 
                            className="edit-fourth__info-right-imageButtonCrazy"
                            style={{ 
                                backgroundColor: '#F78513',
                                color: 'white',
                                position: 'absolute',
                                bottom: '50px',
                                right: '20px',
                                textTransform: 'inherit',
                             }}
                             onClick={(e) => deletePart6(e)}>Delete</Button>
                             :
                             null
                            }
                        </div>
                            <input type="file" name="image"
                            placeholder=""
                            accept="image/*"
                            onChange={(e)=> {
                            const file = e.target.files[0];
                            if(file && file.type.substring(0, 5) === "image"){
                                setImage6(file);
                            }
                            else{
                                setImage6(null);
                            }
                            }}
                            style={{ display: 'none' }}
                            ref={fileInputRef6} />
                    </div>
                    :
                    null
                    }

                    {editImage6 !== null ?
                    <div className="edit-fourth__info-right-image-container">
                        <div className="edit-fourth__info-right-image">
                            <img src={preview7 === null ?
                            editImage6
                            :
                            preview7
                            } alt="" />
                            {preview7 === null ?
                            <span className='dance-update' onClick={(e)=> {
                                e.preventDefault();
                                fileInputRef7.current.click();
                            }}><FaPen /></span>
                            :
                            <span className='dance-update' onClick={(e)=> {
                                e.preventDefault();
                                setPreview7(null);
                            }}><FaTimes /></span>
                            }
                            <p className={editImage6 === `${BaseURL}/parts/null` ? "dance-title-two" : "dance-title"}>update lake</p>
                            {editImage6 !== `${BaseURL}/parts/null` ?
                            <Button 
                            className="edit-fourth__info-right-imageButtonCrazy"
                            style={{ 
                                backgroundColor: '#F78513',
                                color: 'white',
                                position: 'absolute',
                                bottom: '50px',
                                right: '20px',
                                textTransform: 'inherit',
                             }}
                             onClick={(e) => deletePart7(e)}>Delete</Button>
                             :
                             null
                            }
                        </div>
                            <input type="file" name="image"
                            placeholder=""
                            accept="image/*"
                            onChange={(e)=> {
                            const file = e.target.files[0];
                            if(file && file.type.substring(0, 5) === "image"){
                                setImage7(file);
                            }
                            else{
                                setImage7(null);
                            }
                            }}
                            style={{ display: 'none' }}
                            ref={fileInputRef7} />
                    </div>
                    :
                    null
                    }

                    {editImage7 !== null ?
                    <div className="edit-fourth__info-right-image-container">
                        <div className="edit-fourth__info-right-image">
                            <img src={preview8 === null ?
                            editImage7
                            :
                            preview8
                            } alt="" />
                            {preview8 === null ?
                            <span className='dance-update' onClick={(e)=> {
                                e.preventDefault();
                                fileInputRef8.current.click();
                            }}><FaPen /></span>
                            :
                            <span className='dance-update' onClick={(e)=> {
                                e.preventDefault();
                                setPreview8(null);
                            }}><FaTimes /></span>
                            }
                            <p className={editImage7 === `${BaseURL}/parts/null` ? "dance-title-two" : "dance-title"}>update beach</p>
                            {editImage7 !== `${BaseURL}/parts/null` ?
                            <Button 
                            className="edit-fourth__info-right-imageButtonCrazy"
                            style={{ 
                                backgroundColor: '#F78513',
                                color: 'white',
                                position: 'absolute',
                                bottom: '50px',
                                right: '20px',
                                textTransform: 'inherit',
                             }}
                             onClick={(e) => deletePart8(e)}>Delete</Button>
                             :
                             null
                            }
                        </div>
                            <input type="file" name="image"
                            placeholder=""
                            accept="image/*"
                            onChange={(e)=> {
                            const file = e.target.files[0];
                            if(file && file.type.substring(0, 5) === "image"){
                                setImage8(file);
                            }
                            else{
                                setImage8(null);
                            }
                            }}
                            style={{ display: 'none' }}
                            ref={fileInputRef8} />
                    </div>
                    :
                    null
                    }

                    {editImage8 !== null ?
                    <div className="edit-fourth__info-right-image-container">
                        <div className="edit-fourth__info-right-image">
                            <img src={preview9 === null ?
                            editImage8
                            :
                            preview9
                            } alt="" />
                            {preview9 === null ?
                            <span className='dance-update' onClick={(e)=> {
                                e.preventDefault();
                                fileInputRef9.current.click();
                            }}><FaPen /></span>
                            :
                            <span className='dance-update' onClick={(e)=> {
                                e.preventDefault();
                                setPreview9(null);
                            }}><FaTimes /></span>
                            }
                            <p className={editImage8 === `${BaseURL}/parts/null` ? "dance-title-two" : "dance-title"}>update Ocean view</p>
                            {editImage8 !== `${BaseURL}/parts/null` ?
                            <Button 
                            className="edit-fourth__info-right-imageButtonCrazy"
                            style={{ 
                                backgroundColor: '#F78513',
                                color: 'white',
                                position: 'absolute',
                                bottom: '50px',
                                right: '20px',
                                textTransform: 'inherit',
                             }}
                             onClick={(e) => deletePart9(e)}>Delete</Button>
                             :
                             null
                            }
                        </div>
                            <input type="file" name="image"
                            placeholder=""
                            accept="image/*"
                            onChange={(e)=> {
                            const file = e.target.files[0];
                            if(file && file.type.substring(0, 5) === "image"){
                                setImage9(file);
                            }
                            else{
                                setImage9(null);
                            }
                            }}
                            style={{ display: 'none' }}
                            ref={fileInputRef9} />
                    </div>
                    :
                    null
                    }

                    {editImage9 !== null ?
                    <div className="edit-fourth__info-right-image-container">
                        <div className="edit-fourth__info-right-image">
                            <img src={preview10 === null ?
                            editImage9
                            :
                            preview10
                            } alt="" />
                            {preview10 === null ?
                            <span className='dance-update' onClick={(e)=> {
                                e.preventDefault();
                                fileInputRef10.current.click();
                            }}><FaPen /></span>
                            :
                            <span className='dance-update' onClick={(e)=> {
                                e.preventDefault();
                                setPreview10(null);
                            }}><FaTimes /></span>
                            }
                            <p className={editImage9 === `${BaseURL}/parts/null` ? "dance-title-two" : "dance-title"}>update balcony</p>
                            {editImage9 !== `${BaseURL}/parts/null` ?
                            <Button 
                            className="edit-fourth__info-right-imageButtonCrazy"
                            style={{ 
                                backgroundColor: '#F78513',
                                color: 'white',
                                position: 'absolute',
                                bottom: '50px',
                                right: '20px',
                                textTransform: 'inherit',
                             }}
                             onClick={(e) => deletePart10(e)}>Delete</Button>
                             :
                             null}
                        </div>
                            <input type="file" name="image"
                            placeholder=""
                            accept="image/*"
                            onChange={(e)=> {
                            const file = e.target.files[0];
                            if(file && file.type.substring(0, 5) === "image"){
                                setImage10(file);
                            }
                            else{
                                setImage10(null);
                            }
                            }}
                            style={{ display: 'none' }}
                            ref={fileInputRef10} />
                    </div>
                    :
                    null
                    }

                    {editImage10 !== null ?
                    <div className="edit-fourth__info-right-image-container">
                        <div className="edit-fourth__info-right-image">
                            <img src={preview11 === null ?
                            editImage10
                            :
                            preview11
                            } alt="" />
                            {preview11 === null ?
                            <span className='dance-update' onClick={(e)=> {
                                e.preventDefault();
                                fileInputRef11.current.click();
                            }}><FaPen /></span>
                            :
                            <span className='dance-update' onClick={(e)=> {
                                e.preventDefault();
                                setPreview11(null);
                            }}><FaTimes /></span>
                            }
                            <p className={editImage10 === `${BaseURL}/parts/null` ? "dance-title-two" : "dance-title"}>update parking</p>
                            {editImage10 !== `${BaseURL}/parts/null` ?
                            <Button 
                            className="edit-fourth__info-right-imageButtonCrazy"
                            style={{ 
                                backgroundColor: '#F78513',
                                color: 'white',
                                position: 'absolute',
                                bottom: '50px',
                                right: '20px',
                                textTransform: 'inherit',
                             }}
                             onClick={(e) => deletePart11(e)}>Delete</Button>
                             :
                             null
                            }
                        </div>
                            <input type="file" name="image"
                            placeholder=""
                            accept="image/*"
                            onChange={(e)=> {
                            const file = e.target.files[0];
                            if(file && file.type.substring(0, 5) === "image"){
                                setImage11(file);
                            }
                            else{
                                setImage11(null);
                            }
                            }}
                            style={{ display: 'none' }}
                            ref={fileInputRef11} />
                    </div>
                    :
                    null
                    }

                    {editImage11 !== null ?
                    <div className="edit-fourth__info-right-image-container">
                        <div className="edit-fourth__info-right-image">
                            <img src={preview12 === null ?
                            editImage11
                            :
                            preview12
                            } alt="" />
                            {preview12 === null ?
                            <span className='dance-update' onClick={(e)=> {
                                e.preventDefault();
                                fileInputRef12.current.click();
                            }}><FaPen /></span>
                            :
                            <span className='dance-update' onClick={(e)=> {
                                e.preventDefault();
                                setPreview12(null);
                            }}><FaTimes /></span>
                            }
                            <p className={editImage11 === `${BaseURL}/parts/null` ? "dance-title-two" : "dance-title"}>update Front</p>
                            {editImage11 !== `${BaseURL}/parts/null` ?
                            <Button 
                            className="edit-fourth__info-right-imageButtonCrazy"
                            style={{ 
                                backgroundColor: '#F78513',
                                color: 'white',
                                position: 'absolute',
                                bottom: '50px',
                                right: '20px',
                                textTransform: 'inherit',
                             }}
                             onClick={(e) => deletePart12(e)}>Delete</Button>
                             :
                             null
                            }
                        </div>
                            <input type="file" name="image"
                            placeholder=""
                            accept="image/*"
                            onChange={(e)=> {
                            const file = e.target.files[0];
                            if(file && file.type.substring(0, 5) === "image"){
                                setImage12(file);
                            }
                            else{
                                setImage12(null);
                            }
                            }}
                            style={{ display: 'none' }}
                            ref={fileInputRef12} />
                    </div>
                    :
                    null
                    }

                    {editImage12 !== null ?
                    <div className="edit-fourth__info-right-image-container">
                        <div className="edit-fourth__info-right-image">
                            <img src={preview13 === null ?
                            editImage12
                            :
                            preview13
                            } alt="" />
                            {preview13 === null ?
                            <span className='dance-update' onClick={(e)=> {
                                e.preventDefault();
                                fileInputRef13.current.click();
                            }}><FaPen /></span>
                            :
                            <span className='dance-update' onClick={(e)=> {
                                e.preventDefault();
                                setPreview13(null);
                            }}><FaTimes /></span>
                            }
                            <p className={editImage12 === `${BaseURL}/parts/null` ? "dance-title-two" : "dance-title"}>update Right</p>
                            {editImage12 !== `${BaseURL}/parts/null` ?
                            <Button 
                            className="edit-fourth__info-right-imageButtonCrazy"
                            style={{ 
                                backgroundColor: '#F78513',
                                color: 'white',
                                position: 'absolute',
                                bottom: '50px',
                                right: '20px',
                                textTransform: 'inherit',
                             }}
                             onClick={(e) => deletePart13(e)}>Delete</Button>
                             :
                             null
                            }
                        </div>
                            <input type="file" name="image"
                            placeholder=""
                            accept="image/*"
                            onChange={(e)=> {
                            const file = e.target.files[0];
                            if(file && file.type.substring(0, 5) === "image"){
                                setImage13(file);
                            }
                            else{
                                setImage13(null);
                            }
                            }}
                            style={{ display: 'none' }}
                            ref={fileInputRef13} />
                    </div>
                    :
                    null
                    }

                    {editImage13 !== null ?
                    <div className="edit-fourth__info-right-image-container">
                        <div className="edit-fourth__info-right-image">
                            <img src={preview14 === null ?
                            editImage13
                            :
                            preview14
                            } alt="" />
                            {preview14 === null ?
                            <span className='dance-update' onClick={(e)=> {
                                e.preventDefault();
                                fileInputRef14.current.click();
                            }}><FaPen /></span>
                            :
                            <span className='dance-update' onClick={(e)=> {
                                e.preventDefault();
                                setPreview14(null);
                            }}><FaTimes /></span>
                            }
                            <p className={editImage13 === `${BaseURL}/parts/null` ? "dance-title-two" : "dance-title"}>update left</p>
                            {editImage13 !== `${BaseURL}/parts/null` ?
                            <Button 
                            className="edit-fourth__info-right-imageButtonCrazy"
                            style={{ 
                                backgroundColor: '#F78513',
                                color: 'white',
                                position: 'absolute',
                                bottom: '50px',
                                right: '20px',
                                textTransform: 'inherit',
                             }}
                             onClick={(e) => deletePart14(e)}>Delete</Button>
                             :
                             null
                            }
                        </div>
                            <input type="file" name="image"
                            placeholder=""
                            accept="image/*"
                            onChange={(e)=> {
                            const file = e.target.files[0];
                            if(file && file.type.substring(0, 5) === "image"){
                                setImage14(file);
                            }
                            else{
                                setImage14(null);
                            }
                            }}
                            style={{ display: 'none' }}
                            ref={fileInputRef14} />
                    </div>
                    :
                    null
                    }

                    {editImage14 !== null ? 
                    <div className="edit-fourth__info-right-image-container">
                        <div className="edit-fourth__info-right-image">
                            <img src={preview15 === null ?
                            editImage14
                            :
                            preview15
                            } alt="" />
                            {preview15 === null ?
                            <span className='dance-update' onClick={(e)=> {
                                e.preventDefault();
                                fileInputRef15.current.click();
                            }}><FaPen /></span>
                            :
                            <span className='dance-update' onClick={(e)=> {
                                e.preventDefault();
                                setPreview15(null);
                            }}><FaTimes /></span>
                            }
                            <p className={editImage14 === `${BaseURL}/parts/null` ? "dance-title-two" : "dance-title"}>update back</p>
                            {editImage14 !== `${BaseURL}/parts/null` ? 
                            <Button 
                            className="edit-fourth__info-right-imageButtonCrazy"
                            style={{ 
                                backgroundColor: '#F78513',
                                color: 'white',
                                position: 'absolute',
                                bottom: '50px',
                                right: '20px',
                                textTransform: 'inherit',
                             }}
                             onClick={(e) => deletePart15(e)}>Delete</Button>
                             :
                             null
                            }
                        </div>
                            <input type="file" name="image"
                            placeholder=""
                            accept="image/*"
                            onChange={(e)=> {
                            const file = e.target.files[0];
                            if(file && file.type.substring(0, 5) === "image"){
                                setImage15(file);
                            }
                            else{
                                setImage15(null);
                            }
                            }}
                            style={{ display: 'none' }}
                            ref={fileInputRef15} />
                    </div>
                    :
                    null
                    }

                    {editImage15 !== null ?
                    <div className="edit-fourth__info-right-image-container">
                        <div className="edit-fourth__info-right-image">
                            <img src={preview16 === null ?
                            editImage15
                            :
                            preview16
                            } alt="" />
                            {preview16 === null ?
                            <span className='dance-update' onClick={(e)=> {
                                e.preventDefault();
                                fileInputRef16.current.click();
                            }}><FaPen /></span>
                            :
                            <span className='dance-update' onClick={(e)=> {
                                e.preventDefault();
                                setPreview16(null);
                            }}><FaTimes /></span>
                            }
                            <p className={editImage15 === `${BaseURL}/parts/null` ? "dance-title-two" : "dance-title"}>update aerial</p>
                            {editImage15 !== `${BaseURL}/parts/null` ?
                            <Button 
                            className="edit-fourth__info-right-imageButtonCrazy"
                            style={{ 
                                backgroundColor: '#F78513',
                                color: 'white',
                                position: 'absolute',
                                bottom: '50px',
                                right: '20px',
                                textTransform: 'inherit',
                             }}
                             onClick={(e) => deletePart16(e)}>Delete</Button>
                             :
                             null
                            }
                        </div>
                            <input type="file" name="image"
                            placeholder=""
                            accept="image/*"
                            onChange={(e)=> {
                            const file = e.target.files[0];
                            if(file && file.type.substring(0, 5) === "image"){
                                setImage16(file);
                            }
                            else{
                                setImage16(null);
                            }
                            }}
                            style={{ display: 'none' }}
                            ref={fileInputRef16} />
                    </div>
                    :
                    null
                    }
                </div>
                

                <div className="edit-fourth__info-right-buttonOne"><Button type="submit">Update (4/5) </Button></div>

                <div className="edit-fourth__info-right-buttonTwo">
                <Button onClick={()=> {
                    Navigate(`/edit-first?name=${title}&id=${paramaId}`,{state:{
                        paramaId: paramaId,
                        title: title,
                      }
                      });
                }} style={{ marginRight: '10px' }}>Page 1</Button>
                <Button onClick={()=> {
                    Navigate(`/edit-second?name=${title}&id=${paramaId}`,{state:{
                        paramaId: paramaId,
                        title: title,
                      }
                      });
                }} style={{ marginRight: '10px' }}>Page 2</Button>
                <Button onClick={()=> {
                    Navigate(`/edit-third?name=${title}&id=${paramaId}`,{state:{
                        paramaId: paramaId,
                        title: title,
                      }
                      });
                }} style={{ marginRight: '10px' }}>Page 3</Button>
                <Button onClick={()=> {
                    Navigate(`/edit-four?name=${title}&id=${paramaId}`,{state:{
                        paramaId: paramaId,
                        title: title,
                      }
                      });
                }} style={{ backgroundColor: '#F78513', color: 'white', marginRight: '10px' }} id="updated">Page 4</Button>
                <Button onClick={()=> {
                    Navigate(`/edit-five?name=${title}&id=${paramaId}`,{state:{
                        paramaId: paramaId,
                        title: title,
                      }
                      });
                }}>Page 5</Button>
                </div>
              </form>
             </div>
          </div>
  
      </div>
    )
  }

export default EditFourth