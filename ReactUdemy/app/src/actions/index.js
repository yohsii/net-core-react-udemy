import jsonPlaceHolder from '../api/JsonPlaceholder';
import _ from 'lodash';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    console.log("about to fetch posts");
    await dispatch(fetchPosts());
    console.log("fetched posts");
    const userIds = _.uniq(_.map(getState().posts, 'userId'));
    console.log("user ids", userIds);
    userIds.forEach(x => dispatch(fetchUser(x)));
}

export const fetchPosts = () => async (dispatch, getState) => {
    const response = await jsonPlaceHolder.get("/posts");
    dispatch({
        type: "FETCH_POSTS",
        payload: response.data
    });
}

export const fetchUser = (id) => async (dispatch, getState) => {
    const response = await jsonPlaceHolder.get(`/users/${id}`);
    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    });
}


//export const fetchUser = (id) => (dispatch, getState) => {
//    return _fetchUser(id,dispatch);        
//}
//const _fetchUser = _.memoize(async (id, dispatch) => {
//    const response = await jsonPlaceHolder.get(`/users/${id}`);
//    dispatch({
//        type: 'FETCH_USER',
//        payload: response.data
//    });
//});

