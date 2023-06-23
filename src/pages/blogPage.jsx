import React, { useEffect, useState } from 'react';

import './blogs.css';
import coverImage from '../assets/images/blogs-cover.svg';
import ContactUs from '../components/Body/contactUs';
import Blogs from '../components/Body/blogs';

import { getCall } from '../common/services';

const Blog = () => {
    const [blogContent, setBlogContent] = useState({});
    useEffect(() => {
        window.scrollTo(0, 0);
        const id = window.location.hash.substr(1);
        getBlogData(id);
    }, []);

    const getBlogData = async (id) => {
        const url = `blog/id?id=${id}`;
        const data = await getCall(url);
        setBlogContent(data?.response);
    };
    return (
        <div className='blog-page-container'>
            <div>
                <img src={coverImage} alt="blog cover"
                    style={{ width: '85vw' }} />
            </div>
            <div className='blog-content-container'>
                <div style={{ color: '#CC2D2D' }}>Blogs &nbsp;&nbsp;&gt;&nbsp;&nbsp;Blog Name</div>
                <div className='blog-page-header'>{blogContent?.name?.S}</div>
                <div className='blog-page-date'>{new Date(parseInt(blogContent?.timestamp?.N)).toLocaleString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                <div className='blog-page-description'>{blogContent?.description?.S}</div>
                <div className='blog-page-content'
                    dangerouslySetInnerHTML={{ __html: blogContent?.content?.S }}>
                </div>
            </div>
            <Blogs />
            <ContactUs />
        </div>
    );
};

export default Blog;
