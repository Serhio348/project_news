import React from 'react';
import Pagination from '@mui/material/Pagination';
import { MenuItem, Paper } from '@mui/material';
import PostsFilterType from './PostsFilterTypes';
import { setLimit, setPage } from './NewsFilterActionCreators';
import { useSelector } from '../hooks/useSelector';
import { useActions } from '../hooks/useActions';
import Select from '../ui/select/Select';
;


type PropsType = {
    count: number,
    state: PostsFilterType,
    dispatch: any,
}


const NewsFilter: React.FC<PropsType> = ({ count, state, dispatch }) => {

    // const page = useSelector(state => state.newsFilterPosts.page);
    // const limit = useSelector(state => state.newsFilterPosts.limit);
    // const count = useSelector(state => state.newsFilterPosts.count);

    // const { setLimit, setPage } = useActions();
    // const updateAuthor = (value: string) => {
    //     dispatch(setAuthor(value));
    // }

    // const updateLesson = (value: string) => {
    //     dispatch(setLesson(value));
    // }

    // const handleChangeOrdering = (value: string) => {
    //     dispatch(setOrdering(value as PostsOrder));
    // }

    const handleChangeLimit = (value: string) => {
        dispatch(setLimit(+value));
    }


    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(setPage(value));
    }

    return (
        <Paper elevation={3} className='posts-filter'>

            {/* <TextField
                label="Author"
                value={state.author?.toString()}
                setValue={updateAuthor}
            />

            <TextField
                label="Lesson"
                value={state.lesson_num?.toString()}
                setValue={updateLesson}
            />


            <Select
                label="Ordering"
                value={state.ordering}
                setValue={handleChangeOrdering}
            >
                <MenuItem value={PostsOrder.idAsc}>ASC id</MenuItem>
                <MenuItem value={PostsOrder.idDesc}>DESC id</MenuItem>
                <MenuItem value={PostsOrder.dateAsc}>ASC date</MenuItem>
                <MenuItem value={PostsOrder.dateDesc}>DESC date</MenuItem>
            </Select> */}



            <Pagination
                className='pagination'
                page={state.page}
                onChange={handleChangePage}
                count={Math.ceil(count / state.limit)}

            />
            <Select
                label="News per page"
                value={state.limit.toString()}
                setValue={handleChangeLimit}
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </Paper>
    )
}


export default NewsFilter;