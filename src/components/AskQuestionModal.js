import React from 'react';
import { connect } from 'react-redux';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import { addQuestion } from '../actions/questions';
const moment = require('moment');

export class AskQuestionModal extends React.Component {
    state = {
        modal: false,
        questionText: ''
    }
    onQuestionTextChange = (e) => {
        const questionText = e.target.value;
        this.setState( () => ({
            questionText
        }));
    };
    onSubmit = (e) => {
        e.preventDefault();
        this.toggle();
        this.props.addQuestion({
            questionText: this.state.questionText,
            relatedUserId: 0,
            timestamp: moment()
        });
        alert('You submitted your question!');
    }
    toggle = () => {
        this.setState( (prevState) => ({
            modal: !prevState.modal
        }));
    }
    render() {
        return (
            <Container>
                <Button color="primary" onClick={this.toggle}>Ask Your Question</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Ask Your Question</ModalHeader>
                    <ModalBody>
                        <form onSubmit={this.onSubmit}>
                            <input name="questionText" type="text" placeholder="Ask your question" onChange={this.onQuestionTextChange} />
                            <Button type="submit">Ask!</Button>
                        </form>
                    </ModalBody>
                </Modal>
            </Container>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addQuestion: (question) => dispatch(addQuestion(question))
});

export default connect(undefined, mapDispatchToProps)(AskQuestionModal);