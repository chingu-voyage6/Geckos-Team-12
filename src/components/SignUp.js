import React from 'react';
import { Container, Row, Col, Input, Button, Fa, Card, CardBody, ModalFooter } from 'mdbreact';
import '../styles/signup.css';

class SignUp extends React.Component {
    render() {
        return (
            <Container>
                <section className="form-light">
                    <Row>
                        <Col md="5">
                            <Card>
                                <CardBody className="mx-4">
                                    <div className="text-center">
                                        <h3 className="pink-text mb-5"><strong>Sign up</strong></h3>
                                    </div>
                                    <Input label="Your email" group type="text" validate />
                                    <Input label="Your password" group type="password" validate />
                                    <div className="md-form pb-3">
                                        <div className="form-check my-4">
                                            <input className="form-check-input" type="checkbox" id="defaultCheck12" />
                                            <label htmlFor="defaultCheck12" className="grey-text">Accept the<a href="#" className="blue-text"> Terms and Conditions</a></label>
                                        </div>
                                    </div>
                                    <Row className="d-flex align-items-center mb-4">
                                        <Col md="6" className="text-center">
                                            <button type="button" className="btn btn-pink btn-block btn-rounded z-depth-1">Sign up</button>
                                        </Col>
                                        <Col md="6">
                                            <p className="font-small grey-text d-flex justify-content-end">Have an account? <a href="#" className="blue-text ml-1"> Log in</a></p>
                                        </Col>
                                    </Row>
                                </CardBody>
                                <div className="footer pt-3 mdb-color lighten-3">
                                    <Row className="d-flex justify-content-center">
                                        <p className="font-small white-text mb-2 pt-3">or Sign up with:</p>
                                    </Row>
                                    <Row className="mt-2 mb-3 d-flex justify-content-center">
                                        <a className="fa-lg p-2 m-2 fb-ic"><Fa className="fa fa-facebook white-text fa-lg"> </Fa></a>
                                        <a className="fa-lg p-2 m-2 tw-ic"><Fa className="fa fa-twitter white-text fa-lg"> </Fa></a>
                                        <a className="fa-lg p-2 m-2 gplus-ic"><Fa className="fa fa-google-plus white-text fa-lg"> </Fa></a>
                                    </Row>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </section>
            </Container>
        );
    }
};

export default SignUp;