import React from 'react';
import { Button, Container, Form, FormGroup, Input } from 'reactstrap';
import '../styles/login.css';

export default class LogIn extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <div className="header_box">
                        <div className="login_box">
                            <h2 className="text-center heading">Quora Clone</h2>
                            <h5 className="text-center secondary-heading">A place to share knowledge and better understand the world</h5>
                            <div className="row">
                                <div className="col buttons">
                                    <Button color="danger" size="sm"><a href = "api/v1/auth/google">Continue with Google</a></Button>
                                    <Button color="success" size="sm">Continue with Facebook</Button>
                                    <Button color="link">Sign up</Button>
                                </div>
                                <div className="col forms">
                                    <Form>
                                        <p>Login</p>
                                        <FormGroup>
                                            <Input type="email" name="email" id="exampleEmail" className="rounded-0" placeholder="Email"/>
                                        </FormGroup>
                                        <FormGroup>
                                            <Input type="password" name="password" id="examplePassword" className="rounded-0" placeholder="Password" />
                                        </FormGroup>
                                        <Button size="sm">Submit</Button>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}
