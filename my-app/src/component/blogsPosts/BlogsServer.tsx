import React, { useEffect, useReducer } from 'react';
import { useActions } from '../hooks/useActions';
import { useSelector } from '../hooks/useSelector';
import NewsFilter from '../newsPosts/NewsFilter';
import { initialState, NewsFilterReducer } from '../newsPosts/NewsFilterReducer';
import SortingNewsFilter from '../newsPosts/SortingNewsFilter';

import "./BlogsPosts.scss";
import BlogsCard from './card/BlogsCard';

type PropsType = {};

const BlogsPosts: React.FC<PropsType> = () => {
    const [state, dispatch] = useReducer(NewsFilterReducer, initialState);
    const { fetchBlogsPosts } = useActions();
    const data = useSelector(state => state.blogsPosts.data);
    const loading = useSelector(state => state.blogsPosts.loading);
    const error = useSelector(state => state.blogsPosts.error);
    const count = useSelector(state => state.blogsPosts.count)

    useEffect(() => {
        fetchBlogsPosts(state);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state]);

    return (
        <div className='posts-container'>
            <SortingNewsFilter
                dispatch={dispatch}
                state={state}
            />
            <div className='cards'>
                {data.map((item) => <BlogsCard key={item.id} data={item} />)}
            </div>
            {loading && "Loading..."}
            {error && "Error ("}
            <NewsFilter
                count={count}
                state={state}
                dispatch={dispatch}
            />
        </div>
    )
}

export default BlogsPosts;