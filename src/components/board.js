import React from 'react';
import Questions from './questions';
import AnswerForm from './answer-form';
import Feedback from './feedback';

export default function Board(){
  return(
    <div className="board">
      <Feedback />
      <Questions />
      <AnswerForm />
    </div>
  )
}