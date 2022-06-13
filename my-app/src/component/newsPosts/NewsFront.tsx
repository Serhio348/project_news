import React, { useEffect, useState } from 'react';
import { Paper, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useActions } from '../hooks/useActions';
import { useSelector } from '../hooks/useSelector';
import NewsCard from './card/NewsCard';
import { NewsGrade } from '../../enums/newsGrade';

enum Mode {
    LIKED,
    DISLIKED,
    MARKED,
}
const NewsFront: React.FC = () => {
    const [mode, setMode] = useState(Mode.LIKED);

    const { fetchAllPosts } = useActions();
    const data = useSelector(state => state.newsPosts.data);
    const loading = useSelector(state => state.newsPosts.loading);
    const error = useSelector(state => state.newsPosts.error);

    const grades = useSelector(state => state.newsPosts.grades);
    const marks = useSelector(state => state.newsPosts.marks);

    const filterdData = data
        .filter(item => {
            if (mode === Mode.LIKED) {
                return grades[item.id] === NewsGrade.LIKE;
            } else if (mode === Mode.DISLIKED) {
                return grades[item.id] === NewsGrade.DISLIKE;
            } if (mode === Mode.MARKED) {
                return marks.includes(item.id);
            }
            return false;
        });
    useEffect(() => {
        fetchAllPosts();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleToggleMode = (_: React.MouseEvent<HTMLElement>, newMode: Mode) => {
        setMode(newMode);
    };
    return (
        <div>
            <Paper elevation={3} className='posts-filter'>
                <ToggleButtonGroup
                    value={mode}
                    exclusive
                    onChange={handleToggleMode}
                >
                    <ToggleButton value={Mode.LIKED}>
                        Liked
                    </ToggleButton>
                    <ToggleButton value={Mode.DISLIKED}>
                        Disliked
                    </ToggleButton>
                    <ToggleButton value={Mode.MARKED}>
                        Marked
                    </ToggleButton>
                </ToggleButtonGroup>
            </Paper>
            {!loading && !error &&
                <div className='cards'>
                    {filterdData.map((item) => <NewsCard key={item.id} data={item} />)}
                    {filterdData.length === 0 && "Data is empty"}
                </div>
            }
            {loading && "Loading..."}
            {error}
        </div>
    )
}
export default NewsFront;