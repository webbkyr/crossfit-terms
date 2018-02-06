import React from 'react';
import { connect } from 'react-redux';

export default class Questions extends React.Component{
  componentDidMount(){
    this.props.dispatch(fetchQuestion());  //need to write the action
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
    question: state.questions.currWord
  }
}

export default connect(mapStateToProps)(Questions);