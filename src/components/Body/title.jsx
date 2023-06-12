import React from 'react';

const Title = () => {
    return (
        <div className='app-title'>
            <div className='app-title-sub'>Discover the Power of Decentralization </div>
            <div className='app-title-main'>
                Em<span style={{ color: '#CC2D2D' }}>powering</span> Your Digital <span style={{ fontFamily: 'Gloock', fontWeight: '400' }}>Transformation</span>
            </div>
            <div style={{ marginTop: '58px' }}>
                <button className='red-button'>Learn more</button>
            </div>
        </div>
    );
};
export default Title;