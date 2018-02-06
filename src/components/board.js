import React from 'react';
import Questions from './questions';
import AnswerForm from './answer-form';

export default function Board(){
  return(
    <div className="board">
      <Questions />
      <AnswerForm />
    </div>
  )
}