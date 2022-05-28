export enum PostsOrder {
    idAsc = "id",
    idDesc = "-id",
    dateAsc = "date",
    dateDesc = "-date",
}

export enum PostsFilterActionTypes {
    SET_PAGE_TYPE = "SET_PAGE_TYPE",
    SET_LIMIT_TYPE = "SET_LIMIT_TYPE",
    SET_ORDER_TYPE = "SET_ORDER_TYPE",
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

type SetOrderAction = {
    type: PostsFilterActionTypes.SET_ORDER_TYPE,
    payload: PostsOrder,
}

type SetNewsSiteAction = {
    type: PostsFilterActionTypes.SET_NEWSSITE_TYPE,
    payload: string,
}

export type PostsFilterAction =
    SetPageAction
    | SetLimitAction
    | SetNewsSiteAction
    | SetOrderAction

type PostsFilterType = {
    limit: number
    page?: number
    newsSite?: string
    ordering?: PostsOrder
}

export default PostsFilterType;