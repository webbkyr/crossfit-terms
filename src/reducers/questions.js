import * as actions from '../actions/questions';

const initialState = {
  loading: false,
  currWord: '',
  error: null,
  id: '',
  answer: ''
}

export default function getQuestion(state=initialState, action){
  if(action.type === actions.FETCH_QUESTION_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    });
  }
  else if(action.type === actions.FETCH_QUESTION_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      currWord: action.currWord,
      id: action.id
    })
  }
  else if(action.type === actions.FETCH_QUESTION_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
  }
  return state;
}