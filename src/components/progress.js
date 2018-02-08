import React from 'react';
import { connect } from 'react-redux';
import './progress.css';
import updateProgress from '../actions/response.js'

export function Progress(props){
  return(
      <div className="progress">
      <p>You have answered {props.numCorrect} out of {props.totalQuest} questions correctly.</p>
    </div>
  );
}

const mapStateToProps = (state, props) => {
  return {
    numCorrect: state.response.numCorrect,
    totalQuest: state.response.totalQuest
  }
}

export default connect(mapStateToProps)(Progress);