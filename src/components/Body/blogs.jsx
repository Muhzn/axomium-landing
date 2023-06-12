import React, { useEffect, forwardRef, useState } from 'react';
import nft4 from '../../assets/images/nft/Bitcoin-P2P-pana 1.png';

const Blogs = forwardRef((props, ref) => {

    const [blogsList, setBlogsList] = useState([]);
    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        const response = await fetch("https://api.axomium.com/v1/blog/index?pageNum=1&pageSize=3");
        const jsonData = await response.json();
        setBlogsList(jsonData.Items);
    };
    return (
        <div className='general-container-grey' ref={ref}>
            <div className='general-title'>BLOGS</div>
            <div className='general-titile-description'>
                Dive into our <span style={{ fontWeight: 700 }}>Blog</span> for Expert Insights and Analysis
            </div>
            <div className='blog-list'>
                {blogsList.map(blog => {
                    console.log(new Date(blog.timestamp));
                    console.log(new Date(blog.timestamp).toLocaleString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }));
                    return (< div className='blog-card' >
                        <div className='blog-image'>
                            <img width={330} style={{ borderRadius: '20px' }} src={blog.image_url} alt="blog" />
                        </div>
                        <div style={{ textAlign: 'left' }}>
                            <div className='blog-title'>{blog.name}</div>
                            <div className='blog-content'>
                                {blog.description}
                            </div>
                            <div className='blog-content'>{new Date(blog.timestamp).toLocaleString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                        </div>
                    </div>);
                })}
            </div>
        </div >
    );
});
export default Blogs;