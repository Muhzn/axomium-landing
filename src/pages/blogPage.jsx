import React, { useEffect } from 'react';

import { getCall } from '../common/services';

const Blog = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        const id = window.location.hash.substr(1);
        getBlogData(id);
    }, []);

    const getBlogData = (id) => {
        const url = `blog/id?id=${id}`;
        const data = getCall(url);
    };
    return (
        <div style={{ height: '100vh' }}>
            BLOG DETAILS
        </div>
    );
};

export default Blog;
