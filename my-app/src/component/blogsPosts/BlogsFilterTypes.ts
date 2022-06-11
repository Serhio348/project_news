export enum BlogsDate {
    date = "publishedAt",
    rating = "id",
    title = "title",
}

export enum BlogsFilterActionTypes {
    SET_PAGE_TYPE = "SET_PAGE_TYPE",
    SET_LIMIT_TYPE = "SET_LIMIT_TYPE",
    SET_TITLE_TYPE = "SET_TITLE_TYPE",
    SET_SORT_TYPE = "SET_SORT_TYPE",
}

type SetPageAction = {
    type: BlogsFilterActionTypes.SET_PAGE_TYPE,
    payload: number,
}

type SetLimitAction = {
    type: BlogsFilterActionTypes.SET_LIMIT_TYPE,
    payload: number,
}

type SetTitleAction = {
    type: BlogsFilterActionTypes.SET_TITLE_TYPE,
    payload: string,
}
type SetSortAction = {
    type: BlogsFilterActionTypes.SET_SORT_TYPE,
    payload: BlogsDate,
}


export type BlogsFilterAction =
    SetPageAction
    | SetLimitAction
    | SetTitleAction
    | SetSortAction


type BlogsFilterType = {
    limit: number
    page: number
    start?: number
    title?: string
    sorting: BlogsDate
}

export default BlogsFilterType;