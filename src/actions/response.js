import {API_BASE_URL} from '../config';

export const ADD_RESPONSE_REQUEST = 'ADD_RESPONSE_REQUEST';
export const addResponseRequest = () => ({
    type: ADD_RESPONSE_REQUEST
});

export const ADD_RESPONSE_SUCCESS = 'ADD_RESPONSE_SUCCESS';
export const addResponseSuccess = (id, response) => ({
    type: ADD_RESPONSE_SUCCESS,
    id,
    response
});

export const ADD_RESPONSE_ERROR = 'ADD_RESPONSE_ERROR';
export const addResponseError = () => ({
    type: ADD_RESPONSE_ERROR
})

export const addResponse = (id, response) => (dispatch, getState) => {
    dispatch(addResponseRequest());
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/users/responses`, {
        headers: { 'Authorization': `Bearer ${authToken}`, 'Accept': 'application/json', 'Content-Type': 'application/json' },
        method: `POST`,
        body: JSON.stringify({
            id,
            response
        })
    })
    .then(res => {
        if(!res.ok) {
            throw new Error(res.statusTest)
        }
        return res.json();
    })
    .then(data => {
        console.log(data.message);
        dispatch(addResponseSuccess(data.message))})
    .catch(err=> {
        dispatch(addResponseError(err))
        })
}