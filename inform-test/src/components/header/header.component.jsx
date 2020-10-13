import React,{ useState } from 'react';
import {Link} from 'react-router-dom'
import SignIn from '../sign-in/sign-in.component';
import './header.style.scss';
const Header = ({handleSignIn}) => {
    const [toggleNav, setToggleNav] = useState(false)
    
    return ( 
        <div className='header'>
            <div className="logo-wrapper">
                <Link to="/"><img src="./img/Logo/logo-png.png" alt="" className='logo-img'/></Link>
            </div>
            <div className="mobile-hamburger">
                <i className="fas fa-bars" onClick={() => setToggleNav(!toggleNav)}></i>
            </div>
            <nav className='nav'>
                <Link className='nav-link' to="/">HOME</Link>
                <Link className='nav-link' to="/menu">MENU</Link>
                <div className='order-now' onClick={handleSignIn}>ORDER NOW!</div>
            </nav>
            <nav className='mobile-nav' style={toggleNav ? {left: '0'} : {left: '100%'}}>
                <Link className='nav-link-sidebar' to="/">HOME</Link>
                <Link className='nav-link-sidebar' to="/menu">MENU</Link>
                <div className='order-now-sidebar'>ORDER NOW!</div>
            </nav>
        </div>
        
     );
}
 
export default Header;