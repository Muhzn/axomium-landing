import React from 'react';
import nft4 from '../../assets/images/nft/Bitcoin-P2P-pana 1.png';

const Blogs = () => {
    return (
        <div className='general-container'>
            <div className='general-title'>BLOGS</div>
            <div className='general-titile-description'>
                Dive into our <span style={{ fontWeight: 700 }}>Blog</span> for Expert Insights and Analysis
            </div>
            <div className='blog-list'>
                <div className='blog-card'>
                    <div className='blog-image'>
                        <img src={nft4} alt="" />
                    </div>
                    <div className='blog-title'>Blog Title</div>
                    <div className='blog-content'>
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna
                        aliqua. Ut enim ad minim veniam
                    </div>
                    <div className='blog-content'>October 15, 2023</div>

                </div>
            </div>
        </div>
    );
};
export default Blogs;