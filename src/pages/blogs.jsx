import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import Chip from '@mui/material/Chip';
import Pagination from '@mui/material/Pagination';
import { getCall } from '../common/services';
import './blogs.css';
import nft7 from '../assets/images/nft/Hidden mining-amico.png';
import arrowRight from '../assets/images/arrow-right.svg';




const BlogsPage = () => {

    const [blogsToList, setBlogsToList] = useState([]);
    const [blogsCount, setBlogsCount] = useState(0);
    const [pageNo, setPageNo] = useState(1);

    const blogsPerPage = 6;

    useEffect(() => {
        getBlogs(pageNo, blogsPerPage);
        window.scrollTo(0, 0);
    }, [pageNo]);

    const getBlogs = async (pageNo, pageSize) => {
        const response = await getCall(`blog/index?pageNum=${pageNo}&pageSize=${pageSize}`);
        setBlogsToList(response.Items);
        setBlogsCount(response.TotalCount);
    };

    const handleFilter = (key) => {
        console.log(key);
    };

    const handlePageChange = (event, value) => {
        setPageNo(value);
    };
    return (
        <div className='blogs-container'>
            <div className='blogs-list-container'>
                <div className='blogs-list-header-container'>
                    <div>Our Blogs</div>
                    <div className='chips-container'>
                        {/* <Chip label="All" variant="solid" color="error" onClick={() => handleFilter('all')} /> */}
                        <Chip label="Blockchain" vvariant="solid" color="error" onClick={() => handleFilter('blockchain')} />
                        {/* <Chip label="Artificial Intelligence" variant="outlined" onClick={() => handleFilter('ai')} /> */}
                    </div>
                </div>
                <div className='blogs-list'>
                    {blogsToList.map(blog => {
                        return (
                            <div key={blog.id}>
                                <div className='blog-item'>
                                    <div>
                                        <img className='blog-item-image' src={blog.image_url} alt="" />
                                    </div>
                                    <div className='blog-text'>
                                        <div>
                                            <div className='blog-item-type'>
                                                <Chip style={{
                                                    textTransform: 'capitalize',
                                                    background: '#FCF1F1',
                                                    color: '#CC2D2D'
                                                }}
                                                    label={blog.type} variant="solid" color="error" />
                                            </div>
                                            <div>
                                                <div className='blog-title'>
                                                    <div>{blog.name}</div>
                                                    <div className='open-blog-mobile'>
                                                        <img src={arrowRight} alt="" />
                                                    </div>
                                                </div>
                                                <div className='blog-content'>{blog.description}</div>
                                                <div className='blog-content' style={{ fontWeight: 600 }}>{new Date(blog.timestamp).toLocaleString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className='open-blog-desktop'>
                                        <img src={arrowRight} alt="" />
                                    </div>

                                </div>
                                <hr color='#D3D3D3' />
                            </div>
                        );
                    })}
                </div>
                <Pagination count={Math.round(blogsCount / blogsPerPage)} color='error'
                    shape="rounded" onChange={handlePageChange} />
            </div>
        </div>
    );
};

export default BlogsPage;