import React from 'react';
import './Header.css'
import logo from '../../images/car_logo_PNG1640.png';

const Header = () => {
    return (
        <div className='header'>
            <div className="logo">
            <img className='logo-img' src={logo} alt=""  />
            <h1>Audi cars lovers hut</h1>
            </div>
            <div className="site-description">
                <h1>Welcome Audi lovers</h1>
                <h1>Full your dream garage with audi cars</h1>
                <h1>Budget Limit:$10M</h1>
            </div>
            
        </div>
    );
};

export default Header;