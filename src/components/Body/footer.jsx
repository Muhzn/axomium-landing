import React from 'react';
import logo from '../../assets/images/footer-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fb from '../../assets/images/fb.png';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import instagram from '../../assets/images/instagram.png';
import twitter from '../../assets/images/twitter.png';
import linkedin from '../../assets/images/linkedin.png';

library.add(faArrowRight);

const Footer = ({ targetRef }) => {
    const handleScroll = (component) => {
        console.log(component);
        console.log(targetRef);
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
        <div className='footer-container'>
            <div className='footer-upper-container'>
                <div className='footer-logo'>
                    <div >
                        <img src={logo} alt="axomium" />
                    </div>
                    <div className='footer-slogan'>
                        Your trusted partner for cutting-edge blockchain development solutions.
                    </div>
                </div>
                <div className='footer-newsletter'>
                    <div className='footer-newsletter-text'>
                        SUBSCRIBE TO OUR NEWSLETTER
                    </div>
                    <div className='footer-newsletter-input'>
                        <input className='subscribe-input' id="newsletter" type="text" placeholder='Enter your email' />
                        <button className='newsletter-button'>
                            <FontAwesomeIcon icon="arrow-right" />
                        </button>
                    </div>
                </div>
                <div className='footer-navigation'>
                    <div className='footer-navigation-header'>COMPANY</div>
                    <div className='footer-navigation-list'>
                        <div onClick={() => handleScroll('title')}>Home</div>
                        <div onClick={() => handleScroll('description')}>About Us</div>
                        <div onClick={() => handleScroll('ourOfferings')}>our Offerings</div>
                        <div onClick={() => handleScroll('blogs')}>Blog</div>
                    </div>
                </div>
            </div>
            <div className='footer-lower-container'>
                <div>Copyright ©2023 Axomium.</div>
                <div style={{ display: 'flex', gap: '2em' }}>
                    <div>Privacy Policy</div>
                    <div>Cookies</div>
                    <div>Terms & conditions</div>
                </div>
                <div style={{ display: 'flex', gap: '2em' }}>
                    <a href="#" target='_blank'><img src={fb} alt='fb' /></a>
                    <a href="#" target='_blank'><img src={twitter} alt='twitter' /></a>
                    <a href="#" target='_blank'><img src={instagram} alt='instagram' /></a>
                    <a href="#" target='_blank'><img src={linkedin} alt='linkedin' /></a>
                </div>

            </div>
        </div>
    );
};
export default Footer;
