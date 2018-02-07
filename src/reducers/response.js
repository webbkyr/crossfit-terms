import {
    ADD_RESPONSE_REQUEST,
    ADD_RESPONSE_SUCCESS,
    ADD_RESPONSE_ERROR,
    UPDATE_NEW_RESPONSE
} from '../actions/response';

const initialState = {
    response: '',
    loading: false,
    error: null,
    view: ''
}

export default function responseReducer(state = initialState, action){
    if(action.type === ADD_RESPONSE_REQUEST) {
        return Object.assign({}, state, {
            loading: action.loading,
            error: action.error
        })
    }
    else if(action.type === UPDATE_NEW_RESPONSE) {
        return Object.assign({}, state, {
        response: action.response,
        loading: action.loading,
        error: action.error,
        view: action.view
        })
    }
    else if(action.type === ADD_RESPONSE_SUCCESS) {
        return Object.assign({}, state, {
            response: action.response,
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