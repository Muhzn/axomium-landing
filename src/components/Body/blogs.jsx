import React, { useEffect, forwardRef, useState } from 'react';
import { getCall } from '../../common/services';

const Blogs = forwardRef((props, ref) => {

    const [blogsList, setBlogsList] = useState([]);
    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        const response = await getCall('blog/index?pageNum=1&pageSize=4');
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
                    return (< div className='blog-card' >
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
                    </div>);
                }) : <div style={{ fontWeight: 700 }}>Coming Soon...</div>
                }
            </div>
        </div >
    );
});
export default Blogs;