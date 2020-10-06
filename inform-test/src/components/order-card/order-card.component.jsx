import React from 'react';
import './order-card.style.scss';

const OrderCard = ({img, title, desc}) => {
    return ( 
        <div className='order-card'>
            <div className="card-img-wrapper" style={{backgroundImage: `url('${img}')`}}></div>
            <div className="card-info-wrapper">
                <p className="card-title">{title}</p>
                <p className="card-desc">{desc}</p>
                <button className="order-button">ORDER NOW!</button>
            </div> 
        </div>
     );
}
 
export default OrderCard;