import React, { forwardRef } from 'react';
import logo from '../../assets/images/sidebar-logo.png';
import close from '../../assets/images/close-drawer.svg';
import backgroundLogoMobile from '../../assets/images/axomium-white-logo-mobile.png';


const SideDrawer = forwardRef((props, ref) => {
    const targetRef = props.targetRef;
    const closeSideBar = props.closeSideBar;


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
        closeSideBar();
    };
    return (
        <div className='side-drawer-container'>
            <div className='side-drawer-header'>
                <div><img src={logo} alt="logo" /></div>
                <div><img src={close} alt="logo" onClick={closeSideBar} /></div>
            </div>
            <div className='side-drawer-list-container'>
                <div className='side-drawer-list-item' onClick={() => handleScroll('title')}>
                    Home
                </div>
                <hr color='#FFFFFF' style={{ opacity: 0.2 }} />
                <div className='side-drawer-list-item' onClick={() => handleScroll('description')}>
                    About Us
                </div>
                <hr color='#FFFFFF' style={{ opacity: 0.2 }} />
                <div className='side-drawer-list-item' onClick={() => handleScroll('ourOfferings')}>
                    Our Offerings
                </div>
                <hr color='#FFFFFF' style={{ opacity: 0.2 }} />
                <div className='side-drawer-list-item' onClick={() => handleScroll('blogs')}>
                    Blogs
                </div>
                <hr color='#FFFFFF' style={{ opacity: 0.2 }} />
                <div style={{
                    float: 'left', marginTop: '2em', zIndex: 1, position: 'absolute'
                }}>
                    <button className='white-button'
                        onClick={() => handleScroll('contactUs')}
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