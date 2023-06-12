import React from 'react';
import logo from '../../assets/images/logo.png';
import menu from '../../assets/images/menu.svg';
import { isBrowser, isMobile } from 'react-device-detect';

const Navbar = () => {
    return (
        <div>
            <div className='nav-bar'>
                <div className={isMobile ? 'nav-bar-left-mobile' : 'nav-bar-left-desktop'}>
                    <img src={logo} alt="axomium" />
                </div>
                {!isMobile ? <div className='nav-bar-middle'>
                    <label className='nav-item'>Home</label>
                    <label className='nav-item'>About Us</label>
                    <label className='nav-item'>Our Offerings</label>
                    <label className='nav-item'>Blog</label>
                </div> : null}
                <div className={isMobile ? 'nav-bar-right-mobile' : 'nav-bar-right-desktop'}>
                    {isBrowser ?
                        <button className='grey-button'>Contact Us</button> :
                        <button className='menu-button'><img src={menu} alt='menu' /></button>}
                </div >
            </div>
        </div>
    );
};

export default Navbar

