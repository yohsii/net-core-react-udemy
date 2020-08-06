import { combineReducers } from 'redux';
import postsReducer from './PostsReducer';
import { usersReducer } from './UsersReducer';

export default combineReducers({ posts: postsReducer, users: usersReducer });