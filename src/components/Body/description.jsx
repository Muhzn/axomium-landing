import React, { forwardRef } from 'react';
import backgroundLogo from '../../assets/images/axomium-white-logo.png';
import backgroundLogoMobile from '../../assets/images/axomium-white-logo-mobile.png';
import { isMobile } from 'react-device-detect';
import { useMediaQuery } from 'react-responsive';

const Description = forwardRef((props, ref) => {
    const isTab = useMediaQuery({ minWidth: 601, maxWidth: 1200 });

    return (
        <div className='app-description' ref={ref}>
            <div className='app-description-text'>
                <div className='app-description-text-left'>Transform your business with <strong>blockchain</strong> technology.</div>
                <div className='app-description-right'>
                    <div className='white-separator' />
                    <div className='app-description-text-right'>
                        Welcome to Axomium, your trusted partner for cutting-edge blockchain
                        development solutions. We are a team of experienced professionals dedicated
                        to revolutionizing industries and driving innovation through the power of
                        blockchain technology. With our expertise and passion for blockchain, we
                        empower businesses to unlock new opportunities, enhance transparency,
                        and establish trust in the digital era.
                    </div>
                </div>
            </div>
        </div>
    );
});
export default Description;