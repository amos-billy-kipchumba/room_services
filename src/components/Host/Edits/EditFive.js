import React, {useState, useEffect} from 'react'
import './EditFive.css'
import Add from '@mui/icons-material/Add';
import {Link} from 'react-router-dom'
import axios from 'axios'
import { Button } from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom';
import BaseURL from '../../BaseUrl';
import swal from 'sweetalert';
import { MoreHoriz } from '@mui/icons-material';
function EditFive() {

    const [searchParams] = useSearchParams();
    
    var paramaId = searchParams.get('id');

    var title = searchParams.get('name');

  const userData = JSON.parse(localStorage.getItem('user-info'));
  const [userId] = useState(userData.data.id);
  const [imageToBe, setImageToBe] = useState(null);

  var [edit1, setEdit1] = useState(false)
  var [box1, setBox1] = useState("0");
  var [box1Dist, setBox1Dist] = useState('');

  var [edit2, setEdit2] = useState(false)
  var [box2, setBox2] = useState("0");
  var [box2Dist, setBox2Dist] = useState('');

  var [edit3, setEdit3] = useState(false)
  var [box3, setBox3] = useState("0");
  var [box3Dist, setBox3Dist] = useState('');

  var [edit4, setEdit4] = useState(false)
  var [box4, setBox4] = useState("0");
  var [box4Dist, setBox4Dist] = useState('');

  var [edit5, setEdit5] = useState(false)
  var [box5, setBox5] = useState("0");
  var [box5Dist, setBox5Dist] = useState('');

  var [edit6, setEdit6] = useState(false)
  var [box6, setBox6] = useState("0");
  var [box6Dist, setBox6Dist] = useState('');

  var [edit7, setEdit7] = useState(false)
  var [box7, setBox7] = useState("0");
  var [box7Dist, setBox7Dist] = useState('');

  var [edit8, setEdit8] = useState(false)
  var [box8, setBox8] = useState("0");
  var [box8Dist, setBox8Dist] = useState('');

  var [edit9, setEdit9] = useState(false)
  var [box9, setBox9] = useState("0");
  var [box9Dist, setBox9Dist] = useState('');

  var [edit10, setEdit10] = useState(false)
  var [box10, setBox10] = useState("0");
  var [box10Dist, setBox10Dist] = useState('');

  var [edit11, setEdit11] = useState(false)
  var [box11, setBox11] = useState("0");
  var [box11Dist, setBox11Dist] = useState('');

  var [edit12, setEdit12] = useState(false)
  var [box12, setBox12] = useState("0");
  var [box12Dist, setBox12Dist] = useState('');

  var [edit13, setEdit13] = useState(false)
  var [box13, setBox13] = useState("0");
  var [box13Dist, setBox13Dist] = useState('');


  var [edit14, setEdit14] = useState(false)
  var [box14, setBox14] = useState("0");
  var [box14Dist, setBox14Dist] = useState('');

  var [edit15, setEdit15] = useState(false)
  var [box15, setBox15] = useState("0");
  var [box15Dist, setBox15Dist] = useState('');


  var [edit16, setEdit16] = useState(false)
  var [box16, setBox16] = useState("0");
  var [box16Dist, setBox16Dist] = useState('');

  var [edit17, setEdit17] = useState(false)
  var [box17, setBox17] = useState("0");
  var [box17Dist, setBox17Dist] = useState('');

  var [edit18, setEdit18] = useState(false)
  var [box18, setBox18] = useState("0");
  var [box18Dist, setBox18Dist] = useState('');

  var [edit19, setEdit19] = useState(false)
  var [box19, setBox19] = useState("0");
  var [box19Dist, setBox19Dist] = useState('');

  var [edit20, setEdit20] = useState(false)
  var [box20, setBox20] = useState("0");
  var [box20Dist, setBox20Dist] = useState('');

  var [edit21, setEdit21] = useState(false)
  var [box21, setBox21] = useState("0");
  var [box21Dist, setBox21Dist] = useState('');

  var [edit22, setEdit22] = useState(false)
  var [box22, setBox22] = useState("0");
  var [box22Dist, setBox22Dist] = useState('');


  var [edit23, setEdit23] = useState(false)
  var [box23, setBox23] = useState("0");
  var [box23Dist, setBox23Dist] = useState('');

  var [edit24, setEdit24] = useState(false)
  var [box24, setBox24] = useState("0");
  var [box24Dist, setBox24Dist] = useState('');

  const Navigate = useNavigate();
 

  useEffect(()=>{
    const realTwo = async () => {
      const love = await axios.get(`${BaseURL}/api/get-nearby-services/${paramaId}`);
      if(love.data.status === 200){

        if(love.data.NearbyServices[0].aqua_farm === "1"){
            setEdit1(true);
            setBox1("1");
            setBox1Dist(love.data.NearbyServices[0].aqua_farm_distance)
        }

        if(love.data.NearbyServices[0].barber === "1"){
            setEdit2(true);
            setBox2("1");
            setBox2Dist(love.data.NearbyServices[0].barber_distance)
        }

        if(love.data.NearbyServices[0].bookshop === "1"){
            setEdit3(true);
            setBox3("1");
            setBox3Dist(love.data.NearbyServices[0].bookshop_distance)
        }

        if(love.data.NearbyServices[0].butchery === "1"){
            setEdit4(true);
            setBox4("1");
            setBox4Dist(love.data.NearbyServices[0].butchery_distance)
        }

        if(love.data.NearbyServices[0].cake_baker === "1"){
            setEdit5(true);
            setBox5("1");
            setBox5Dist(love.data.NearbyServices[0].cake_baker_distance)
        }

        if(love.data.NearbyServices[0].chef === "1"){
            setEdit6(true);
            setBox6("1");
            setBox6Dist(love.data.NearbyServices[0].chef_distance)
        }

        if(love.data.NearbyServices[0].chemist === "1"){
            setEdit7(true);
            setBox7("1");
            setBox7Dist(love.data.NearbyServices[0].chemist_distance)
        }

        if(love.data.NearbyServices[0].creamy_inn === "1"){
            setEdit8(true);
            setBox8("1");
            setBox8Dist(love.data.NearbyServices[0].creamy_inn_distance)
        }

        if(love.data.NearbyServices[0].event_planner === "1"){
            setEdit9(true);
            setBox9("1");
            setBox9Dist(love.data.NearbyServices[0].event_planner_distance)
        }

        if(love.data.NearbyServices[0].grocery_store === "1"){
            setEdit10(true);
            setBox10("1");
            setBox10Dist(love.data.NearbyServices[0].grocery_store_distance)
        }

        if(love.data.NearbyServices[0].hotel === "1"){
            setEdit11(true);
            setBox11("1");
            setBox11Dist(love.data.NearbyServices[0].hotel_distance)
        }

        if(love.data.NearbyServices[0].java === "1"){
            setEdit12(true);
            setBox12("1");
            setBox12Dist(love.data.NearbyServices[0].java_distance)
        }

        if(love.data.NearbyServices[0].kfc === "1"){
            setEdit13(true);
            setBox13("1");
            setBox13Dist(love.data.NearbyServices[0].kfc_distance)
        }

        if(love.data.NearbyServices[0].library === "1"){
            setEdit14(true);
            setBox14("1");
            setBox14Dist(love.data.NearbyServices[0].kfc_distance)
        }

        if(love.data.NearbyServices[0].maasai_market === "1"){
            setEdit15(true);
            setBox15("1");
            setBox15Dist(love.data.NearbyServices[0].maasai_market_distance)
        }

        if(love.data.NearbyServices[0].mini_mart === "1"){
            setEdit16(true);
            setBox16("1");
            setBox16Dist(love.data.NearbyServices[0].mini_mart_distance)
        }

        if(love.data.NearbyServices[0].organic_farm === "1"){
            setEdit17(true);
            setBox17("1");
            setBox17Dist(love.data.NearbyServices[0].organic_farm_distance)
        }

        if(love.data.NearbyServices[0].petrol_station === "1"){
            setEdit18(true);
            setBox18("1");
            setBox18Dist(love.data.NearbyServices[0].petrol_station_distance)
        }

        if(love.data.NearbyServices[0].pizza_inn === "1"){
            setEdit19(true);
            setBox19("1");
            setBox19Dist(love.data.NearbyServices[0].pizza_inn_distance)
        }

        if(love.data.NearbyServices[0].ranch === "1"){
            setEdit20(true);
            setBox20("1");
            setBox20Dist(love.data.NearbyServices[0].ranch_distance)
        }

        if(love.data.NearbyServices[0].salon === "1"){
            setEdit21(true);
            setBox21("1");
            setBox21Dist(love.data.NearbyServices[0].salon_distance)
        }

        if(love.data.NearbyServices[0].spice_mart === "1"){
            setEdit22(true);
            setBox22("1");
            setBox22Dist(love.data.NearbyServices[0].spice_mart_distance)
        }

        if(love.data.NearbyServices[0].supermarket === "1"){
            setEdit23(true);
            setBox23("1");
            setBox23Dist(love.data.NearbyServices[0].supermarket_distance)
        }

        if(love.data.NearbyServices[0].tent_hire === "1"){
            setEdit24(true);
            setBox24("1");
            setBox24Dist(love.data.NearbyServices[0].tent_hire_distance)
        }
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

    //   Checked boxes
    const handleBox1 = () => {
        if(box1 === "1"){
            setEdit1(false);
            setBox1("0");
        }
        if(box1 === "0"){
            setEdit1(true);
            setBox1("1");
        }
    }

    const handleBox2 = () => {
        if(box2 === "1"){
            setEdit2(false);
            setBox2("0");
        }
        if(box2 === "0"){
            setEdit2(true);
            setBox2("1");
        }
    }

    const handleBox3 = () => {
        if(box3 === "1"){
            setEdit3(false);
            setBox3("0");
        }
        if(box3 === "0"){
            setEdit3(true);
            setBox3("1");
        }
    }

    const handleBox4 = () => {
        if(box4 === "1"){
            setEdit4(false);
            setBox4("0");
        }
        if(box4 === "0"){
            setEdit4(true);
            setBox4("1");
        }
    }

    const handleBox5 = () => {
        if(box5 === "1"){
            setEdit5(false);
            setBox5("0");
        }
        if(box5 === "0"){
            setEdit5(true);
            setBox5("1");
        }
    }

    const handleBox6 = () => {
        if(box6 === "1"){
            setEdit6(false);
            setBox6("0");
        }
        if(box6 === "0"){
            setEdit6(true);
            setBox6("1");
        }
    }

    const handleBox7 = () => {
        if(box7 === "1"){
            setEdit7(false);
            setBox7("0");
        }
        if(box7 === "0"){
            setEdit7(true);
            setBox7("1");
        }
    }


    const handleBox8 = () => {
        if(box8 === "1"){
            setEdit8(false);
            setBox8("0");
        }
        if(box8 === "0"){
            setEdit8(true);
            setBox8("1");
        }
    }

    const handleBox9 = () => {
        if(box9 === "1"){
            setEdit9(false);
            setBox9("0");
        }
        if(box9 === "0"){
            setEdit9(true);
            setBox9("1");
        }
    }

    const handleBox10 = () => {
        if(box10 === "1"){
            setEdit10(false);
            setBox10("0");
        }
        if(box10 === "0"){
            setEdit10(true);
            setBox10("1");
        }
    }

    const handleBox11 = () => {
        if(box11 === "1"){
            setEdit11(false);
            setBox11("0");
        }
        if(box11 === "0"){
            setEdit11(true);
            setBox11("1");
        }
    }


    const handleBox12 = () => {
        if(box12 === "1"){
            setEdit12(false);
            setBox12("0");
        }
        if(box12 === "0"){
            setEdit12(true);
            setBox12("1");
        }
    }

    const handleBox13 = () => {
        if(box13 === "1"){
            setEdit13(false);
            setBox13("0");
        }
        if(box13 === "0"){
            setEdit13(true);
            setBox13("1");
        }
    }


    const handleBox14 = () => {
        if(box14 === "1"){
            setEdit14(false);
            setBox14("0");
        }
        if(box14 === "0"){
            setEdit14(true);
            setBox14("1");
        }
    }

    const handleBox15 = () => {
        if(box15 === "1"){
            setEdit15(false);
            setBox15("0");
        }
        if(box15 === "0"){
            setEdit15(true);
            setBox15("1");
        }
    }

    const handleBox16 = () => {
        if(box16 === "1"){
            setEdit16(false);
            setBox16("0");
        }
        if(box16 === "0"){
            setEdit16(true);
            setBox16("1");
        }
    }

    const handleBox17 = () => {
        if(box17 === "1"){
            setEdit17(false);
            setBox17("0");
        }
        if(box17 === "0"){
            setEdit17(true);
            setBox17("1");
        }
    }

    const handleBox18 = () => {
        if(box18 === "1"){
            setEdit18(false);
            setBox18("0");
        }
        if(box18 === "0"){
            setEdit18(true);
            setBox18("1");
        }
    }

    const handleBox19 = () => {
        if(box19 === "1"){
            setEdit19(false);
            setBox19("0");
        }
        if(box19 === "0"){
            setEdit19(true);
            setBox19("1");
        }
    }

    const handleBox20 = () => {
        if(box20 === "1"){
            setEdit20(false);
            setBox20("0");
        }
        if(box20 === "0"){
            setEdit20(true);
            setBox20("1");
        }
    }

    const handleBox21 = () => {
        if(box21 === "1"){
            setEdit21(false);
            setBox21("0");
        }
        if(box21 === "0"){
            setEdit21(true);
            setBox21("1");
        }
    }

    const handleBox22 = () => {
        if(box22 === "1"){
            setEdit22(false);
            setBox22("0");
        }
        if(box22 === "0"){
            setEdit22(true);
            setBox22("1");
        }
    }

    const handleBox23 = () => {
        if(box23 === "1"){
            setEdit23(false);
            setBox23("0");
        }
        if(box23 === "0"){
            setEdit23(true);
            setBox23("1");
        }
    }

    const handleBox24 = () => {
        if(box24 === "1"){
            setEdit24(false);
            setBox24("0");
        }
        if(box24 === "0"){
            setEdit24(true);
            setBox24("1");
        }
    }
    // end

  const handleUpdate = (e) => {
    e.preventDefault();
    const url = `${BaseURL}/api/update-nearby-services/${paramaId}`;
    const data = new FormData();
    data.append('aqua_farm', box1);
    data.append('aqua_farm_distance', box1Dist);
    data.append('barber', box2);
    data.append('barber_distance', box2Dist);
    data.append('bookshop', box3);
    data.append('bookshop_distance', box3Dist);
    data.append('butchery', box4);
    data.append('butchery_distance', box4Dist);
    data.append('cake_baker', box5);
    data.append('cake_baker_distance', box5Dist);
    data.append('chef', box6);
    data.append('chef_distance', box6Dist);
    data.append('chemist', box7);
    data.append('chemist_distance', box7Dist);
    data.append('creamy_inn', box8);
    data.append('creamy_inn_distance', box8Dist);
    data.append('event_planner', box9);
    data.append('event_planner_distance', box9Dist);
    data.append('grocery_store', box10);
    data.append('grocery_store_distance', box10Dist);
    data.append('hotel', box11);
    data.append('hotel_distance', box11Dist);
    data.append('java', box12);
    data.append('java_distance', box12Dist);
    data.append('kfc', box13);
    data.append('kfc_distance', box13Dist);
    data.append('library', box14);
    data.append('library_distance', box14Dist);
    data.append('maasai_market', box15);
    data.append('maasai_market_distance', box15Dist);
    data.append('mini_mart', box16);
    data.append('mini_mart_distance', box16Dist);
    data.append('organic_farm', box17);
    data.append('organic_farm_distance', box17Dist);
    data.append('petrol_station', box18);
    data.append('petrol_station_distance', box18Dist);
    data.append('pizza_inn', box19);
    data.append('pizza_inn_distance', box19Dist);
    data.append('ranch', box20);
    data.append('ranch_distance', box20Dist);
    data.append('salon', box21);
    data.append('salon_distance', box21Dist);
    data.append('spice_mart', box22);
    data.append('spice_mart_distance', box22Dist);
    data.append('supermarket', box23);
    data.append('supermarket_distance', box23Dist);
    data.append('tent_hire', box24);
    data.append('tent_hire_distance', box24Dist);
    data.append('user_id', userId);
    data.append('house_id', paramaId);

    axios.post(url,data).then((res) => {
      if(res.data.status === 200) {
        swal('success','house details updated','success')
        document.getElementById('updated').innerHTML = "Updated";
      }
    });
   
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
      <div className='edit-five__page'>
  
          <div className='edit-five__info'>
             <div className="edit-five__info-left">
              <div className='incase-you-know'>
                  <div className="host-image"><img src={imageToBe} alt="" /></div>
                  <div>
                      <h4>Henry Klein</h4>
                      <p>Host</p>
                  </div>
                  <div className='editFirstMenuBar' onClick={handleMenuBar}><h2 style={{ display: 'flex', alignItems: 'center' }}> <MoreHoriz /> </h2></div>
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
                <li onClick={()=> Navigate('/host-profile')}>Settings</li>
                <li onClick={handleLogout}
                className='baby'>Logout</li>
              </ul>
              :
              null
              }
             </div>
             <div className="edit-five__info-right">
              <form className="edit-five__info-right-block" encType='multipart/form-data' onSubmit={handleUpdate}>
                <div className='stress-tupu'>
                    <div className='stress-container'>
                        <h4>Aqua farm</h4>
                        <input type="checkbox" name="aqua_farm" checked={edit1} value={box1} onChange={handleBox1} />
                        {box1 === "1" ? 
                        <>
                            <p>Distance in Km</p>
                            <input type='number' name='aqua_distance' value={box1Dist} placeholder="Aqua farm distance[km]" onChange={(e)=>setBox1Dist(e.target.value)} />
                        </>
                        :
                        null
                        }
                    </div>

                    <div className='stress-container'>
                        <h4>Barber</h4>
                        <input type="checkbox" name="barber" checked={edit2} value={box2} onChange={handleBox2} />
                        {box2 === "1" ? 
                        <>
                            <p>Distance in Km</p>
                            <input type='number' name='barber_distance' value={box2Dist} placeholder="Barber distance[km]" onChange={(e)=>setBox2Dist(e.target.value)} />
                        </>
                        :
                        null
                        }
                    </div>

                    <div className='stress-container'>
                        <h4>Bookshop</h4>
                        <input type="checkbox" name="bookshop" checked={edit3} value={box3} onChange={handleBox3} />
                        {box3 === "1" ?
                        <>
                            <p>Distance in Km</p> 
                            <input type='number' name='bookshop_distance' value={box3Dist} placeholder="Bookshop distance[km]" onChange={(e)=>setBox3Dist(e.target.value)} />
                        </>
                        :
                        null
                        }
                    </div>

                    <div className='stress-container'>
                        <h4>Butchery</h4>
                        <input type="checkbox" name="butchery" checked={edit4} value={box4} onChange={handleBox4} />
                        {box4 === "1" ? 
                        <>
                            <p>Distance in Km</p>
                            <input type='number' name='butchery_distance' value={box4Dist} placeholder="Butchery distance[km]" onChange={(e)=>setBox4Dist(e.target.value)} />
                        </>
                        :
                        null
                        }
                    </div>

                    <div className='stress-container'>
                        <h4>Cake baker</h4>
                        <input type="checkbox" name="cake_baker" checked={edit5} value={box5} onChange={handleBox5} />
                        <p>Distance in Km</p>
                        {box5 === "1" ? 
                        <input type='number' name='cake_baker_distance' value={box5Dist} placeholder="Cake baker distance[km]" onChange={(e)=>setBox5Dist(e.target.value)} />
                        :
                        null
                        }
                    </div>

                    <div className='stress-container'>
                        <h4>Chef</h4>
                        <input type="checkbox" name="chef" checked={edit6} value={box6} onChange={handleBox6} />
                        {box6 === "1" ? 
                        <>
                            <p>Distance in Km</p>
                            <input type='number' name='chef_distance' value={box6Dist} placeholder="Chef distance[km]" onChange={(e)=>setBox6Dist(e.target.value)} />
                        </>
                        :
                        null
                        }
                    </div>

                    <div className='stress-container'>
                        <h4>Chemist</h4>
                        <input type="checkbox" name="chemist" checked={edit7} value={box7} onChange={handleBox7} />
                        {box7 === "1" ? 
                        <>
                            <p>Distance in Km</p>
                            <input type='number' name='chemist_distance' value={box7Dist} placeholder="Chemist distance[km]" onChange={(e)=>setBox7Dist(e.target.value)} />
                        </>
                        :
                        null
                        }
                    </div>

                    <div className='stress-container'>
                        <h4>Creamy inn</h4>
                        <input type="checkbox" name="creamy_inn" checked={edit8} value={box8} onChange={handleBox8} />
                        {box8 === "1" ? 
                        <>
                            <p>Distance in Km</p>
                            <input type='number' name='creamy_inn_distance' value={box8Dist} placeholder="Creamy inn distance[km]" onChange={(e)=>setBox8Dist(e.target.value)} />
                        </>
                        :
                        null
                        }
                    </div>

                    <div className='stress-container'>
                        <h4>Event planner</h4>
                        <input type="checkbox" name="event_planner" checked={edit9} value={box9} onChange={handleBox9} />
                        {box9 === "1" ? 
                        <>
                            <p>Distance in Km</p>
                            <input type='number' name='event_planner_distance' value={box9Dist} placeholder="Event planner distance[km]" onChange={(e)=>setBox9Dist(e.target.value)} />
                        </>
                        :
                        null
                        }
                    </div>

                    <div className='stress-container'>
                        <h4>Grocery store</h4>
                        <input type="checkbox" name="grocery_store" checked={edit10} value={box10} onChange={handleBox10} />
                        {box10 === "1" ? 
                        <>
                            <p>Distance in Km</p>
                            <input type='number' name='grocery_store_distance' value={box10Dist} placeholder="Grocery store distance[km]" onChange={(e)=>setBox10Dist(e.target.value)} />
                        </>
                        :
                        null
                        }
                    </div>

                    <div className='stress-container'>
                        <h4>Hotel</h4>
                        <input type="checkbox" name="hotel" checked={edit11} value={box11} onChange={handleBox11} />
                        {box11 === "1" ? 
                        <>
                            <p>Distance in Km</p>
                            <input type='number' name='hotel_distance' value={box11Dist} placeholder="Hotel distance[km]" onChange={(e)=>setBox11Dist(e.target.value)} />
                        </>
                        :
                        null
                        }
                    </div>

                    <div className='stress-container'>
                        <h4>Java</h4>
                        <input type="checkbox" name="java" checked={edit12} value={box12} onChange={handleBox12} />
                        {box12 === "1" ? 
                        <>
                            <p>Distance in Km</p>
                            <input type='number' name='java_distance' value={box12Dist} placeholder="Java distance[km]" onChange={(e)=>setBox12Dist(e.target.value)} />
                        </>
                        :
                        null
                        }
                    </div>

                    <div className='stress-container'>
                        <h4>KFC</h4>
                        <input type="checkbox" name="kfc" checked={edit13} value={box13} onChange={handleBox13} />
                        {box13 === "1" ? 
                        <>
                            <p>Distance in Km</p>
                            <input type='number' name='kfc_distance' value={box13Dist} placeholder="kfc distance[km]" onChange={(e)=>setBox13Dist(e.target.value)} />
                        </>
                        :
                        null
                        }
                    </div>

                    <div className='stress-container'>
                        <h4>Library</h4>
                        <input type="checkbox" name="library" checked={edit14} value={box14} onChange={handleBox14} />
                        {box14 === "1" ? 
                        <>
                            <p>Distance in Km</p>
                            <input type='number' name='library_distance' value={box14Dist} placeholder="library distance[km]" onChange={(e)=>setBox14Dist(e.target.value)} />
                        </>
                        :
                        null
                        }
                    </div>

                    <div className='stress-container'>
                        <h4>Maasai market</h4>
                        <input type="checkbox" name="maasai market" checked={edit15} value={box15} onChange={handleBox15} />
                        {box15 === "1" ? 
                        <>
                            <p>Distance in Km</p>
                            <input type='number' name='maasai_market_distance' value={box15Dist} placeholder="maasai market distance[km]" onChange={(e)=>setBox15Dist(e.target.value)} />
                        </>
                        :
                        null
                        }
                    </div>

                    <div className='stress-container'>
                        <h4>Mini mart</h4>
                        <input type="checkbox" name="mini mart" checked={edit16} value={box16} onChange={handleBox16} />
                        {box16 === "1" ? 
                        <>
                            <p>Distance in Km</p>
                            <input type='number' name='mini_mart' value={box16Dist} placeholder="mini mart distance[km]" onChange={(e)=>setBox16Dist(e.target.value)} />
                        </>
                        :
                        null
                        }
                    </div>

                    <div className='stress-container'>
                        <h4>Organic farm</h4>
                        <input type="checkbox" name="organic farm" checked={edit17} value={box17} onChange={handleBox17} />
                        {box17 === "1" ? 
                        <>
                            <p>Distance in Km</p>
                            <input type='number' name='organic farm' value={box17Dist} placeholder="organic farm distance[km]" onChange={(e)=>setBox17Dist(e.target.value)} />
                        </>
                        :
                        null
                        }
                    </div>

                    <div className='stress-container'>
                        <h4>Petrol station</h4>
                        <input type="checkbox" name="petrol station" checked={edit18} value={box18} onChange={handleBox18} />
                        {box18 === "1" ? 
                        <>
                            <p>Distance in Km</p>
                            <input type='number' name='petrol station' value={box18Dist} placeholder="petrol station distance[km]" onChange={(e)=>setBox18Dist(e.target.value)} />
                        </>
                        :
                        null
                        }
                    </div>

                    <div className='stress-container'>
                        <h4>Pizza inn</h4>
                        <input type="checkbox" name="pizza inn" checked={edit19} value={box19} onChange={handleBox19} />
                        {box19 === "1" ? 
                        <>
                            <p>Distance in Km</p>
                            <input type='number' name='pizza inn' value={box19Dist} placeholder="pizza inn distance[km]" onChange={(e)=>setBox19Dist(e.target.value)} />
                        </>
                        :
                        null
                        }
                    </div>

                    <div className='stress-container'>
                        <h4>Ranch</h4>
                        <input type="checkbox" name="ranch" checked={edit20} value={box20} onChange={handleBox20} />
                        {box20 === "1" ? 
                        <>
                            <p>Distance in Km</p>
                            <input type='number' name='ranch distance' value={box20Dist} placeholder="ranch distance[km]" onChange={(e)=>setBox20Dist(e.target.value)} />
                        </>
                        :
                        null
                        }
                    </div>

                    <div className='stress-container'>
                        <h4>Salon</h4>
                        <input type="checkbox" name="salon" checked={edit21} value={box21} onChange={handleBox21} />
                        {box21 === "1" ? 
                        <>
                            <p>Distance in Km</p>
                            <input type='number' name='salon distance' value={box21Dist} placeholder="salon distance[km]" onChange={(e)=>setBox21Dist(e.target.value)} />
                        </>
                        :
                        null
                        }
                    </div>

                    <div className='stress-container'>
                        <h4>Spice mart</h4>
                        <input type="checkbox" name="spice mart" checked={edit22} value={box22} onChange={handleBox22} />
                        {box22 === "1" ? 
                        <>
                            <p>Distance in Km</p>
                            <input type='number' name='spice mart' value={box22Dist} placeholder="spice mart distance[km]" onChange={(e)=>setBox22Dist(e.target.value)} />
                        </>
                        :
                        null
                        }
                    </div>

                    <div className='stress-container'>
                        <h4>Supermarket</h4>
                        <input type="checkbox" name="supermarket" checked={edit23} value={box23} onChange={handleBox23} />
                        {box23 === "1" ? 
                        <>
                            <p>Distance in Km</p>
                            <input type='number' name='supermarket' value={box23Dist} placeholder="supermarket distance[km]" onChange={(e)=>setBox23Dist(e.target.value)} />
                        </>
                        :
                        null
                        }
                    </div>

                    <div className='stress-container'>
                        <h4>Tent hire</h4>
                        <input type="checkbox" name="tent hire" checked={edit24} value={box24} onChange={handleBox24} />
                        {box24 === "1" ? 
                        <>
                            <p>Distance in Km</p>
                            <input type='number' name='tent_hire distance' value={box24Dist} placeholder="tent hire distance[km]" onChange={(e)=>setBox24Dist(e.target.value)} />
                        </>
                        :
                        null
                        }
                    </div>
                </div>

                <div className="edit-five__info-right-buttonOne"><Button type="submit">Update (5/5) </Button></div>

                <div className="edit-five__info-right-buttonTwo">
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
                }} style={{ marginRight: '10px' }}>Page 4</Button>
                <Button onClick={()=> {
                    Navigate(`/edit-five?name=${title}&id=${paramaId}`,{state:{
                        paramaId: paramaId,
                        title: title,
                      }
                      });
                }} style={{ backgroundColor: '#F78513', color: 'white' }} id="updated">Page 5</Button>
                </div>
              </form>
             </div>
          </div>
  
      </div>
    )
  }

export default EditFive