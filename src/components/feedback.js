import React from 'react';
import { connect } from 'react-redux';

import './feedback.css';

export function Feedback(props){
    if(props.view !== 'feedback'){
      return null;
    }
    else {
      if(props.correctAnswer === 'thank you'){
        return(
          <div className="feedback">
            <h1 className="feedback-correct">I'm the correct feedback</h1>
          </div>
        )
      }
      else{
        return(
          <div className="feedback">
            <h1 className="feedback-wrong">I'm the wrong feedback</h1>
          </div>
        )
      }
    }
}

const mapStateToProps = (state, props) => {
  console.log(state);
  return {
    correctAnswer: state.question.currWord.answer,
    view: state.response.response.view
  }
}

export default connect(mapStateToProps)(Feedback);