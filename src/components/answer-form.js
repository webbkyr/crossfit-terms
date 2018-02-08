import React from 'react';
import {connect} from 'react-redux';
import {addResponse} from '../actions/response';
import {fetchNextQuestion} from '../actions/questions';
import {updateView} from '../actions/response';
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
    }

    getNext(event) {
        event.preventDefault();
        this.props.dispatch(fetchNextQuestion());
        this.props.dispatch(updateView());
    }

    //add form render and logic to handle the input / submission
    render() {
        let button = null;
        if(this.props.view === '') {
            button = <button type="submit" name="submit" id="addResponse" className="button">
                        Submit Answer
                    </button>
        } else {
            button = <button type="submit" name="next" id="nextQuestion" className="button" onClick={e => this.getNext(e)}>
                        Next Question
                    </button>
        }

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
                    { button }
                </div>
            </form>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        id: state.question.currWord._id,
        view: state.response.view
    }
}

export default connect(mapStateToProps)(AnswerForm);