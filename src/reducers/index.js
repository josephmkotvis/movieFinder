import { combineReducers } from 'redux';
import alert from './alert';
import search from './search';
import movie from './movie';


export default combineReducers({
    alert,
    search,
    movie
});