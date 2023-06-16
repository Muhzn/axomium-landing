import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import Chip from '@mui/material/Chip';
import { getCall } from '../common/services';
import './blogs.css';
import nft7 from '../assets/images/nft/Hidden mining-amico.png';
import arrowRight from '../assets/images/arrow-right.svg';




const BlogsPage = () => {

    const [blogsToList, setBlogsToList] = useState([]);

    useEffect(() => {
        getBlogs();
    }, []);

    const getBlogs = async () => {
        const response = await getCall('blog/index?pageNum=1&pageSize=6');
        setBlogsToList(response.Items);
    };

    const handleFilter = (key) => {
        console.log(key);
    };
    return (
        <div className='blogs-container'>
            <div className='blogs-list-container'>
                <div className='blogs-list-header-container'>
                    <div>Our Blogs</div>
                    <div className='chips-container'>
                        <Chip label="All" variant="solid" color="error" onClick={() => handleFilter('all')} />
                        <Chip label="Blockchain" variant="outlined" onClick={() => handleFilter('blockchain')} />
                        <Chip label="Artificial Intelligence" variant="outlined" onClick={() => handleFilter('ai')} />
                    </div>
                </div>
                <div className='blogs-list'>
                    {blogsToList.map(blog => {
                        return (
                            <div>
                                <div className='blog-item'>
                                    <div>
                                        <img className='blog-item-image' src={blog.image_url} alt="" />
                                    </div>
                                    <div className='blog-text'>
                                        <div className='blog-item-type'>
                                            <Chip style={{
                                                textTransform: 'capitalize',
                                                background: '#FCF1F1',
                                                color: '#CC2D2D'
                                            }}
                                                label={blog.type} variant="solid" color="error" />
                                        </div>
                                        <div className='blog-title'>{blog.name}</div>
                                        <div className='blog-content'>{blog.description}</div>
                                        <div className='blog-content' style={{ fontWeight: 600 }}>{new Date(blog.timestamp).toLocaleString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                                    </div>
                                    <div style={{ margin: 'auto', cursor: 'pointer' }}>
                                        <img src={arrowRight} alt="" />
                                    </div>
                                </div>
                                <hr color='#D3D3D3' />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default BlogsPage;