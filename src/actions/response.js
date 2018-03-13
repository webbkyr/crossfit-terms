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
export const addResponseError = err => ({
    type: ADD_RESPONSE_ERROR,
    err

})

export const UPDATE_NEW_RESPONSE = 'UPDATE_NEW_RESPONSE';
export const updateNewResponse = (userResponse) => ({
    type: UPDATE_NEW_RESPONSE,
    response: userResponse,
    loading: false,
    view: 'feedback',
    error: null
})

export const INCREMENT_SCORE = 'INCREMENT_SCORE';
export const incrementScore = (numCorrect, totalQuest) => ({
    type: INCREMENT_SCORE,
    numCorrect: numCorrect + 1,
    totalQuest: totalQuest + 1
})

export const INCREMENT_TOTAL = 'INCREMENT_TOTAL';
export const incrementTotal = (totalQuest) => ({
    type: INCREMENT_TOTAL,
    totalQuest: totalQuest + 1
})

export const UPDATE_VIEW = 'UPDATE_VIEW';
export const updateView = () => ({
    type: UPDATE_VIEW,
    view: ''
})

export const addResponse = (response) => (dispatch, getState) => {
    dispatch(updateNewResponse(response));
    dispatch(addResponseRequest());
    const authToken = getState().auth.authToken;
    const uid = getState().auth.currentUser.id;
    const question = getState().question.currWord.question;
    return fetch(`${API_BASE_URL}/responses`, {
        headers: { 'Authorization': `Bearer ${authToken}`, 'Accept': 'application/json', 'Content-Type': 'application/json' },
        method: `POST`,
        body: JSON.stringify({
            response,
            uid,
            question
        })
    })
    .then(res => {
        console.log(res)
        if(!res.ok) {
            throw new Error(res.statusTest)
        }
    })
    .catch(err => {
        dispatch(addResponseError(err))
        })
}

export const updateProgress = response => (dispatch, getState) => 
{
    const corrAnswer = getState().question.answer;
    const numCorrect = getState().response.numCorrect;
    const totalQuest = getState().response.totalQuest;

    if ( response === corrAnswer.toLowerCase()) {
        dispatch(incrementScore(numCorrect, totalQuest));
    }
    else {
        dispatch(incrementTotal(totalQuest));
    }
}