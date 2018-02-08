import React from 'react';
import {connect} from 'react-redux';
import {addResponse} from '../actions/response';
import {fetchNextQuestion} from '../actions/questions';
import './answer-form.css';

export class AnswerForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            response: this.props.response
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        if(target.name === 'textInput') {
            this.setState({
                response: target.value
            })
        }
    }

    onSubmit(event){
        event.preventDefault();
        const userResponse = event.target.textInput.value;
        this.props.dispatch(addResponse(userResponse));
        this.props.dispatch(updateProgress(userResponse));
    }

    getNext(event) {
        event.preventDefault();
        this.props.dispatch(fetchNextQuestion());
    }

    //add form render and logic to handle the input / submission
    render() {

        return (
            <form className="answer-form" onSubmit={e => this.onSubmit(e)}>
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
                <div>
                    <button type="submit" name="submit" id="addResponse" className="button">
                        Submit Answer
                    </button>
                </div>
                <div>
                    <button type="submit" name="next" id="nextQuestion" className="button" onClick={e => this.getNext(e)}>
                        Next Question
                    </button>
                </div>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    id: state.question.currWord._id
});

export default connect(mapStateToProps)(AnswerForm);