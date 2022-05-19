import PostsFilterType, { PostsFilterActionTypes, PostsOrder, PostsFilterAction } from "./PostsFilterTypes";


export const initialState: PostsFilterType = {
    limit: 20,
}

export const NewsFilterReducer = (state: PostsFilterType, action: PostsFilterAction): PostsFilterType => {
    switch (action.type) {
        case PostsFilterActionTypes.SET_LIMIT_TYPE:
            return {
                ...state,
                limit: action.payload
            }

        default: return state;
    }
}