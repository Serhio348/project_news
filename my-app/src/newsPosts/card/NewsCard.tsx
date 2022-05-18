
import React from "react";
import NewsType from "../../types/NewsType";


import "./NewsCard.scss"

type PropsType = {
    data: NewsType
}


const NewsCard: React.FC<PropsType> = ({ data }) => {
    return (
        <div className='post-card-container'>

            {data.image_url
                ?
                <img src={data.image_url} alt="Server error" className='image' />
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
                {data.description}
            </div>
            <div className='date'>
                {data.pubDate}
            </div>
        </div>
    )
}

export default NewsCard;