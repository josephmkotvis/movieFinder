import {SET_MOVIE, EMPTY_MOVIES} from '../actions/types';

const initialState= [];

export default function(state = initialState, action){

    const {type, payload} = action;

    switch(type){
        case SET_MOVIE:
            return [...state, payload];
        case EMPTY_MOVIES:
            return initialState;
        default:
            return state;
    }
}