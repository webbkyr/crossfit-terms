import React from 'react';
import { Link } from 'react-router-dom';
import Questions from './questions';
import AnswerForm from './answer-form';
import Feedback from './feedback';
import Progress from './progress';
import './board.css';

export default function Board(){
  return(
    <div className="board-container">
      <div className="board">
        <div className="main-dash">
          <div className="quest">
            <Questions />
          </div>
          <div className="answ">
            <AnswerForm />
          </div>
        </div>
        <div className="dashboard-link" >
          <Link to="/dashboard">Back to Dashboard</Link>
        </div>
      </div>
      <Feedback />
      <Progress />
    </div>
  )
}