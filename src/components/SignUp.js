import React from 'react';
import { Button, Container, Form, FormGroup, Label, Input } from 'reactstrap';
import '../styles/signup.css';

export default class SignUp extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <div className="center">
                        <div className="center-box">
                            <h2 className="font-weight-bold">Sign Up</h2>
                            <div className="form">
                                <Form>
                                    <FormGroup>
                                        <Label for="exampleName" hidden>Name</Label>
                                        <Input type="text" name="name" id="exampleName" placeholder="Name" />
                                    </FormGroup>
                                    {' '}
                                    <FormGroup>
                                        <Label for="exampleEmail" hidden>Email</Label>
                                        <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                                    </FormGroup>
                                    {' '}
                                    <FormGroup>
                                        <Label for="examplePassword" hidden>Password</Label>
                                        <Input type="password" name="password" id="examplePassword" placeholder="Password" />
                                    </FormGroup>
                                    {' '}
                                    <FormGroup>
                                        <Label for="examplePassword" hidden>Password</Label>
                                        <Input type="password" name="password" id="examplePassword" placeholder="Confirm Password" />
                                    </FormGroup>
                                    {' '}
                                    <Button size="sm">Sign Up</Button>
                                </Form>
                            </div>
                        </div>
                        
                    </div>
                </Container>
            </div>
        );
    }
}