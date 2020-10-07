import React from 'react';
import FoodTypeNav from './food-type-nav/food-type-nav.component';
import './menu.style.scss';
import PizzaMenu from './pizza-menu/pizza-menu.component';

const Menu = () => {
    return ( 
        <div className='menu'>
            <div className="menu-overlay">
                <FoodTypeNav />
                <PizzaMenu />
            </div>
        </div>
     );
}
 
export default Menu;