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

export const UPDATE_NEW_RESPONSE = 'UPDATE_NEW_RESPONSE';
export const updateNewResponse = (userResponse) => ({
    type: UPDATE_NEW_RESPONSE,
    response: userResponse,
    loading: false,
    view: 'feedback',
    error: null
})

// export const UPDATE_PROGRESS_REQUEST = 'UPDATE_PROGRESS_REQUEST';
// export const updateProgressRequest = () => ({
//     type: UPDATE_PROGRESS_REQUEST  
// })

// export const UPDATE_PROGRESS_SUCCESS = 'UPDATE_PROGRESS_SUCCESS';
// export const updateProgressRequest = () => ({
//     type: UPDATE_PROGRESS_SUCCESS,
//     answer
// })

// export const UPDATE_PROGRESS_ERROR = 'UPDATE_PROGRESS_ERROR';
// export const updateProgressError = () => ({
//     type: UPDATE_PROGRESS_ERROR,
// })

export const addResponse = (response) => (dispatch, getState) => {
    dispatch(updateNewResponse(response));
    dispatch(addResponseRequest());
    const data = getState().auth;
    const authToken = data.authToken;
    const uid = data.currentUser.id;
    const question = getState().question.currWord;
    // const corrAnswer = getState().question.answer;
    // console.log('data: ', question);
    return fetch(`${API_BASE_URL}/users/responses`, {
        headers: { 'Authorization': `Bearer ${authToken}`, 'Accept': 'application/json', 'Content-Type': 'application/json' },
        method: `POST`,
        body: JSON.stringify({
            response,
            uid,
            question
        })
    })
    .then(res => {
        if(!res.ok) {
            throw new Error(res.statusTest)
        }
        return res.json();
    })
    .then(data => {
        console.log('here');
    })
    .catch(err=> {
        dispatch(addResponseError(err))
        })
}

export const updateProgress = (response) => (dispatch, getState) => {
    const corrAnswer = getState().question.answer;
    if ( response.toLowerCase().trim() === corrAnswer.toLowerCase().trim()) {
        console.log(1);
    }
    else {
        console.log(0);
    }
}