import React from 'react';
import { connect } from 'react-redux';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';

import { addAnswer } from '../actions/answers';

const moment = require('moment');

export class AnswerQuestionModal extends React.Component {
    state = {
        answerText: '',
        modal: false
    }
    onAnswerTextChange = (e) => {
        const answerText = e.target.value;
        this.setState( () => ({
            answerText
        }))
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.toggle();
        this.props.addAnswer({
            answerText: this.state.answerText,
            relatedUserId: 0,
            relatedQuestionId: this.props.questionId,
            timestamp: moment()
        });
        alert('You submitted an answer!');
    }
    toggle = () => {
        this.setState( (prevState) => ({
            modal: !prevState.modal
        }));
    }
    render() {
        return (
            <Container>
                <a onClick={this.toggle}>Answer This Question</a>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Answer This Question</ModalHeader>
                    <ModalBody>
                        <form onSubmit={this.onSubmit}>
                            <textarea placeholder="Type answer here" onChange={this.onAnswerTextChange}></textarea>
                            <Button type="submit">Answer!</Button>
                        </form>
                    </ModalBody>
                </Modal>
            </Container>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addAnswer: (answer) => dispatch(addAnswer(answer))
})

export default connect(undefined, mapDispatchToProps)(AnswerQuestionModal);