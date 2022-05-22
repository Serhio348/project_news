
import { newsPostsActions } from "./newsPosts/newsPostsSlice";
import { fetchPosts } from "./newsPosts/actionCreators";
import { fetchPost } from "./newsPost/actionCreators";
import { newsPostActions } from "./newsPost/newsPostSlice";

const actions = {
    ...newsPostsActions,
    ...newsPostActions,
    fetchPosts,
    fetchPost,
}

export default actions;