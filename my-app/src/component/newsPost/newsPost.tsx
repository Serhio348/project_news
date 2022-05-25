import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useActions } from '../hooks/useActions';
import { useSelector } from '../hooks/useSelector';
import Image from '../image/Image';




const URL = "https://api.spaceflightnewsapi.net/v3/articles/15105";

const NewsPost: React.FC = () => {
    const { id } = useParams()


    const data = useSelector(state => state.newsPost.data);
    const loading = useSelector(state => state.newsPost.loading)
    const error = useSelector(state => state.newsPost.error)

    const { fetchPost } = useActions()

    useEffect(() => {
        fetchPost(id);
    }, [id]);

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
    } else if (!data) {
        return (
            null
        )
    }

    return (<div className='post-card-container'>

        <Image src={data.imageUrl} />
        <div className='title'>
            <p><a href={data.url}>{data.title}</a></p>
        </div>

        <div className='date'>
            {data.publishedAt}
        </div>
        <div className='text'>
            {data.summary}
        </div>
    </div>);


}

export default NewsPost;