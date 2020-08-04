import jsonPlaceHolder from '../api/JsonPlaceholder';

export const fetchPosts = () => async (dispatch, getState) => {
    const response = await jsonPlaceHolder.get("/posts");
    dispatch({
        type: "FETCH_POSTS",
        payload: response.data
    });
}

export const fetchUser = id => async (dispatch, getState) => {
    const response = await jsonPlaceHolder.get(`/users/${id}`);
    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    });
}