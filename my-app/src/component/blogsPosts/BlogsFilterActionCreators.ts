import { BlogsDate, BlogsFilterAction, BlogsFilterActionTypes } from "./BlogsFilterTypes";


export const setPage = (value: number): BlogsFilterAction => ({
    type: BlogsFilterActionTypes.SET_PAGE_TYPE,
    payload: value
})
export const setLimit = (value: number): BlogsFilterAction => ({
    type: BlogsFilterActionTypes.SET_LIMIT_TYPE,
    payload: value,
});
export const setTitle = (value: string): BlogsFilterAction => ({
    type: BlogsFilterActionTypes.SET_TITLE_TYPE,
    payload: value,
});
export const setSorting = (value: BlogsDate): BlogsFilterAction => ({
    type: BlogsFilterActionTypes.SET_SORT_TYPE,
    payload: value,
});