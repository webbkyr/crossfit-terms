import React from 'react';
import { connect } from 'react-redux';
import './progress.css';
import updateProgress from '../actions/response.js'

export function Progress(props){
  if (props.totalQuest === 0) {
    return;
  }

  else {
    return(
        <div className="progress">
            You have answered {props.numCorrect} out of {props.totalQuest} correctly.
        </div>
    );
  }
}

const mapStateToProps = (state, props) => {
    return {
    numCorrect: state.response.numCorrect,
    totalQuest: state.response.totalQuest
  }
}

export default connect(mapStateToProps)(Progress);