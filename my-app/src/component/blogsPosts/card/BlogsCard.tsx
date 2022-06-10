import React from 'react';
import { Link } from 'react-router-dom';
import NewsType from '../../../types/NewsType';
import Image from '../../image/Image';

import "./BlogsCard.scss";

type PropsType = {
    data: NewsType
}
const BlogsCard: React.FC<PropsType> = ({ data }) => {

    return (
        <div className='posts-card-container'>

            {data.imageUrl
                ?
                <img src={data.imageUrl} alt="Server error" className='image' />
                :
                <div className='image-placeholder'>
                    <div />
                    <div />
                </div>
            }

            <Link to={`/blogsPosts/${data.id}`}>
                <div className='title'>
                    {data.title}

                </div>
                <div className='date'>
                    {data.publishedAt}
                </div>
                <div className='text'>
                    {data.summary}
                </div>
            </Link>


        </div>
    )
}

export default BlogsCard;