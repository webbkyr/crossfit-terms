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
        <Questions />
        <AnswerForm />
      </div>
      <Feedback />
      <Progress />
      <Link className="dashboard-link" to="/dashboard">Back to Dashboard</Link>
    </div>
  )
}