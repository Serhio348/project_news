import NewsType from "../../types/NewsType"
import axios from "axios";
import PostsFilterType from "../../component/newsPosts/PostsFilterTypes";
import actions from "../actions";

const URL = "https://api.spaceflightnewsapi.net/v3/articles";

export const fetchPosts = ({ limit }: PostsFilterType) => async (dispatch: any) => {
    dispatch(actions.setFetchNewsLoading(true));
    dispatch(actions.setFetchNewsError(false));
    dispatch(actions.setFetchNewsData([]));

    // const offset = limit * (page - 1);
    let url = `${URL}?_limit=${limit}`;
    // if (newsSite) {
    //     url += `&_newsSite=${newsSite}`;
    // }
    try {
        const response = await axios.get(url)
        dispatch(actions.setFetchNewsLoading(true))
        dispatch(actions.setFetchNewsData(response.data as NewsType[]))
    } catch {
        dispatch(actions.setFetchNewsError(true));
    }
    dispatch(actions.setFetchNewsLoading(false))

}

