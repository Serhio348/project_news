import React, { useEffect, useReducer, useState } from 'react';
import Button from "@mui/material/Button";
import NewsServer from './NewsServer';
import NewsFront from './NewsFront';


type PropsType = {}

const NewsPosts: React.FC<PropsType> = () => {

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
                {isServerMode ? <NewsServer /> : <NewsFront />}
            </div>
        </div>
    )
}
export default NewsPosts;