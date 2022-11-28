import React, {Component, useEffect} from 'react'
import './PageFiveAdd.css'
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import axios from 'axios'
import {useNavigate} from 'react-router-dom';
import { MoreHoriz } from '@mui/icons-material';
import BaseURL from '../../BaseUrl';
import swal from 'sweetalert';
class PageFiveAdd extends Component {
    constructor() {
      super()
      this.state = {
        options: ["apartment", "town house", "condominium", "bungalow", "duplex", "terraced house", "single-family home", "mobile home", "modular building", "cottage", "ranch", "i-house", "gable-front", "split-level", "tower", "long house", "house barn", "courtyard house", "snout house", "octagon house", "split house", "villa", "mansion", "palace", "castle"],
        image: '',
        houseTitle: '',
        location: '',
        description: '',
        price: '',
        userId: null,
        userDetails: [],
        hostImage: null,
        house_type: '',
        something: [],
        firstName: '',
        showMenu: false,
        house_id: '',

        butchery: 0,
        mart: 0,
        supermarket: 0,
        grocery: 0,
        spice_mart: 0,
        maasai_market: 0,
        cake_baker: 0,
        tent_hire: 0,
        event_planner: 0,
        organic_farm: 0,
        ranch: 0,
        aqua_farm: 0,
        chemist: 0,
        bookshop: 0,
        library: 0,
        chef: 0,
        pizza: 0,
        creamy_inn: 0,
        kfc: 0,
        petrol_station: 0,
        java: 0,
        hotel: 0,
        salon: 0,
        barber: 0,
        butchery_distance: '',
        mini_mart_distance: '',
        supermarket_distance: '',
        grocery_store_distance: '',
        spice_mart_distance: '',
        maasai_market_distance: '',
        cake_baker_distance: '',
        tent_hire_distance: '',
        event_planner_distance: '',
        organic_farm_distance: '',
        ranch_distance: '',
        aqua_farm_distance: '',
        chemist_distance: '',
        bookshop_distance: '',
        library_distance: '',
        chef_distance: '',
        pizza_inn_distance: '',
        creamy_inn_distance: '',
        kfc_distance: '',
        petrol_station_distance: '',
        java_distance: '',
        hotel_distance: '',
        salon_distance: '',
        barber_distance: '',
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleImage = this.handleImage.bind(this)
      this.onOptionChangeHandler = this.onOptionChangeHandler.bind(this)
      this.handleMenuBar = this.handleMenuBar.bind(this)

      this.handleButchery = this.handleButchery.bind(this)
      this.handleMart = this.handleMart.bind(this)
      this.handleSupermarket = this.handleSupermarket.bind(this)
      this.handleGrocery = this.handleGrocery.bind(this)
      this.handleSpiceMart = this.handleSpiceMart.bind(this)
      this.handleMaasaiMarket = this.handleMaasaiMarket.bind(this)
      this.handleCakeBaker = this.handleCakeBaker.bind(this)
      this.handleTentHire = this.handleTentHire.bind(this)
      this.handleEventPlanner = this.handleEventPlanner.bind(this)
      this.handleOrganicFarm = this.handleOrganicFarm.bind(this)
      this.handleRanch = this.handleRanch.bind(this)
      this.handleAquaFarm = this.handleAquaFarm.bind(this)
      this.handleChemist = this.handleChemist.bind(this)
      this.handleBookshop = this.handleBookshop.bind(this)
      this.handleLibrary = this.handleLibrary.bind(this)
      this.handleChef = this.handleChef.bind(this)
      this.handlePizza = this.handlePizza.bind(this)
      this.handleCreamInn = this.handleCreamInn.bind(this)
      this.handleKfc = this.handleKfc.bind(this)
      this.handlePetrolStation = this.handlePetrolStation.bind(this)
      this.handleJava = this.handleJava.bind(this)
      this.handleHotel = this.handleHotel.bind(this)
      this.handleSalon = this.handleSalon.bind(this)
      this.handleBarber = this.handleBarber.bind(this)

      this.handleDistances = this.handleDistances.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleImage(e) {
        this.setState({
            image: e.target.files[0],
        })
    }

    onOptionChangeHandler(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    componentDidMount = async () => {
        const userData = JSON.parse(localStorage.getItem('user-info'));
        const userInfo = userData;
        this.setState({
            userId: userInfo.data.id,
            firstName:userInfo.data.first_name,
        });

       const data = await axios.get(`${BaseURL}/api/get-house-details`);


        const SendId = this.state.userId;
        const request = await axios.get(`${BaseURL}/api/get-host-specific-details/${SendId}`);

        const houseDataDetail = JSON.parse(localStorage.getItem('house_data_detail_api'));
        this.setState({
            userDetails: request.data.hostSpecific,
            hostImage: `${BaseURL}/users/${request.data.hostSpecific.image}`,
            something: data,
            house_id: houseDataDetail.id,
        });

        if(window.innerWidth < 1024) {
            this.setState({
                showMenu: false,
            });
          }
        
          if(window.innerWidth > 1024) {
            this.setState({
                showMenu: true,
            });
          }
    }

   
    handleMenuBar = () => {
        this.setState({
            showMenu: !this.state.showMenu,
        });
    }


    //inputs for five
    handleButchery = () => {
        this.setState({
            butchery: 1,
        });
    }

    handleMart = () => {
        this.setState({
            mart: 1,
        });
    }

    handleSupermarket = () => {
        this.setState({
            supermarket: 1,
        });
    }

    handleGrocery = () => {
        this.setState({
            grocery: 1,
        });
    }

    handleSpiceMart = () => {
        this.setState({
            spice_mart: 1,
        });
    }

    handleMaasaiMarket = () => {
        this.setState({
            maasai_market: 1,
        });
    }

    handleCakeBaker = () => {
        this.setState({
            cake_baker: 1,
        });
    }

    handleTentHire = () => {
        this.setState({
            tent_hire: 1,
        });
    } 

    handleChemist = () => {
        this.setState({
            chemist: 1,
        });
    } 


    handleEventPlanner = () => {
        this.setState({
            event_planner: 1,
        });
    }

    handleOrganicFarm = () => {
        this.setState({
            organic_farm: 1,
        });
    }

    handleRanch = () => {
        this.setState({
            ranch: 1,
        });
    }

    handleAquaFarm = () => {
        this.setState({
            aqua_farm: 1,
        });
    }


    handleBookshop = () => {
        this.setState({
            bookshop: 1,
        });
    }

    handleLibrary = () => {
        this.setState({
            library: 1,
        });
    }

    handleChef = () => {
        this.setState({
            chef: 1,
        });
    }

    handlePizza = () => {
        this.setState({
            pizza: 1,
        });
    }

    handleCreamInn = () => {
        this.setState({
            creamy_inn: 1,
        });
    }

    handleKfc = () => {
        this.setState({
            kfc: 1,
        });
    }

    handlePetrolStation = () => {
        this.setState({
            petrol_station: 1,
        });
    }

    handleJava = () => {
        this.setState({
            java: 1,
        })
    }

    handleHotel = () => {
        this.setState({
            hotel: 1,
        });
    }

    handleSalon = () => {
        this.setState({
            salon: 1,
        })
    }


    handleBarber = () => {
        this.setState({
            barber: 1,
        });
    }


    handleDistances = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    // end

    handleSubmit = async (e) => {
        e.preventDefault();

        const url = `${BaseURL}/api/add-nearby-services`;
        const data = new FormData();
        data.append('butchery', this.state.butchery);
        data.append('butchery_distance', this.state.butchery_distance);
        data.append('mini_mart', this.state.mart);
        data.append('mini_mart_distance', this.state.mini_mart_distance);
        data.append('supermarket', this.state.supermarket);
        data.append('supermarket_distance', this.state.supermarket_distance);
        data.append('grocery_store', this.state.grocery);
        data.append('grocery_store_distance', this.state.grocery_store_distance);
        data.append('spice_mart', this.state.spice_mart);
        data.append('spice_mart_distance', this.state.spice_mart_distance);
        data.append('maasai_market', this.state.maasai_market);
        data.append('maasai_market_distance', this.state.maasai_market_distance);
        data.append('cake_baker', this.state.cake_baker);
        data.append('cake_baker_distance', this.state.cake_baker_distance);
        data.append('tent_hire', this.state.tent_hire);
        data.append('tent_hire_distance', this.state.tent_hire_distance);
        data.append('event_planner', this.state.event_planner);
        data.append('event_planner_distance', this.state.event_planner_distance);
        data.append('organic_farm', this.state.organic_farm);
        data.append('organic_farm_distance', this.state.organic_farm_distance);
        data.append('ranch', this.state.ranch);
        data.append('ranch_distance', this.state.ranch_distance);
        data.append('aqua_farm', this.state.aqua_farm);
        data.append('aqua_farm_distance', this.state.aqua_farm_distance);
        data.append('chemist', this.state.chemist);
        data.append('chemist_distance', this.state.chemist_distance);
        data.append('bookshop', this.state.bookshop);
        data.append('bookshop_distance', this.state.bookshop_distance);
        data.append('library', this.state.library);
        data.append('library_distance', this.state.library_distance);
        data.append('chef', this.state.chef);
        data.append('chef_distance', this.state.chef_distance);
        data.append('pizza_inn', this.state.pizza);
        data.append('pizza_inn_distance', this.state.pizza_inn_distance);
        data.append('creamy_inn', this.state.creamy_inn);
        data.append('creamy_inn_distance', this.state.creamy_inn_distance);
        data.append('kfc', this.state.kfc);
        data.append('kfc_distance', this.state.kfc_distance);
        data.append('petrol_station', this.state.petrol_station);
        data.append('petrol_station_distance', this.state.petrol_station_distance);
        data.append('java', this.state.java);
        data.append('java_distance', this.state.java_distance);
        data.append('hotel', this.state.hotel);
        data.append('hotel_distance', this.state.hotel_distance);
        data.append('salon', this.state.salon);
        data.append('salon_distance', this.state.salon_distance);
        data.append('barber', this.state.barber);
        data.append('barber_distance', this.state.barber_distance);
        data.append('user_id', this.state.userId);
        data.append('house_id', this.state.house_id);

        axios.post(url,data).then(res => {
            if(res.data.status === 200) {
                this.setState({
                    butchery: 0,
                    mart: 0,
                    supermarket: 0,
                    grocery: 0,
                    spice_mart: 0,
                    maasai_market: 0,
                    cake_baker: 0,
                    tent_hire: 0,
                    event_planner: 0,
                    organic_farm: 0,
                    ranch: 0,
                    aqua_farm: 0,
                    chemist: 0,
                    bookshop: 0,
                    library: 0,
                    chef: 0,
                    pizza: 0,
                    creamy_inn: 0,
                    kfc: 0,
                    petrol_station: 0,
                    java: 0,
                    hotel: 0,
                    salon: 0,
                    barber: 0,
                    butchery_distance: '',
                    mini_mart_distance: '',
                    supermarket_distance: '',
                    grocery_store_distance: '',
                    spice_mart_distance: '',
                    maasai_market_distance: '',
                    cake_baker_distance: '',
                    tent_hire_distance: '',
                    event_planner_distance: '',
                    organic_farm_distance: '',
                    ranch_distance: '',
                    aqua_farm_distance: '',
                    chemist_distance: '',
                    bookshop_distance: '',
                    library_distance: '',
                    chef_distance: '',
                    pizza_inn_distance: '',
                    creamy_inn_distance: '',
                    kfc_distance: '',
                    petrol_station_distance: '',
                    java_distance: '',
                    hotel_distance: '',
                    salon_distance: '',
                    barber_distance: '',
                });
                document.getElementById('submit').disabled = "true";
                document.getElementById('submit').innerHTML = "congrats";
                swal('success','Congrats! You have successfully added a house','success');
                this.props.navigation('/host-houses');
            }
        })
    }
    
    render() {
        return (
            <div className='five__page'>
        
                <div className='five__info'>
                   <div className="five__info-left">
                    <div className='incase-you-know'>
                        <div className="host-image"><img src={this.state.hostImage} alt="" /></div>
                        <div>
                            <h4>{this.state.firstName}</h4>
                            <p>Host</p>
                        </div>
                        <div className='addHouseMenuBar' onClick={this.handleMenuBar}><h2 style={{ display: 'flex', alignItems: 'center' }}><MoreHoriz /></h2></div>
                    </div>
                    {this.state.showMenu ? 
                    <p>Navigation</p>
                    :
                    null 
                    }
        
                    {this.state.showMenu ? 
                    <ul className='host-navigation'>
                        <li><Link to="/main-host-account" className='lilo-link'>DashBoard</Link></li>
                    </ul>
                    :
                    null
                    }
                   </div>
                   <div className="five__info-right">
                        <div className="fill-up-detail-header"><p>Add your house details:</p> <p><span><strong>100%</strong></span> of completion</p></div>
                        <h4>Add available nearby services</h4>
                        <form onSubmit={this.handleSubmit}>
                            <div className='finish-form'>
                                <div className='finish-form-container'>
                                    <label>Butchery</label>
                                    <input type='checkbox' name="bathtub" value={this.state.butchery} onChange={this.handleButchery} />
                                    {this.state.butchery === 1 ?
                                        <input type="number" placeholder="How far away in Km?" name="butchery_distance" value={this.state.butchery_distance} onChange={this.handleDistances} />
                                        :
                                        null
                                    }
                                </div>

                                <div className='finish-form-container'>
                                    <label>Mini mart</label>
                                    <input type='checkbox' value={this.state.mart} onChange={this.handleMart} />
                                    {this.state.mart === 1 ?
                                    <input type="number" placeholder="How far away in Km?" name="mini_mart_distance" value={this.state.mini_mart_distance} onChange={this.handleDistances} />
                                    :
                                    null
                                    }
                                </div>

                                <div className='finish-form-container'>
                                    <label>Supermarket</label>
                                    <input type='checkbox' value={this.state.supermarket} onChange={this.handleSupermarket} />
                                    {this.state.supermarket === 1 ?
                                    <input type="number" placeholder="How far away in Km?" name="supermarket_distance" value={this.state.supermarket_distance} onChange={this.handleDistances} />
                                    :
                                    null
                                    }
                                </div>

                                <div className='finish-form-container'>
                                    <label>Grocery store</label>
                                    <input type='checkbox' value={this.state.grocery} onChange={this.handleGrocery} />
                                    {this.state.grocery === 1 ?
                                    <input type="number" placeholder="How far away in Km?" name="grocery_store_distance" value={this.state.grocery_store_distance} onChange={this.handleDistances} />
                                    :
                                    null
                                    }
                                </div>

                                <div className='finish-form-container'>
                                    <label>Spice mart</label>
                                    <input type='checkbox' value={this.state.spice_mart} onChange={this.handleSpiceMart} />
                                    {this.state.spice_mart === 1 ?
                                    <input type="number" placeholder="How far away in Km?" name="spice_mart_distance" value={this.state.spice_mart_distance} onChange={this.handleDistances} />
                                    :
                                    null
                                    }
                                </div>

                                <div className='finish-form-container'>
                                    <label>Maasai market</label>
                                    <input type='checkbox' value={this.state.maasai_market} onChange={this.handleMaasaiMarket} />
                                    {this.state.maasai_market === 1 ?
                                    <input type="number" placeholder="How far away in Km?" name="maasai_market_distance" value={this.state.maasai_market_distance} onChange={this.handleDistances} />
                                    :
                                    null
                                    }
                                </div>

                                <div className='finish-form-container'>
                                    <label>Cake baker</label>
                                    <input type='checkbox' value={this.state.cake_baker} onChange={this.handleCakeBaker} />
                                    {this.state.cake_baker === 1 ?
                                    <input type="number" placeholder="How far away in Km?" name="cake_baker_distance" value={this.state.cake_baker_distance} onChange={this.handleDistances} />
                                    :
                                    null
                                    }
                                </div>

                                <div className='finish-form-container'>
                                    <label>Tent hire</label>
                                    <input type='checkbox' value={this.state.tent_hire} onChange={this.handleTent} />
                                    {this.state.tent_hire === 1 ?
                                    <input type="number" placeholder="How far away in Km?" name="tent_hire_distance" value={this.state.tent_hire_distance} onChange={this.handleDistances} />
                                    :
                                    null
                                    }
                                </div>

                                <div className='finish-form-container'>
                                    <label>Event planner</label>
                                    <input type='checkbox' value={this.state.event_planner} onChange={this.handleEventPlanner} />
                                    {this.state.event_planner === 1 ?
                                    <input type="number" placeholder="How far away in Km?" name="event_planner_distance" value={this.state.event_planner_distance} onChange={this.handleDistances} />
                                    :
                                    null
                                    }
                                </div>

                                <div className='finish-form-container'>
                                    <label>Organic farm</label>
                                    <input type='checkbox' value={this.state.organic_farm} onChange={this.handleOrganicFarm} />
                                    {this.state.organic_farm === 1 ?
                                    <input type="number" placeholder="How far away in Km?" name="organic_farm_distance" value={this.state.organic_farm_distance} onChange={this.handleDistances} />
                                    :
                                    null
                                    }
                                </div>

                                <div className='finish-form-container'>
                                    <label>Ranch</label>
                                    <input type='checkbox' value={this.state.ranch} onChange={this.handleRanch} />
                                    {this.state.ranch === 1 ?
                                    <input type="number" placeholder="How far away in Km?" name="ranch_distance" value={this.state.ranch_distance} onChange={this.handleDistances} />
                                    :
                                    null
                                    }
                                </div>

                                <div className='finish-form-container'>
                                    <label>Aqua farm/center</label>
                                    <input type='checkbox' value={this.state.aqua_farm} onChange={this.handleAquaFarm} />
                                    {this.state.aqua_farm === 1 ?
                                    <input type="number" placeholder="How far away in Km?" name="aqua_farm_distance" value={this.state.aqua_farm_distance} onChange={this.handleDistances} />
                                    :
                                    null
                                    }
                                </div>

                                <div className='finish-form-container'>
                                    <label>Chemist</label>
                                    <input type='checkbox' value={this.state.chemist} onChange={this.handleChemist} />
                                    {this.state.chemist === 1 ?
                                    <input type="number" placeholder="How far away in Km?" name="chemist_distance" value={this.state.chemist_distance} onChange={this.handleDistances} />
                                    :
                                    null
                                    }
                                </div>

                                <div className='finish-form-container'>
                                    <label>Bookshop</label>
                                    <input type='checkbox' value={this.state.bookshop} onChange={this.handleBookshop} />
                                    {this.state.bookshop === 1 ?
                                    <input type="number" placeholder="How far away in Km?" name="bookshop_distance" value={this.state.bookshop_distance} onChange={this.handleDistances} />
                                    :
                                    null
                                    }
                                </div>

                                <div className='finish-form-container'>
                                    <label>Library</label>
                                    <input type='checkbox' value={this.state.library} onChange={this.handleLibrary} />
                                    {this.state.library === 1 ?
                                    <input type="number" placeholder="How far away in Km?" name="library_distance" value={this.state.library_distance} onChange={this.handleDistances} />
                                    :
                                    null
                                    }
                                </div>

                                <div className='finish-form-container'>
                                    <label>Chef</label>
                                    <input type='checkbox' value={this.state.chef} onChange={this.handleChef} />
                                    {this.state.chef === 1 ?
                                    <input type="number" placeholder="How far away in Km?" name="chef_distance" value={this.state.chef_distance} onChange={this.handleDistances} />
                                    :
                                    null
                                    }
                                </div>

                                <div className='finish-form-container'>
                                    <label>Pizza inn</label>
                                    <input type='checkbox' value={this.state.pizza} onChange={this.handlePizza} />
                                    {this.state.pizza === 1 ?
                                    <input type="number" placeholder="How far away in Km?" name="pizza_inn_distance" value={this.state.pizza_inn_distance} onChange={this.handleDistances} />
                                    :
                                    null
                                    }
                                </div>

                                <div className='finish-form-container'>
                                    <label>Creamy inn</label>
                                    <input type='checkbox' value={this.state.creamy_inn} onChange={this.handleCreamInn} />
                                    {this.state.creamy_inn === 1 ?
                                    <input type="number" placeholder="How far away in Km?" name="creamy_inn_distance" value={this.state.creamy_inn_distance} onChange={this.handleDistances} />
                                    :
                                    null
                                    }
                                </div>

                                <div className='finish-form-container'>
                                    <label>KFC</label>
                                    <input type='checkbox' value={this.state.kfc} onChange={this.handleKfc} />
                                    {this.state.kfc === 1 ?
                                    <input type="number" placeholder="How far away in Km?" name="kfc_distance" value={this.state.kfc_distance} onChange={this.handleDistances} />
                                    :
                                    null
                                    }
                                </div>

                                <div className='finish-form-container'>
                                    <label>Petrol station</label>
                                    <input type='checkbox' value={this.state.petrol_station} onChange={this.handlePetrolStation} />
                                    {this.state.petrol_station === 1 ?
                                    <input type="number" placeholder="How far away in Km?" name="petrol_station_distance" value={this.state.petrol_station_distance} onChange={this.handleDistances} />
                                    :
                                    null
                                    }
                                </div>

                                <div className='finish-form-container'>
                                    <label>Java</label>
                                    <input type='checkbox' value={this.state.java} onChange={this.handleJava} />
                                    {this.state.java === 1 ?
                                    <input type="number" placeholder="How far away in Km?" name="java_distance" value={this.state.java_distance} onChange={this.handleDistances} />
                                    :
                                    null
                                    }
                                </div>

                                <div className='finish-form-container'>
                                    <label>Hotel</label>
                                    <input type='checkbox' value={this.state.hotel} onChange={this.handleHotel} />
                                    {this.state.hotel === 1 ?
                                    <input type="number" placeholder="How far away in Km?" name="hotel_distance" value={this.state.hotel_distance} onChange={this.handleDistances} />
                                    :
                                    null
                                    }
                                </div>

                                <div className='finish-form-container'>
                                    <label>Salon</label>
                                    <input type='checkbox' value={this.state.salon} onChange={this.handleSalon} />
                                    {this.state.salon === 1 ?
                                    <input type="number" placeholder="How far away in Km?" name="salon_distance" value={this.state.salon_distance} onChange={this.handleDistances} />
                                    :
                                    null
                                    }
                                </div>

                                <div className='finish-form-container'>
                                    <label>Barber shop</label>
                                    <input type='checkbox' value={this.state.barber} onChange={this.handleBarber} />
                                    {this.state.barber === 1 ?
                                    <input type="number" placeholder="How far away in Km?" name="barber_distance" value={this.state.barber_distance} onChange={this.handleDistances} />
                                    :
                                    null
                                    }
                                </div>
                            </div>
                            <Button type='submit' id='submit'>Finish</Button>
                        </form>
                   </div>
                </div>
        
            </div>
          )
    }
}

export function PageFiveAddWithRouter(props) {
    const navigation = useNavigate();
    //Scroll to the top on load
    useEffect(()=>{
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    },[]);
    //End of Scroll to the top on load
    return <PageFiveAdd {...props} navigation={navigation} />;
  }

export default PageFiveAdd;