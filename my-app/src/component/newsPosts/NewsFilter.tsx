import React from 'react';
import Pagination from '@mui/material/Pagination';
import { MenuItem, Paper } from '@mui/material';
import PostsFilterType from './PostsFilterTypes';
import { setLimit, setPage } from './NewsFilterActionCreators';
import Select from '../ui/select/Select';

type PropsType = {
    count: number,
    state: PostsFilterType,
    dispatch: any,
}
const NewsFilter: React.FC<PropsType> = ({ count, state, dispatch }) => {
    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(setPage(value));
    }
    return (
        <Paper elevation={3} className='posts-filter'>
            <Pagination
                className='pagination'
                page={state.page}
                onChange={handleChangePage}
                count={Math.ceil(count / state.limit)}
            />
        </Paper>
    )
}
export default NewsFilter;