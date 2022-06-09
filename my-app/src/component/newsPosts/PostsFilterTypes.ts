export enum NewsDate {
    date = "publishedAt",
    rating = "id",
    title = "title",
}

export enum PostsFilterActionTypes {
    SET_PAGE_TYPE = "SET_PAGE_TYPE",
    SET_LIMIT_TYPE = "SET_LIMIT_TYPE",
    SET_TITLE_TYPE = "SET_TITLE_TYPE",
    SET_SORT_TYPE = "SET_SORT_TYPE",
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
type SetSortAction = {
    type: PostsFilterActionTypes.SET_SORT_TYPE,
    payload: NewsDate,
}


export type PostsFilterAction =
    SetPageAction
    | SetLimitAction
    | SetTitleAction
    | SetSortAction


type PostsFilterType = {
    limit: number
    page: number
    start?: number
    title?: string
    sorting: NewsDate
}

export default PostsFilterType;