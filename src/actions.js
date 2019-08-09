import { CHANGE_SEARCH_FIELD,
    REQUEST_DEVELOPERS_PENDING,
    REQUEST_DEVELOPERS_SUCCESS,
    REQUEST_DEVELOPERS_FAILED } from './constants';

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD ,
    payload: text
})

export const requestDevelopers = () => (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => dispatchEvent({ type: REQUEST_DEVELOPERS_SUCCESS, payload: data }))
    .catch(error => dispatchEvent({ type: REQUEST_DEVELOPERS_FAILED, payload: error }))
}