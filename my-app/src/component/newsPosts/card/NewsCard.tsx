import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NewsType from '../../../types/NewsType';
import Image from '../../image/Image';

import "./NewsCard.scss";

type PropsType = {
    data: NewsType
}
const NewsCard: React.FC<PropsType> = ({ data }) => {
    // const navigate = useNavigate();

    // const handleClick = () => {
    //     navigate(`/posts/${data.id}`, {
    //         state: { st: 12 }
    //     });
    // }

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
            <Link to={`/newsPosts/${data.id}`} >
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

export default NewsCard;