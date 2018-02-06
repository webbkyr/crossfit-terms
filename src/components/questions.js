import React from 'react';
import { connect } from 'react-redux';
import { fetchQuestions } from '../actions/questions';

export class Questions extends React.Component{
  componentDidMount(){
    this.props.dispatch(fetchQuestions());  
  }

  render(){
    return(
      <div className="questions">
        <p>Type this word, in English, into the box to the right.</p>
        <h4>{this.props.question}</h4>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    question: state.question.currWord.question
  }
}

export default connect(mapStateToProps)(Questions);