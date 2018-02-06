import {
    ADD_RESPONSE_REQUEST,
    ADD_RESPONSE_SUCCESS,
    ADD_RESPONSE_ERROR
} from '../actions/response';

const initialState = {
    response: '',
    loading: false,
    error: null
}

export const responseReducer = (state = initialState, action) => {
    if(action.type === ADD_RESPONSE_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        })
    }
    else if(action.type === ADD_RESPONSE_SUCCESS) {
        return Object.assign({}, state, {
            response: action.response,
            view: 'feedback'
        })
    }
    else if(action.type === ADD_RESPONSE_ERROR) {
        return Object.assign({}, state, {
            error: action.error,
            loading: false
        })
    }
    return state;
}