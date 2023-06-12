import React from 'react';
import logo from '../../assets/images/logo.png';
import menu from '../../assets/images/menu.svg';
import { isBrowser, isMobile } from 'react-device-detect';

const Navbar = ({ targetRef }) => {

    const handleScroll = (component) => {
        switch (component) {
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
                <div className={isMobile ? 'nav-bar-left-mobile' : 'nav-bar-left-desktop'}>
                    <img src={logo} alt="axomium" />
                </div>
                {!isMobile ? <div className='nav-bar-middle'>
                    {/* <label className='nav-item' >Home</label> */}
                    <label className='nav-item' onClick={() => handleScroll('description')}>About Us</label>
                    <label className='nav-item' onClick={() => handleScroll('ourOfferings')}>Our Offerings</label>
                    <label className='nav-item' onClick={() => handleScroll('blogs')}>Blog</label>
                </div> : null}
                <div className={isMobile ? 'nav-bar-right-mobile' : 'nav-bar-right-desktop'}>
                    {isBrowser ?
                        <button className='grey-button' onClick={() => handleScroll('contactUs')}>
                            Contact Us
                        </button> :
                        null
                        // <button className='menu-button'><img src={menu} alt='menu' /></button>
                    }
                </div >
            </div>
        </div>
    );
};

export default Navbar

