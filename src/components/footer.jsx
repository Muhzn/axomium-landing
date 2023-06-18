import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

import logo from '../assets/images/footer-logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fb from '../assets/images/fb.png';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import instagram from '../assets/images/instagram.png';
import twitter from '../assets/images/twitter.png';
import linkedin from '../assets/images/linkedin.png';
import { postCall } from '../common/services';
import { handleNavigation } from '../common/utils';


library.add(faArrowRight);

const Footer = ({ targetRef }) => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');

    const handleInput = (e) => {
        setEmail(e.target.value);
    };
    async function handleSubmit() {

        const url = 'newsletter/user';
        const payload = {
            email: email,
        };
        await postCall(url, payload);
        setEmail('');
    };

    return (
        <div>
            <div className="footer-container-desktop">
                <div className="div1">
                    <div >
                        <Link to='/'><img src={logo} alt="axomium" /></Link>
                    </div>
                    <div className='footer-slogan'>
                        Your trusted partner for cutting-edge blockchain development solutions.
                    </div>
                </div>
                <div className="div2">
                    <div>Copyright ©2023 Axomium.</div>
                </div>
                <div className="div3">
                    <div className='footer-newsletter'>
                        <div className='footer-newsletter-text'>
                            SUBSCRIBE TO OUR NEWSLETTER
                        </div>
                        <div className='footer-newsletter-input'>
                            <input className='subscribe-input' id="newsletter" type="text" placeholder='Enter your email'
                                value={email} onChange={(e) => handleInput(e)} />
                            <button className='newsletter-button' onClick={handleSubmit}>
                                <FontAwesomeIcon icon="arrow-right" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="div4">
                    <div style={{ display: 'flex', gap: '2em' }}>
                        <div>Privacy Policy</div>
                        <div>Cookies</div>
                        <div>Terms & conditions</div>
                    </div>
                </div>
                <div className="div5">
                    <div className='footer-navigation'>
                        <div className='footer-navigation-header'>COMPANY</div>
                        <div className='footer-navigation-list'>
                            <div onClick={() => handleNavigation('title', targetRef, navigate)}>Home</div>
                            <div onClick={() => handleNavigation('description', targetRef, navigate)}>About Us</div>
                            <div onClick={() => handleNavigation('ourOfferings', targetRef, navigate)}>Our Offerings</div>
                            <div onClick={() => handleNavigation('blogs', targetRef, navigate)}>Blog</div>
                        </div>
                    </div>
                </div>
                <div className="div6">
                    <div style={{ display: 'flex', gap: '2em' }}>
                        <a href="#" target='_blank'><img src={fb} alt='fb' /></a>
                        <a href="#" target='_blank'><img src={twitter} alt='twitter' /></a>
                        <a href="#" target='_blank'><img src={instagram} alt='instagram' /></a>
                        <a href="#" target='_blank'><img src={linkedin} alt='linkedin' /></a>
                    </div>
                </div>
            </div>
            <div className='footer-container-mobile'>
                <div className='footer-upper-container'>
                    <div className='footer-logo'>
                        <div >
                            <Link to='/'><img src={logo} alt="axomium" /></Link>
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
                            <input className='subscribe-input' id="newsletter" type="text" placeholder='Enter your email'
                                onChange={(e) => handleInput(e)} />
                            <button className='newsletter-button' onClick={handleSubmit}>
                                <FontAwesomeIcon icon="arrow-right" />
                            </button>
                        </div>
                    </div>
                    <div className='footer-navigation'>
                        <div className='footer-navigation-header'>COMPANY</div>
                        <div className='footer-navigation-list'>
                            <div onClick={() => handleNavigation('title', targetRef, navigate)}>Home</div>
                            <div onClick={() => handleNavigation('description', targetRef, navigate)}>About Us</div>
                            <div onClick={() => handleNavigation('ourOfferings', targetRef, navigate)}>Our Offerings</div>
                            <div onClick={() => handleNavigation('blogs', targetRef, navigate)}>Blog</div>
                        </div>
                    </div>
                </div>
                <div className='footer-lower-container'>
                    <div>Copyright ©2023 Axomium.</div>
                    <div style={{ display: 'flex', gap: '2em', justifyContent: 'center' }}>
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
        </div>

    );
};
export default Footer;
