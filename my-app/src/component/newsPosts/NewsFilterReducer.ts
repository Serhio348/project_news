import PostsFilterType, { PostsFilterActionTypes, PostsFilterAction } from "./PostsFilterTypes";


export const initialState: PostsFilterType = {
    page: 1,
    limit: 10,


}

export const NewsFilterReducer = (state: PostsFilterType, action: PostsFilterAction): PostsFilterType => {
    switch (action.type) {
        case PostsFilterActionTypes.SET_PAGE_TYPE:
            return {
                ...state,
                page: action.payload,
            }
        case PostsFilterActionTypes.SET_LIMIT_TYPE:
            return {
                ...state,
                page: 1,
                limit: action.payload,
            }


        default: return state;
    }
}