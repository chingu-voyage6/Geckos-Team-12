import React from 'react';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';

class AskQuestionModal extends React.Component {
    state = {
        modal: false
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.toggle();
        alert('You submitted a question!');
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
                            <input type="text" placeholder="Ask your question" />
                            <Button type="submit">Ask!</Button>
                        </form>
                    </ModalBody>
                </Modal>
            </Container>
        )
    }
}

export default AskQuestionModal;