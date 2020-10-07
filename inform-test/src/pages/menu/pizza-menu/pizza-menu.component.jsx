import React from 'react';
import './pizza-menu.style.scss';
import {Pizzas} from '../../../data/data'
import OrderCard from '../../../components/order-card/order-card.component'

const PizzaMenu = () => {
    return (  
        <div className='pizza-menu'>
            {Pizzas.map(pizza => <OrderCard className='pizza-card' key={pizza.id} img={pizza.mediumImg} desc={pizza.ingredients} title={pizza.type} />)}
        </div>
    );
}
 
export default PizzaMenu;