import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'

// header part

const Header = () => {
    return (
        <div className ='header'>
            <div>
                <img className='logo' src={logo} alt=''/>
            </div>
            <div>
            <h5 className='heading'>DHAKA INTERNATIONAL <span className='span'>FolkFest</span><br /><span className='budget'>Budget: 20 Million Taka</span></h5>
            </div>
        </div>
    );
};

export default Header;