
import React from "react";
import NewsType from "../../types/NewsType";


import "./NewsCard.scss"

type PropsType = {
    data: NewsType
}


const NewsCard: React.FC<PropsType> = ({ data }) => {
    return (
        <div className='post-card-container'>

            {data.imageUrl
                ?
                <img src={data.imageUrl} alt="Server error" className='image' />
                :
                <div className='image-placeholder'>
                    <div />
                    <div />
                </div>
            }

            <div className='title'>
                {data.title}
            </div>
            <div className='text'>
                {data.summary}
            </div>
            <div className='date'>
                {data.publishedAt}
            </div>
        </div>
    )
}

export default NewsCard;