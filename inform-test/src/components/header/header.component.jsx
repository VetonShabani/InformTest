import React from 'react';
import {Link} from 'react-router-dom'
import './header.style.scss';

const Header = () => {
    return ( 
        <div className='header'>
            <div className="logo-wrapper">
                <Link to="/"><img src="./img/Logo/logo-png.png" alt="" className='logo-img'/></Link>
            </div>
            <nav className='nav'>
                <Link className='nav-link' to="/">HOME</Link>
                <Link className='nav-link' to="/menu">MENU</Link>
                <div className='order-now'>ORDER NOW!</div>
            </nav>
        </div>
     );
}
 
export default Header;