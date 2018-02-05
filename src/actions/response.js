import {API_BASE_URL} from '../config';

export const ADD_RESPONSE_REQUEST = 'ADD_RESPONSE_REQUEST';
export const addResponseRequest = () => ({
    type: ADD_RESPONSE_REQUEST
});

export const ADD_RESPONSE_SUCCESSS = 'ADD_RESPONSE_SUCCESS';
export const addResponseSuccess = () => ({
    type: ADD_RESPONSE_SUCCESS,
    response
});

export const ADD_RESPONSE_ERROR = 'ADD_RESPONSE_ERROR';
export const addResponseError = () => ({
    type: ADD_RESPONSE_ERROR
})

export const addResponse = (response) => dispatch => {
    dispatch(addResponseRequest());
    //double check endpoint when backend is complete
    return fetch(`${API_BASE_URL}/user/responses`, {
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        method: `POST`,
        body: JSON.stringify({
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
        dispatch(addResponseSuccess(data.response))
        .catch(err=>
        dispatch(addResponseError(err))
        )
    })
}