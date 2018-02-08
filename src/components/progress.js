import React from 'react';
import { connect } from 'react-redux';
import './progress.css';

export function Progress(props){
  return(
      <div className="progress">
      <p>You have answered <span className="score">{props.numCorrect}</span> out of <span className="score">{props.totalQuest}</span> questions correctly.</p>
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