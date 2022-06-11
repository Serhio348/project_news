import React from 'react';
import Pagination from '@mui/material/Pagination';
import { Paper } from '@mui/material';
import BlogsFilterType from './BlogsFilterTypes';
import { setPage } from './BlogsFilterActionCreators';

type PropsType = {
    count: number,
    state: BlogsFilterType,
    dispatch: any,
}
const BlogsFilter: React.FC<PropsType> = ({ count, state, dispatch }) => {
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
export default BlogsFilter;