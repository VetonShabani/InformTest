import React from 'react'
import './homepage.style.scss'
import Banner from './banner/banner.component'
import SpecialOffers from './special-offers/special-offers.component'

const Homepage = () => {
    return ( 
        <div className='homepage'>
            <Banner />
            <SpecialOffers />
        </div>
     );
}
 
export default Homepage;