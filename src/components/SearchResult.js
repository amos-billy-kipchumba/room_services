import React from 'react'
import './SearchResult.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import StarIcon from '@mui/icons-material/Star'
import { Description, LocationCityTwoTone, Title } from '@mui/icons-material'
function SearchResult({img, location, title, description, star, price, total}) {
  return (
    <div className='search__result'>
        <img src={img} alt="" />
        <FavoriteBorderIcon className='searchResult__heart' />

        <div className='searchResult__info'>

            <div className='searchResult__infoTop'>
                <p><LocationCityTwoTone /> {location}</p>
                <h3><Title /> {title}</h3>
                <p>____</p>
                <p><Description /> {description}</p>
            </div>

            <div className='searchResult__infoBottom'>

                <p>
                    <StarIcon className='searchResult__star' />
                    <strong>
                        {star}
                    </strong>
                </p>

                <div className='searchResult__price'>

                    <h2>{price}</h2>
                    <p>{total}</p>

                </div>

            </div>

        </div>
    </div>
  )
}

export default SearchResult