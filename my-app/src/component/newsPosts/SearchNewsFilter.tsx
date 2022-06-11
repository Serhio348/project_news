import React from 'react';
import PostsFilterType from './PostsFilterTypes';
import { setTitle } from './NewsFilterActionCreators';
import TextField from '../ui/textField/TextField';

type PropsType = {
    state: PostsFilterType,
    dispatch: any,
}
const SearchNewsFilter: React.FC<PropsType> = ({ state, dispatch }) => {
    const updateTitle = (value: string) => {
        dispatch(setTitle(value));
    }
    return (
        <TextField
            label=""
            value={state.title?.toString()}
            setValue={updateTitle}
            placeholder="Search"
        />
    )
}
export default SearchNewsFilter;