import { PostsFilterAction, PostsFilterActionTypes } from "./PostsFilterTypes";


export const setPage = (value: number): PostsFilterAction => ({
    type: PostsFilterActionTypes.SET_PAGE_TYPE,
    payload: value
})
export const setLimit = (value: number): PostsFilterAction => ({
    type: PostsFilterActionTypes.SET_LIMIT_TYPE,
    payload: value,
});