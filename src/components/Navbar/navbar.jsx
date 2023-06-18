import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/navbar-logo.svg';
import menu from '../../assets/images/menu.svg';
import { handleNavigation } from '../../common/utils';

const Navbar = ({ targetRef, openSideDrawer }) => {
    const [showNavbarList, setShowNavbarList] = useState(true);
    const navigate = useNavigate();

    return (
        <div>
            <div className='nav-bar'>
                <div className='nav-bar-left'>
                    <Link to='/'><img src={logo} alt="axomium" /></Link>
                </div>
                <div className='nav-bar-middle'>
                    <label className='nav-item' onClick={() => handleNavigation('title', targetRef, navigate)} >Home</label>
                    <label className='nav-item' onClick={() => handleNavigation('description', targetRef, navigate)}>About Us</label>
                    <label className='nav-item' onClick={() => handleNavigation('ourOfferings', targetRef, navigate)}>Our Offerings</label>
                    <Link to="/blogs"><label className='nav-item'>Blog</label></Link>
                </div>
                <div className='nav-bar-right'>
                    <button className='grey-button navbar-contact' onClick={() => handleNavigation('contactUs', targetRef, navigate)}>
                        Contact Us
                    </button>
                    <button className='menu-button'><img src={menu} alt='menu' onClick={openSideDrawer} /></button>
                </div >

            </div>

        </div>
    );
};

export default Navbar

