import React, { forwardRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/sidebar-logo.png';
import close from '../../assets/images/close-drawer.svg';
import backgroundLogoMobile from '../../assets/images/axomium-white-logo-mobile.png';
import { handleNavigation } from '../../common/utils';


const SideDrawer = forwardRef((props, ref) => {
    const targetRef = props.targetRef;
    const closeSideBar = props.closeSideBar;

    const navigate = useNavigate();

    const handleScroll = (component) => {
        handleNavigation(component, targetRef, navigate);
        closeSideBar();
    };
    return (
        <div className='side-drawer-container'>
            <div className='side-drawer-header'>
                <div><img src={logo} alt="logo" /></div>
                <div><img src={close} alt="logo" onClick={closeSideBar} /></div>
            </div>
            <div className='side-drawer-list-container'>
                <div className='side-drawer-list-item' onClick={() => handleScroll('title', targetRef)}>
                    Home
                </div>
                <hr color='#FFFFFF' style={{ opacity: 0.2 }} />
                <div className='side-drawer-list-item' onClick={() => handleScroll('description', targetRef)}>
                    About Us
                </div>
                <hr color='#FFFFFF' style={{ opacity: 0.2 }} />
                <div className='side-drawer-list-item' onClick={() => handleScroll('ourOfferings', targetRef)}>
                    Our Offerings
                </div>
                <hr color='#FFFFFF' style={{ opacity: 0.2 }} />
                <Link to="/blogs">
                    <div className='side-drawer-list-item'
                        onClick={() => handleScroll('blogs', targetRef)}
                    >
                        Blogs
                    </div>
                </Link>
                <hr color='#FFFFFF' style={{ opacity: 0.2 }} />
                <div style={{
                    float: 'left', marginTop: '2em', zIndex: 1, position: 'absolute'
                }}>
                    <button className='white-button'
                        onClick={() => handleScroll('contactUs', targetRef)}
                    >
                        Contact Us
                    </button>
                </div>
                <img
                    className='sidebar-background-logo'
                    src={backgroundLogoMobile}
                    alt="axomium-logo"
                ></img>
            </div>

        </div >
    );
});
export default SideDrawer;