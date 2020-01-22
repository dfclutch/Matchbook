import React, {Component} from 'react';
import {
    Container
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './QuestionCard.scss';
import ButtonList from "../Inputs/ButtonList/ButtonList";
import MultiSelect from "../Inputs/MultiSelect/MultiSelect";

import {INPUT_TYPES} from "../../config";

class QuestionCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current_question: this.props.question_list[0],
            i: 0
        };
        this.renderInputs = this.renderInputs.bind(this);
        this.nextQuestion= this.nextQuestion.bind(this);
    }

    nextQuestion() {
        this.setState((state, props) => {
            return {
                current_question: props.question_list[state.i + 1],
                i: state.i + 1
            }
        })
    }
    renderInputs() {
        if (this.state.current_question.input_type === INPUT_TYPES.BUTTON_LIST) {
            return <ButtonList
                onClick={this.nextQuestion}
                buttons={this.state.current_question.options}
            />
        } else if(this.state.current_question.input_type === INPUT_TYPES.MULTISELECT) {
            return <MultiSelect
                onClick={this.nextQuestion}
                options={this.state.current_question.options}
            />
        }

    }

    render() {
        return(
            <Container className="question-card-component">
                <div className="question-text">
                    {this.state.current_question.text}
                </div>
                {this.renderInputs()}
            </Container>
        );
    }
}

export default QuestionCard;

