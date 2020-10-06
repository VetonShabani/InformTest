import React from 'react';
import { Link } from 'react-router-dom';
import './footer.style.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-wrapper">
                <div className="useful-links">
                    <p className="useful-links-title">USEFUL LINKS</p>
                    <div className="useful-links-container">
                        <Link className='useful-link' to='/menu'>MENU</Link>
                        <Link className='useful-link' to='/restaurants'>RESTAURANTS</Link>
                        <Link className='useful-link' to='/contact'>CONTACT</Link>
                        <Link className='useful-link' to='/jobs'>APPLY FOR JOB</Link>
                    </div>
                    <div className="social-media-container">
                        <a className='social-link' href="https://www.facebook.com/papajohns/"><i className="fab fa-facebook-square"></i></a>
                        <a className='social-link' href="https://www.instagram.com/papajohnspk/"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;