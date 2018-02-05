import React from 'react';
import {connect} from 'react-redux';

export class AnswerForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            answer: this.props.answer
        }

        this.handleAnswer = this.handleAnswer.bind(this);
    }

    //add form render and logic to handle the input / submission

}