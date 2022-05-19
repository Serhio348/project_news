import * as postActions from "./newsPost/actionCretors"
import { newsActions } from "./newsPosts/newsPostsSlice";
import { fetchPosts } from "./newsPosts/actionCreators";
const actions = {
    ...postActions,
    ...newsActions,
    fetchPosts,

}

export default actions;