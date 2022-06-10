import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useActions } from '../hooks/useActions';
import { useSelector } from '../hooks/useSelector';
import Image from '../image/Image';

const BlogsPost: React.FC = () => {
    const { id } = useParams()
    const data = useSelector(state => state.blogsPost.data);
    const loading = useSelector(state => state.blogsPost.loading)
    const error = useSelector(state => state.blogsPost.error)

    const { fetchblogsPost } = useActions()

    useEffect(() => {
        fetchblogsPost(id);
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
            {data.title}
        </div>
        <div className='date'>
            {data.publishedAt}
        </div>
        <div className='text'>
            {data.summary}
        </div>
        <div className='url'>
            <p><a href={data.url}>Read more</a></p>
        </div>
    </div>);
}
export default BlogsPost;