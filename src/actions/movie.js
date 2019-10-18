import { SET_MOVIE, EMPTY_MOVIES } from './types';

export const setMovie = (movie) => dispatch => {
    dispatch({
        type: SET_MOVIE,
        payload: movie
    });
}
export const emptyMovies = () => dispatch => {
    dispatch({
        type: EMPTY_MOVIES
    })
}