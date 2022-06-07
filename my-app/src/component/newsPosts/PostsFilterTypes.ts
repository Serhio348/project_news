export enum PostsFilterActionTypes {
    SET_PAGE_TYPE = "SET_PAGE_TYPE",
    SET_LIMIT_TYPE = "SET_LIMIT_TYPE",
    SET_TITLE_TYPE = "SET_TITLE_TYPE",
}

type SetPageAction = {
    type: PostsFilterActionTypes.SET_PAGE_TYPE,
    payload: number,
}

type SetLimitAction = {
    type: PostsFilterActionTypes.SET_LIMIT_TYPE,
    payload: number,
}

type SetTitleAction = {
    type: PostsFilterActionTypes.SET_TITLE_TYPE,
    payload: string,
}

export type PostsFilterAction =
    SetPageAction
    | SetLimitAction
    | SetTitleAction

type PostsFilterType = {
    limit: number
    page: number
    start?: number
    title?: string
}

export default PostsFilterType;