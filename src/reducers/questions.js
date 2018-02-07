import * as actions from '../actions/questions';

const initialState = {
  loading: false,
  currWord: '',
  error: null,
  answer: ''
}

export default function getQuestion(state=initialState, action){
  if(action.type === actions.FETCH_QUESTION_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    });
  }
  else if(action.type === actions.FETCH_QUESTION_SUCCESS) {
    console.log(action);
    return Object.assign({}, state, {
      loading: false,
      currWord: action.currWord,
      answer: action.answer
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