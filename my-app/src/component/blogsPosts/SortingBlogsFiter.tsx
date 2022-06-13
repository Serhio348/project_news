import React from 'react';
import PostsFilterType, { NewsDate } from '../newsPosts/PostsFilterTypes';
import Select from '../ui/select/Select';
import { MenuItem } from '@mui/material';
import { setLimit, setSorting } from '../newsPosts/NewsFilterActionCreators';


type PropsType = {
    state: PostsFilterType,
    dispatch: any,
}
const SortingBlogsFilter: React.FC<PropsType> = ({ state, dispatch }) => {
    const handleChangeLimit = (value: string) => {
        dispatch(setLimit(+value));
    }
    const handleChangeDate = (value: string) => {
        dispatch(setSorting(value as NewsDate));
    }
    return (
        <div className='select-filter'>
            <Select
                label=""
                value={state.sorting}
                setValue={handleChangeDate}
            >
                <MenuItem value={NewsDate.date}>by date</MenuItem>
                <MenuItem value={NewsDate.rating}>by rating</MenuItem>
                <MenuItem value={NewsDate.title}>by title</MenuItem>
            </Select>
            <Select
                label=""
                value={state.limit.toString()}
                setValue={handleChangeLimit}
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </div>
    )
}
export default SortingBlogsFilter;