import React from 'react';
import { Link } from 'react-router-dom';
import NewsType from '../../../types/NewsType';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { IconButton } from '@mui/material';

import "./NewsCard.scss";
import { useActions } from '../../hooks/useActions';
import { useSelector } from '../../hooks/useSelector';
import { NewsGrade } from '../../../enums/NewsGrade';

type PropsType = {
    data: NewsType
}
const NewsCard: React.FC<PropsType> = ({ data }) => {
    const { likeNews, dislikeNews, markNews } = useActions()
    const grades = useSelector(state => state.newsPosts.grades)
    const isLiked = grades[data.id] === NewsGrade.LIKE;
    const isDisliked = grades[data.id] === NewsGrade.DISLAKE;

    const marks = useSelector(state => state.newsPosts.marks);
    const isMarked = marks.includes(data.id)


    const handleClickLike = () => likeNews(data.id);
    const handleClickDislike = () => dislikeNews(data.id);
    const handleClickMark = () => markNews(data.id);

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

            <Link to={`/newsPosts/${data.id}`}>
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
            <IconButton onClick={handleClickLike}>
                <ThumbUpAltIcon fontSize="small" className={`icon ${isLiked ? "_liked" : ""}`} />
            </IconButton>

            <IconButton onClick={handleClickDislike}>
                <ThumbDownAltIcon fontSize="small" className={`icon ${isDisliked ? "_disliked" : ""}`} />
            </IconButton>

            <IconButton onClick={handleClickMark}>
                <BookmarkIcon fontSize="small" className={`icon ${isMarked ? "_marked" : ""}`} />
            </IconButton>

        </div >
    )
}

export default NewsCard;