import React, { useEffect, useState } from 'react';
import NewsCard from '../newsPosts/card/NewsCard';
import NewsType from '../types/NewsType';


type PropsType = {
    country: string
}

const URL = "https://newsdata.io/api/1/news?apikey=pub_7061f23b9c88a64a6a598c30b0d48a0a4687&country=ua";

const NewsPost: React.FC<PropsType> = ({ country }) => {
    const [newsPost, setNewsPost] = useState<NewsType>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    useEffect(() => {
        console.log(newsPost);
    }, [newsPost]);


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        setLoading(true);
        setTimeout(() => {
            fetch(`${URL}${country}`)
                .then((response) => response.json())
                .then((data) => {
                    const newsPost = data as NewsType;
                    setNewsPost(newsPost);
                })
                .catch(() => {
                    setError(true);
                })
                .finally(() => {
                    setLoading(false);
                })
        }, 0);
    }

    if (loading) {
        return (
            <div>
                Loading...
            </div>
        )
    } else if (error) {
        return (
            <div>
                Error...
            </div>
        )
    } else if (newsPost) {
        return (
            <NewsCard data={newsPost} />
        )
    }

    return null;


}

export default NewsPost;