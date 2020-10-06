import React from 'react';
import OrderCard from '../../../components/order-card/order-card.component';
import './special-offers.style.scss';
import {Promotions} from '../../../data/data' 

const SpecialOffers = () => {
    return (  
        <div className='special-offers'>
            <p className="special-offers-title">SPECIAL OFFERS</p>
            <div className="offer-card-container">
                {Promotions.map(card => <OrderCard key={card.id} img={card.img} desc={card.desc} title={card.title} />)}
            </div>    
        </div>
    );
}
 
export default SpecialOffers;