import {
    SEARCH_LOADING,
    SEARCH_LOADED,
    SEARCH_FAILED
} from '../actions/types';

const initialState = {
    loading: false
};

export default function (state = initialState, action) {

    const { type } = action;

    switch (type) {
        case SEARCH_LOADING:
            return {
                ...state,
                loading: true
            };
        case SEARCH_LOADED:
            return {
                ...state,
                loading: false
            }
        case SEARCH_FAILED:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}