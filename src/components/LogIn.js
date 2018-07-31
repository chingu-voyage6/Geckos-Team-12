import React from 'react';
import { Container, Row, Col, Input, Button, Fa, Card, CardBody, ModalFooter } from 'mdbreact';
import '../styles/login.css';

class LogIn extends React.Component {
    render() {
        return (
            <Container>
                <section className="form-elegant">
                    <Row>
                        <Col md="5">
                            <Card>
                                <CardBody className="mx-4">
                                    <div className="text-center">
                                        <h3 className="dark-grey-text mb-5"><strong>Sign in</strong></h3>
                                    </div>
                                    <Input label="Your email" group type="email" validate error="wrong" success="right" />
                                    <Input label="Your password" group type="password" validate containerClass="mb-0" />
                                    <p className="font-small blue-text d-flex justify-content-end pb-3">Forgot <a href="#" className="blue-text ml-1"> Password?</a></p>
                                    <div className="text-center mb-3">
                                        <Button type="button"  rounded className="btn-block z-depth-1a">Sign in</Button>
                                    </div>
                                    <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2"> or Sign in with:</p>
                                    <div className="row my-3 d-flex justify-content-center">
                                        <Button type="button"  rounded className="mr-md-3 z-depth-1a"><Fa icon="facebook" className="blue-text text-center" /></Button>
                                        <Button type="button" rounded className="mr-md-3 z-depth-1a"><Fa icon="twitter" className="blue-text" /></Button>
                                        <Button type="button"  rounded className="z-depth-1a"><Fa icon="google-plus" className="blue-text" /></Button>
                                    </div>
                                </CardBody>
                                <ModalFooter className="mx-5 pt-3 mb-1">
                                    <p className="font-small grey-text d-flex justify-content-end">Not a member? <a href="#" className="blue-text ml-1"> Sign Up</a></p>
                                </ModalFooter>
                            </Card>
                        </Col>
                    </Row>
                </section>
            </Container>
        );
    }
};

export default LogIn;