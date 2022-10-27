import React from 'react'
import './MoreDetailsLoader.css'
function MoreDetailsLoader() {
  return (
    <div className='moreDetailsLoader'>
        <span className='moreDetailsLoaderSpan'></span>
        <div className='moreDetailsLoaderTopTop'>
            <div className='moreDetailsLoaderTopTopLeft'>
                <span></span>
            </div>
            <div className='moreDetailsLoaderTopTopRight'>
                <span className='moreDetailsLoaderTopTopRightOne'></span>
                <span className='moreDetailsLoaderTopTopRightTwo'></span>
            </div>
        </div>
        <div className='moreDetailsLoaderSlider'></div>
    </div>
  )
}

export default MoreDetailsLoader