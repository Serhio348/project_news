import React, { useEffect, useState } from 'react';
import NewsCard from './card/NewsCard';


import "./newsPosts.scss";
import useNews from './useNews';

type PropsType = {};


const URL = "https://newsdata.io/api/1/news?apikey=pub_7061f23b9c88a64a6a598c30b0d48a0a4687&country=ua";

const News: React.FC<PropsType> = () => {

    const { news, loading, error } = useNews()
    return (
        <div className='posts-container'>
            {news.map((item) => <NewsCard data={item} />)}
            {loading && "Loading..."}
            {error && "Error ("}
        </div>
    )
}


export default News;