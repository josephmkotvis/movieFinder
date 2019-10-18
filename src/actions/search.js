import axios from 'axios';
import { setAlert } from './alert';
import { APIKey } from '../utils/keys';
import { setMovie, emptyMovies } from './movie';
import {
    SEARCH_LOADING,
    SEARCH_LOADED,
    SEARCH_FAILED
} from './types';

export const SearchAPI = ({ search, filter }) => async dispatch => {
    dispatch({
        type: SEARCH_LOADING
    })
    try {
        const apiURL = "http://www.omdbapi.com/?apikey=" + APIKey + "&s=" + search + "&type=" + filter;
        const res = await axios.get(apiURL);

        if (res.data.Error) {
            dispatch(setAlert(res.data.Error, 'warning'));
            dispatch({
                type: SEARCH_FAILED
            })
        }
        else {
            dispatch(emptyMovies())
            res.data.Search.forEach(movie => { dispatch(setMovie(movie)) });
            dispatch({
                type: SEARCH_LOADED
            })
        }
    } catch (err) {
        dispatch(setAlert('Your search was unsuccessful', 'danger'))

    }

}

export const searchFailed = () => async dispatch => { }