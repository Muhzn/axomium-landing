import React, { forwardRef } from 'react';

const Title = forwardRef((props, ref) => {
    const handleScroll = () => {
        const targetRef = props.learnMoreRef;
        targetRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='app-title' ref={ref}>
            <div className='app-title-sub'>Discover the Power of Decentralization </div>
            <div className='app-title-main'>
                Em<span style={{ color: '#CC2D2D' }}>powering</span> Your Digital <span style={{ fontFamily: 'Gloock', fontWeight: '400' }}>Transformation</span>
            </div>
            <div style={{ marginTop: '58px' }}>
                <button onClick={() => handleScroll()} className='red-button'>Learn more</button>
            </div>
        </div>
    );
});
export default Title;