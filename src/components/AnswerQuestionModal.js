import React from 'react';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';

class AnswerQuestionModal extends React.Component {
    state = {
        modal: false
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.toggle();
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
                            <textarea placeholder="Type answer here"></textarea>
                            <Button type="submit">Answer!</Button>
                        </form>
                    </ModalBody>
                </Modal>
            </Container>
        )
    }
}

export default AnswerQuestionModal;