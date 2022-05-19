import React, { useEffect, useReducer, useState } from 'react';
import { useSelector } from '../hooks/useSelector';
import NewsCard from './card/NewsCard';
import { useActions } from '../hooks/useActions';
import { initialState, NewsFilterReducer } from './NewsFilterReducer';

import "./NewsPosts.scss";

type PropsType = {};

const NewsPosts: React.FC<PropsType> = () => {
    const [state] = useReducer(NewsFilterReducer, initialState);

    const { fetchPosts } = useActions()

    const data = useSelector(state => state.newsPosts.data)
    const loading = useSelector(state => state.newsPosts.loading)
    const error = useSelector(state => state.newsPosts.error)

    useEffect(() => {
        fetchPosts(state)
    }, [state])

    return (
        <div className='posts-container'>
            <div className='cards'>
                {data.map((item) => <NewsCard key={item.id} data={item} />)}
            </div>
            {loading && "Loading..."}
            {error && "Error ("}
        </div>
    )
}


export default NewsPosts;