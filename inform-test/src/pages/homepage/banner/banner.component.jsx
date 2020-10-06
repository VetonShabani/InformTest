import React from 'react';
import './banner.style.scss';

const Banner = () => {
    return (
        <div className='banner'>
            <div className="offer">
                <div className='offer-wrapper'>
                    <p className='offer-title'>SPECIAL DEAL</p>
                    <p className="offer-discount">SAVE UP TO: 3$ (-20%)</p>
                    <p className="offer-desc">Get any large pizza + 1,25l coke + 2 lava cake for only 13,49$</p>
                    <button className='offer-order'>TAKE NOW!</button>
                </div>
            </div>
        </div>
    );
}

export default Banner;