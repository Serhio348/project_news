import BlogsFilterType, { BlogsFilterActionTypes, BlogsFilterAction, BlogsDate } from "./BlogsFilterTypes";


export const initialState: BlogsFilterType = {
    page: 1,
    limit: 10,
    sorting: BlogsDate.title,
}
export const BlogsFilterReducer = (state: BlogsFilterType, action: BlogsFilterAction): BlogsFilterType => {
    switch (action.type) {
        case BlogsFilterActionTypes.SET_PAGE_TYPE:
            return {
                ...state,
                page: action.payload,
            }
        case BlogsFilterActionTypes.SET_LIMIT_TYPE:
            return {
                ...state,
                page: 1,
                limit: action.payload,
            }
        case BlogsFilterActionTypes.SET_SORT_TYPE:
            return {
                ...state,
                sorting: action.payload
            }
        case BlogsFilterActionTypes.SET_TITLE_TYPE: {
            const numValue = action.payload
            if (isNaN(numValue.length)) {
                return state;
            }
            const title = numValue.length > 0 ? numValue : undefined;
            return {
                ...state,
                title,
            }
        }
        default: return state;
    }
}