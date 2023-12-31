import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Chip from '@mui/material/Chip';
import Pagination from '@mui/material/Pagination';
import { getCall } from '../common/services';
import './blogs.css';

import blogCover1 from '../assets/images/blog-cover-1.svg';
import blogCover2 from '../assets/images/blog-cover-2.svg';
import blogCover3 from '../assets/images/blog-cover-3.svg';


import arrowRight from '../assets/images/arrow-right.svg';
import ContactUs from '../components/Body/contactUs';



const BlogsListPage = () => {

    const [blogsToList, setBlogsToList] = useState([]);
    const [coverBlogs, setCoverBlogs] = useState([]);
    const [blogsCount, setBlogsCount] = useState(0);
    const [pageNo, setPageNo] = useState(1);

    const blogsPerPage = 6;

    useEffect(() => {
        getCoverBlogs();
    }, []);

    useEffect(() => {
        getBlogs(pageNo, blogsPerPage);
        window.scrollTo(0, 0);
    }, [pageNo]);

    const getBlogs = async (pageNo, pageSize) => {
        const response = await getCall(`blog/index?pageNum=${pageNo}&pageSize=${pageSize}`);
        let blogsRes = response.Items;
        setBlogsToList(blogsRes);
        setBlogsCount(response.TotalCount);
    };

    const getCoverBlogs = async () => {
        const response = await getCall(`blog/index?pageNum=1&pageSize=3`);
        let blogsRes = response.Items;
        setCoverBlogs(blogsRes);
    };


    const handleFilter = (key) => {
        console.log(key);
    };

    const handlePageChange = (event, value) => {
        setPageNo(value);
    };
    return (
        <div className='blogs-container'>
            <div className='blogs-cover-container'>
                <div className='blogs-cover-1'
                    style={{ backgroundImage: `url(${blogCover1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    <Link to={`/blogs/blog-page#${coverBlogs[0]?.id}`}>
                        <div className='blogs-cover-text'>
                            <div>
                                <Chip label={coverBlogs[0]?.type} variant="solid"
                                    style={{
                                        textTransform: 'capitalize',
                                        background: '#FCF1F1',
                                        color: '#CC2D2D',
                                        marginBottom: '1em'
                                    }} />
                            </div>
                            {coverBlogs[0]?.name}
                        </div>
                    </Link>
                </div>
                <div className='blogs-cover-2' >
                    <div className='blogs-cover-2-1'
                        style={{ backgroundImage: `url(${blogCover2})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
                    >
                        <Link to={`/blogs/blog-page#${coverBlogs[1]?.id}`}>
                            <div className='blogs-cover-text'>
                                <div>
                                    <Chip label={coverBlogs[1]?.type} variant="solid"
                                        style={{
                                            textTransform: 'capitalize',
                                            background: '#FCF1F1',
                                            color: '#CC2D2D',
                                            marginBottom: '1em'
                                        }} />
                                </div>
                                {coverBlogs[1]?.name}
                            </div>
                        </Link>
                    </div>
                    <div className='blogs-cover-2-2'
                        style={{ backgroundImage: `url(${blogCover3})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
                    >
                        <Link to={`/blogs/blog-page#${coverBlogs[2]?.id}`}>
                            <div className='blogs-cover-text'>
                                <div>
                                    <Chip label={coverBlogs[2]?.type} variant="solid"
                                        style={{
                                            textTransform: 'capitalize',
                                            background: '#FCF1F1',
                                            color: '#CC2D2D',
                                            marginBottom: '1em'
                                        }} />
                                </div>
                                {coverBlogs[2]?.name}
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='blogs-list-container'>
                <div className='blogs-list-header-container'>
                    <div>Our Blogs</div>
                    <div className='chips-container'>
                        {/* <Chip label="All" variant="solid" color="error" onClick={() => handleFilter('all')} /> */}
                        <Chip label="Blockchain" variant="solid" color="error" onClick={() => handleFilter('blockchain')} />
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
                                    <Link to={`/blogs/blog-page#${blog.id}`}>
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
                                    </Link>
                                    <div className='open-blog-desktop'>
                                        <Link to={`/blogs/blog-page#${blog.id}`}>
                                            <img src={arrowRight} alt="" />
                                        </Link>
                                    </div>

                                </div>
                                <hr color='#D3D3D3' />
                            </div>
                        );
                    })}
                </div>
                <Pagination count={Math.ceil(blogsCount / blogsPerPage)} color='error'
                    shape="rounded" onChange={handlePageChange} />
            </div>
            <ContactUs />
        </div>
    );
};

export default BlogsListPage;