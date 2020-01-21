import React, {Component} from 'react';
import {
    Container
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './QuestionCard.scss';

class QuestionCard extends Component {

    render() {
        return(
            <Container className="question-card-component">
                {this.props.question_text}
            </Container>
        );
    }
}

export default QuestionCard;

