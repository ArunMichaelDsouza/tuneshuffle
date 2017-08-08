// Combine reducer

import { combineReducers } from 'redux';
import userReducer from './userReducer';
import playlistReducer from './playlistReducer';

const allReducers = combineReducers({
    users: userReducer,
    playlist: playlistReducer
});

export default allReducers;