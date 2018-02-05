import React from 'react';
import {connect} from 'react-redux';
import {addResponse} from '../actions/response';

export class AnswerForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            answer: this.props.answer,
            view: this.props.view,
            loading: this.props.loading
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    onSubmit(event){
        event.preventDefault();

        if(this.props.view === 'question') {
            this.props.dispatch(addResponse(this.props.response));
            console.log(response);
        }
        else {
            this.props.dispatch(nextQuestion(this.props.question));
        }
    }

    //add form render and logic to handle the input / submission
    render() {
        const view = this.props.view;
        let button = null;
        
        if (view === 'question') {
            button =
                <div>
                    <button type="submit" name="submit" id="submitResponse" className="button">
                        Submit Answer
                    </button>
                </div>
        }
        else {
            button =
            <div>
                <button type="submit" name="submit" id="nextQuestion" className="button">
                    Next Question
                </button>
            </div>
        }

        return (
            <form onSubmit={e => this.onSubmit(e)}>
                <div>
                    <label html="textInput">Please enter your response below</label>
                </div>
                <div>
                    <textarea
                    onChange={this.handleInputChange}
                    name="textInput"
                    id="textInput"
                    className="textArea"
                    required
                    ref={(input) => {this.textInput = input}}
                    >
                    </textarea>
                </div>
            </form>
        )
    }
}