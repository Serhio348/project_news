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

    const handleChangeLimit = (value: string) => {
        dispatch(setLimit(+value));
    }
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