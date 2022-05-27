import NewsType from "../../types/NewsType"
import axios from "axios";
import actions from "../actions";

const URL = "https://api.spaceflightnewsapi.net/v3/articles";

export const fetchPost = (id?: string) => async (dispatch: any) => {
    dispatch(actions.setFetchNewsPostLoading(true));
    dispatch(actions.setFetchNewsPostError(false));
    dispatch(actions.setFetchNewsPostData(undefined));

    const url = `${URL}/${id}`;
    try {
        const response = await axios.get(url)
        dispatch(actions.setFetchNewsPostData(response.data as NewsType))
    } catch {
        dispatch(actions.setFetchNewsPostError(true));
    }
    dispatch(actions.setFetchNewsPostLoading(false))
}

