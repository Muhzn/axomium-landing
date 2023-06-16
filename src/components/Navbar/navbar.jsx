import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/navbar-logo.svg';
import menu from '../../assets/images/menu.svg';
import { isBrowser, isMobile } from 'react-device-detect';


const Navbar = ({ targetRef, openSideDrawer }) => {
    const [showNavbarList, setShowNavbarList] = useState(true);

    const handleScroll = (component) => {
        switch (component) {
            case 'title':
                targetRef[component].current?.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'description':
                targetRef[component].current?.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'ourOfferings':
                targetRef[component].current?.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'blogs':
                targetRef[component].current?.scrollIntoView({ behavior: 'smooth' });
                break;
            case 'contactUs':
                targetRef[component].current?.scrollIntoView({ behavior: 'smooth' });
                break;
            default:
                console.log('NoTabSpecified');
        }
    };

    return (
        <div>
            <div className='nav-bar'>
                <div className='nav-bar-left'>
                    <Link to='/'><img src={logo} alt="axomium" /></Link>
                </div>
                {showNavbarList ? <div className='nav-bar-middle'>
                    <label className='nav-item' onClick={() => handleScroll('title')} >Home</label>
                    <label className='nav-item' onClick={() => handleScroll('description')}>About Us</label>
                    <label className='nav-item' onClick={() => handleScroll('ourOfferings')}>Our Offerings</label>
                    <Link to="/blogs"><label className='nav-item'>Blog</label></Link>
                </div> : null}
                {showNavbarList ? <div className='nav-bar-right'>
                    <button className='grey-button navbar-contact' onClick={() => handleScroll('contactUs')}>
                        Contact Us
                    </button>
                    <button className='menu-button'><img src={menu} alt='menu' onClick={openSideDrawer} /></button>
                </div > : null}

            </div>

        </div>
    );
};

export default Navbar

