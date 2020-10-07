import React from 'react';
import FoodTypeNav from './food-type-nav/food-type-nav.component';
import './pizza-menu.style.scss';

const PizzaMenu = () => {
    return ( 
        <div className='pizza-menu'>
            <div className="pizza-menu-overlay">
                <FoodTypeNav />
            </div>
        </div>
     );
}
 
export default PizzaMenu;