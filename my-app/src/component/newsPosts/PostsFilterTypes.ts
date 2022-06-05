export enum PostsFilterActionTypes {
    SET_PAGE_TYPE = "SET_PAGE_TYPE",
    SET_LIMIT_TYPE = "SET_LIMIT_TYPE",
    SET_NEWSSITE_TYPE = "SET_NEWSSITE_TYPE",
}

type SetPageAction = {
    type: PostsFilterActionTypes.SET_PAGE_TYPE,
    payload: number,
}

type SetLimitAction = {
    type: PostsFilterActionTypes.SET_LIMIT_TYPE,
    payload: number,
}

type SetNewsSiteAction = {
    type: PostsFilterActionTypes.SET_NEWSSITE_TYPE,
    payload: string,
}

export type PostsFilterAction =
    SetPageAction
    | SetLimitAction
    | SetNewsSiteAction

type PostsFilterType = {
    limit: number
    page: number
    start?: number
    newsSite?: string
}

export default PostsFilterType;