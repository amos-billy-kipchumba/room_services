import React from 'react'
import './PageFourAdd.css'
import HostImage from '../../Images/people/face20.jpg'
import {useNavigate} from 'react-router-dom'
import Button from '@mui/material/Button';
import Add from '@mui/icons-material/Add';
function PageFourAdd() {
    const navigate = useNavigate()
  return (
    <div className='page-four-add__page'>

        <div className='page-four-add__info'>
           <div className="page-four-add__info-left">
            <div className='incase-you-know'>
                <div className="host-image"><img src={HostImage} alt="" /></div>
                <div>
                    <h4>Henry Klein</h4>
                    <p>Host</p>
                </div>
                <div><h2 style={{ display: 'flex', alignItems: 'center' }}>...</h2></div>
            </div>
            <p>Navigation</p>

            <ul className='host-navigation'>
                <li onClick={()=> navigate('/main-host-account')}>DashBoard</li>
                <li style={{ backgroundColor: '#ff7779' }}><Add /> Add House or Room</li>
                <li>Your House or Room</li>
                <li>Tenants Details</li>
                <li>Host Profile</li>
            </ul>
           </div>
           <div className="page-four-add__info-right grown-ups">
                <div className="fill-up-detail-header"><p>Add your house/room details:</p> <p><span><strong>100%</strong></span> to completion</p></div>
                <p>House Images<strong>(they are optional)</strong></p>
                <form className='tough-tech'>
                    <div className='now-house-images'>
                        <div className='now-house-images-one'>
                            <label>Enter <strong>sitting room</strong> image</label>
                            <input type="file" name="house-cover-image" />
                        </div>
                        <div className='now-house-images-one'>
                            <label>Enter <strong>dining room</strong> image</label>
                            <input type="file" name="house-cover-image" />
                        </div>
                        <div className='now-house-images-one'>
                            <label>Enter <strong>kitchen</strong> image</label>
                            <input type="file" name="house-cover-image" />
                        </div>
                        <div className='now-house-images-one'>
                            <label>Enter <strong>bathroom</strong> image</label>
                            <input type="file" name="house-cover-image" />
                        </div>

                        <div className='now-house-images-one'>
                            <label>Enter <strong>bedroom</strong> image</label>
                            <input type="file" name="house-cover-image" />
                        </div>
                        <div className='now-house-images-one'>
                            <label>Enter <strong>swimming pool</strong> image</label>
                            <input type="file" name="house-cover-image" />
                        </div>
                        <div className='now-house-images-one'>
                            <label>Enter <strong>lake</strong> image</label>
                            <input type="file" name="house-cover-image" />
                        </div>
                        <div className='now-house-images-one'>
                            <label>Enter <strong>beach</strong> image</label>
                            <input type="file" name="house-cover-image" />
                        </div>
                        <div className='now-house-images-one'>
                            <label>Enter <strong>ocean view</strong> image</label>
                            <input type="file" name="house-cover-image" />
                        </div>
                        <div className='now-house-images-one'>
                            <label>Enter <strong>balcony</strong> image</label>
                            <input type="file" name="house-cover-image" />
                        </div>
                        <div className='now-house-images-one'>
                            <label>Enter <strong>parking</strong> image</label>
                            <input type="file" name="house-cover-image" />
                        </div>
                        <div className='now-house-images-one'>
                            <label>Enter <strong>front view</strong> image</label>
                            <input type="file" name="house-cover-image" />
                        </div>
                        <div className='now-house-images-one'>
                            <label>Enter <strong>lateral view</strong> image</label>
                            <input type="file" name="house-cover-image" />
                        </div>
                        <div className='now-house-images-one'>
                            <label>Enter <strong>ventral view</strong> image</label>
                            <input type="file" name="house-cover-image" />
                        </div>
                        <div className='now-house-images-one'>
                            <label>Enter <strong>back view</strong> image</label>
                            <input type="file" name="house-cover-image" />
                        </div>
                        <div className='now-house-images-one'>
                            <label>Enter <strong>aerial view</strong> image</label>
                            <input type="file" name="house-cover-image" />
                        </div>
                    </div>
                    <Button>Finish</Button>
                </form>
                <Button onClick={()=> navigate('/add-house-host-page-three')}>Back</Button>
           </div>
        </div>

    </div>
  )
}

export default PageFourAdd