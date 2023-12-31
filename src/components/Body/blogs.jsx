import React, { useEffect, forwardRef, useState } from 'react';
import { Link } from "react-router-dom";

import { getCall } from '../../common/services';

const Blogs = forwardRef((props, ref) => {

    const [blogsList, setBlogsList] = useState([]);
    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        const response = await getCall('blog/index?pageNum=1&pageSize=3');
        setBlogsList(response.Items);
    };
    return (
        <div className='general-container-grey' ref={ref}>
            <div className='general-title'>BLOGS</div>
            <div className='general-titile-description'>
                Dive into our <span style={{ fontWeight: 700 }}>Blog</span> for Expert Insights and Analysis
            </div>
            <div className='blog-list'>
                {blogsList.length ? blogsList.map(blog => {
                    return (
                        <Link to={`/blogs/blog-page#${blog.id}`} key={blog.id}>
                            < div className='blog-card' >
                                <div className='blog-image'>
                                    <img className='blog-card-image' style={{ borderRadius: '20px' }} src={blog.image_url} alt="blog" />
                                </div>
                                <div style={{ textAlign: 'left' }}>
                                    <div className='blog-title'>{blog.name}</div>
                                    <div className='blog-content'>
                                        {blog.description}
                                    </div>
                                    <div className='blog-content'>{new Date(blog.timestamp).toLocaleString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                                </div>
                            </div>
                        </Link>
                    );
                }) : <div style={{ fontWeight: 700 }}>Coming Soon...</div>
                }
            </div>
            <Link to="/blogs">
                <div style={{ marginTop: '58px' }}>
                    <button className='red-button'>View more</button>
                </div>
            </Link>
        </div >
    );
});
export default Blogs;