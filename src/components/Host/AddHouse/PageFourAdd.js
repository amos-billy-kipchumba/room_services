import React, {Component, useState, useEffect} from 'react'
import './PageFourAdd.css'
import Button from '@mui/material/Button';
import axios from 'axios';
import {useNavigate, Link} from 'react-router-dom';
import BaseURL from '../../BaseUrl';
import swal from 'sweetalert';
import { Add, MoreHoriz } from '@mui/icons-material';
class PageFourAdd extends Component {
    constructor() {
      super()
    
      this.state = {
         user: '',
         sitting_room: '',
         dinning_room: '',
         kitchen: '',
         bathroom: '',
         bedroom: '',
         swimming_pool: '',
         lake: '',
         beach: '',
         ocean_view: '',
         balcony: '',
         parking: '',
         front: '',
         right: '',
         left: '',
         back: '',
         aerial: '',
         userId: '',
         userDetails: [],
         house_id: '',
         firstName: '',
         showMenu: false,
      }
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleImage1 = this.handleImage1.bind(this)
      this.handleImage2 = this.handleImage2.bind(this)
      this.handleImage3 = this.handleImage3.bind(this)
      this.handleImage4 = this.handleImage4.bind(this)
      this.handleImage5 = this.handleImage5.bind(this)
      this.handleImage6 = this.handleImage6.bind(this)
      this.handleImage7 = this.handleImage7.bind(this)
      this.handleImage8 = this.handleImage8.bind(this)
      this.handleImage9 = this.handleImage9.bind(this)
      this.handleImage10 = this.handleImage10.bind(this)
      this.handleImage11 = this.handleImage11.bind(this)
      this.handleImage12 = this.handleImage12.bind(this)
      this.handleImage13 = this.handleImage13.bind(this)
      this.handleImage14 = this.handleImage14.bind(this)
      this.handleImage15 = this.handleImage15.bind(this)
      this.handleImage16 = this.handleImage16.bind(this)
      this.handleMenuBar = this.handleMenuBar.bind(this)
    }
    
    handleImage1 = (e) => {
        this.setState({
            sitting_room: e.target.files[0],
        })
    }

    handleImage2 = (e) => {
        this.setState({
            dinning_room: e.target.files[0],
        })
    }

    handleImage3 = (e) => {
        this.setState({
            kitchen: e.target.files[0],
        })
    }

    handleImage4 = (e) => {
        this.setState({
            bathroom: e.target.files[0],
        })
    }

    handleImage5 = (e) => {
        this.setState({
            bedroom: e.target.files[0],
        })
    }

    handleImage6 = (e) => {
        this.setState({
            swimming_pool: e.target.files[0],
        })
    }

    handleImage7 = (e) => {
        this.setState({
            lake: e.target.files[0],
        })
    }

    handleImage8 = (e) => {
        this.setState({
            beach: e.target.files[0],
        })
    }

    handleImage9 = (e) => {
        this.setState({
            ocean_view: e.target.files[0],
        })
    }

    handleImage10 = (e) => {
        this.setState({
            balcony: e.target.files[0],
        })
    }

    handleImage11 = (e) => {
        this.setState({
            parking: e.target.files[0],
        })
    }

    handleImage12 = (e) => {
        this.setState({
            front: e.target.files[0],
        })
    }

    handleImage13 = (e) => {
        this.setState({
            right: e.target.files[0],
        })
    }

    handleImage14 = (e) => {
        this.setState({
            left: e.target.files[0],
        })
    }

    handleImage15 = (e) => {
        this.setState({
            back: e.target.files[0],
        })
    }

    handleImage16 = (e) => {
        this.setState({
            aerial: e.target.files[0],
        })
    }

    componentDidMount = async () => {
        const userData = JSON.parse(localStorage.getItem('user-info'));
        const userInfo = userData;
        const houseDataDetail = JSON.parse(localStorage.getItem('house_data_detail_api'));
        this.setState({
            user: userInfo.data.id,
            userId: userInfo.data.id,
            firstName: userInfo.data.first_name,
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

    handleSubmit = (e) => {
        e.preventDefault();

        document.getElementById("submit").innerHTML = "sending";
        document.getElementById("submit").disabled = true;
        const url = `${BaseURL}/api/add-hundred-details`;
        const data = new FormData();
        if(this.state.sitting_room !== ''){
            data.append('sitting_room', this.state.sitting_room);
        }
        if(this.state.dinning_room !== ''){
            data.append('dinning_room', this.state.dinning_room);
        }
        if(this.state.kitchen !== ''){
            data.append('kitchen', this.state.kitchen);
        }
        if(this.state.bathroom !== ''){
            data.append('bathroom', this.state.bathroom);
        }
        if(this.state.bedroom !== ''){
            data.append('bedroom', this.state.bedroom);
        }
        if(this.state.swimming_pool !== ''){
            data.append('swimming_pool', this.state.swimming_pool);
        }
        if(this.state.lake !== ''){
            data.append('lake', this.state.lake);
        }
        if(this.state.beach !== ''){
            data.append('beach', this.state.beach);
        }
        if(this.state.ocean_view !== ''){
            data.append('ocean_view', this.state.ocean_view);
        }
        if(this.state.balcony !== ''){
            data.append('balcony', this.state.balcony);
        }
        if(this.state.parking !== ''){
            data.append('parking', this.state.parking);
        }
        if(this.state.front !== ''){
            data.append('front', this.state.front);
        }
        if(this.state.right !== ''){
            data.append('right', this.state.right);
        }
        if(this.state.left !== ''){
            data.append('left', this.state.left);
        }
        if(this.state.back !== ''){
            data.append('back', this.state.back);
        }
        if(this.state.aerial !== ''){
            data.append('aerial', this.state.aerial);
        }
        if(this.state.user !== ''){
            data.append('userId', this.state.user);
        }
        data.append("house_id", this.state.house_id);

        axios.post(url,data).then(res => {
            if(res.data.status === 200) {
                document.getElementById("submit").innerHTML = "congrats";
                swal('success','House details added! You are remaining with 20% to completion','success');
                this.setState({
                    sitting_room: '',
                    dinning_room: '',
                    kitchen: '',
                    bathroom: '',
                    bedroom: '',
                    swimming_pool: '',
                    lake: '',
                    beach: '',
                    ocean_view: '',
                    balcony: '',
                    parking: '',
                    front: '',
                    right: '',
                    left: '',
                    back: '',
                    aerial: '',
                });
                this.props.navigation('/add-house-host-page-five');
            }
        })
    }

    render() {
  return (
    <div className='page-four-add__page'>

        <div className='page-four-add__info'>
           <div className="page-four-add__info-left">
            <div className='incase-you-know'>
                <div className="host-image"><img src={this.props.hostMainImage} alt="" /></div>
                <div>
                    <h4>{this.state.firstName}</h4>
                    <p>Host</p>
                </div>
                <div onClick={this.handleMenuBar} className='addFourMenuBar'><h2 style={{ display: 'flex', alignItems: 'center' }}><MoreHoriz /></h2></div>
            </div>
            {this.state.showMenu ?
            <p>Navigation</p>
            :
            null
            }

            {this.state.showMenu ?
            <ul className='host-navigation'>
                <li><Link to="/main-host-account" className='lilo-link'>DashBoard</Link></li>
                <li style={{ backgroundColor: '#F78513', marginBottom: '10px' }}><Add /> House</li>
            </ul>
            :
            null
            }
           </div>
           <div className="page-four-add__info-right grown-ups">
                <div className="fill-up-detail-header"><p>Add your house/room details:</p> <p><span><strong>80%</strong></span> to completion</p></div>
                <p>House Images<strong>(they are optional)</strong></p>
                <form className='tough-tech' onSubmit={this.handleSubmit}>
                    <div className='now-house-images'>
                        <div className='now-house-images-one'>
                            <label>Enter <strong>sitting room</strong> image</label>
                            <input type="file" name="sitting_room" value={this.state.houseCoverImage1} onChange={this.handleImage1} />
                        </div>
                        <div className='now-house-images-one'>
                            <label>Enter <strong>dining room</strong> image</label>
                            <input type="file" name="dinning_room" value={this.state.houseCoverImage2} onChange={this.handleImage2} />
                        </div>
                        <div className='now-house-images-one'>
                            <label>Enter <strong>kitchen</strong> image</label>
                            <input type="file" name="kitchen" value={this.state.houseCoverImage3} onChange={this.handleImage3} />
                        </div>
                        <div className='now-house-images-one'>
                            <label>Enter <strong>bathroom</strong> image</label>
                            <input type="file" name="bathroom" value={this.state.houseCoverImage4} onChange={this.handleImage4} />
                        </div>

                        <div className='now-house-images-one'>
                            <label>Enter <strong>bedroom</strong> image</label>
                            <input type="file" name="bedroom" value={this.state.houseCoverImage5} onChange={this.handleImage5} />
                        </div>
                        <div className='now-house-images-one'>
                            <label>Enter <strong>swimming pool</strong> image</label>
                            <input type="file" name="swimming_pool" value={this.state.houseCoverImage6} onChange={this.handleImage6} />
                        </div>
                        <div className='now-house-images-one'>
                            <label>Enter <strong>lake</strong> image</label>
                            <input type="file" name="lake" value={this.state.houseCoverImage7} onChange={this.handleImage7} />
                        </div>
                        <div className='now-house-images-one'>
                            <label>Enter <strong>beach</strong> image</label>
                            <input type="file" name="beach" value={this.state.houseCoverImage8} onChange={this.handleImage8} />
                        </div>
                        <div className='now-house-images-one'>
                            <label>Enter <strong>ocean view</strong> image</label>
                            <input type="file" name="ocean_view" value={this.state.houseCoverImage9} onChange={this.handleImage9} />
                        </div>
                        <div className='now-house-images-one'>
                            <label>Enter <strong>balcony</strong> image</label>
                            <input type="file" name="balcony" value={this.state.houseCoverImage10} onChange={this.handleImage10} />
                        </div>
                        <div className='now-house-images-one'>
                            <label>Enter <strong>parking</strong> image</label>
                            <input type="file" name="parking" value={this.state.houseCoverImage11} onChange={this.handleImage11} />
                        </div>
                        <div className='now-house-images-one'>
                            <label>Enter <strong>front view</strong> image</label>
                            <input type="file" name="front" value={this.state.houseCoverImage12} onChange={this.handleImage12} />
                        </div>
                        <div className='now-house-images-one'>
                            <label>Enter <strong>right view</strong> image</label>
                            <input type="file" name="right" value={this.state.houseCoverImage13} onChange={this.handleImage13} />
                        </div>
                        <div className='now-house-images-one'>
                            <label>Enter <strong>left view</strong> image</label>
                            <input type="file" name="left" value={this.state.houseCoverImage14} onChange={this.handleImage14} />
                        </div>
                        <div className='now-house-images-one'>
                            <label>Enter <strong>back view</strong> image</label>
                            <input type="file" name="back" value={this.state.houseCoverImage15} onChange={this.handleImage15} />
                        </div>
                        <div className='now-house-images-one'>
                            <label>Enter <strong>aerial view</strong> image</label>
                            <input type="file" name="aerial" value={this.state.houseCoverImage16} onChange={this.handleImage16} />
                        </div>
                    </div>
                    <Button type="submit" id="submit">Next</Button>
                </form>
                <Button onClick={()=>{
                    this.props.navigation(`/back-third?id=${this.state.house_id}`,{state:{
                        paramaId: this.state.house_id,
                      }
                      });
                }}>Back</Button>
           </div>
        </div>

    </div>
  )
}
}

export function PageFourAddWithRouter(props) {
    const navigation = useNavigate();
    const userData = JSON.parse(localStorage.getItem('user-info'));
    const [userId] = useState(userData.data.id);
    const [hostMainImage, setHostMainImage] = useState();

    useEffect(()=>{
        const getReal = async () => {
            const request = await axios.get(`http://127.0.0.1:8000/api/get-host-specific-details/${userId}`);
            setHostMainImage(`http://127.0.0.1:8000/users/${request.data.hostSpecific.image}`);
        }
        getReal();
    },[userId]);

    //Scroll to the top on load
    useEffect(()=>{
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    },[]);
    //End of Scroll to the top on load
    return <PageFourAdd {...props} navigation={navigation} hostMainImage={hostMainImage} />;
  }

export default PageFourAdd;