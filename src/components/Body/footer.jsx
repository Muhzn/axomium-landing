import React from 'react';
import logo from '../../assets/images/footer-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import fb from '../../assets/images/fb.png';
import instagram from '../../assets/images/instagram.png';
import twitter from '../../assets/images/twitter.png';
import linkedin from '../../assets/images/linkedin.png';




library.add(faArrowRight);

const Footer = () => {
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
                        <div>Home</div>
                        <div>About Us</div>
                        <div>our Offerings</div>
                        <div>Blog</div>
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