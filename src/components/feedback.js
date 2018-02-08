import React from 'react';
import { connect } from 'react-redux';

import './feedback.css';

export function Feedback(props){
    //{console.log(props)}
    if(props.view !== 'feedback'){
      return null;
    }
    else {
      let isCorrect = false;
      
      if(props.correctAnswer.toLowerCase().trim() === props.userAnswer.toLowerCase().trim()){
        isCorrect = true;
        return(
          <div className="feedback">
            <h1 className="feedback-correct">Yes, that's correct!</h1>
          </div>
        )
      }
      else{
        return(
          <div className="feedback">
            <h1 className="feedback-wrong">Sorry, that's incorrect!</h1>
          </div>
        )
      }
    }
}

const mapStateToProps = (state, props) => {
  return {
    correctAnswer: state.question.answer,
    view: state.response.view,
    userAnswer: state.response.response
  }
}

export default connect(mapStateToProps)(Feedback);