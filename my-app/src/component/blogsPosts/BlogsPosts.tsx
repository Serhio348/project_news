import { Button } from '@mui/material';
import React, { useState } from 'react';
import BlogsFront from './BlogsFront';
import BlogsServer from './BlogsServer';

import "./BlogsPosts.scss";
type PropsType = {};

const BlogsPosts: React.FC<PropsType> = () => {
    const [isServerMode, setIsServerMode] = useState(true)
    const handleToggleMode = () => setIsServerMode((prev) => !prev)
    return (
        <div className='posts-container'>
            <Button
                variant="text"
                onClick={handleToggleMode}
                className="button-click"
            > Bookmark</Button>
            <div className="mode-container">
                {isServerMode ? <BlogsServer /> : <BlogsFront />}
            </div>
        </div>
    )
}

export default BlogsPosts;