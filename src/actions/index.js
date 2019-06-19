import axios from 'axios';
// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const actionTypes = {};

actionTypes.SUCCESS = 'SUCCESS';
actionTypes.FETCHING = 'FETCHING';
actionTypes.FAILURE = 'FAILURE';
// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
export const apiBaseURL = 'https://swapi.co/api/people/';
export function setCharacters(characters) {
    return {
        type: actionTypes.SUCCESS,
        payload: characters,
    };
}


// TODO: Retry fetch after delay
export function fetchFailed(error) {
    return {
        type: actionTypes.FAILURE,
        payload: error,
    };
}

export const fetchCharacters = () => dispatch => {
    axios
        .get(apiBaseURL)
        .then(res => {
            dispatch(setCharacters(res.data.results));
        })
        .catch(error => {
            dispatch(fetchFailed(error.message));
        });

    return {
        type: actionTypes.FETCHING
    }
}