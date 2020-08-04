import { combineReducers } from 'redux';
import postsReducer from './PostsReducer';

export default combineReducers({posts:postsReducer});