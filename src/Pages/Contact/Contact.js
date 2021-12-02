import React from 'react';
import emailjs from 'emailjs-com';
import { Container , Row , Col, Form } from 'react-bootstrap';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer';

const Contact = () => {
    const sendEmail = e => {
        e.preventDefault();

        emailjs.sendForm('service_gmail', 'template_njd4mps', e.target, 'user_aDnTP6xHEaCy5BdlKqhYD')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }
    return (
        <div>
            <Header></Header>
            <Container className="py-5">
                <div className="text-white text-center pt-5">
                    <h2 style={{fontSize:"48px"}}><span className="textGulapi">C</span>ontact With <span className="textGulapi">M</span>e</h2>
                    <p>My contact details are given below</p>
                </div>
                <Row className="pt-2 d-flex align-items-center reverse-flex">
                    <Col md={7} className="px-3">
                        <form onSubmit={sendEmail}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className="text-white">Your Name*</Form.Label>
                                <Form.Control type="text" placeholder="name" name="name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className="text-white">Email address*</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" name="email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className="text-white">Subject*</Form.Label>
                                <Form.Control type="text" placeholder="email subject" name="subject" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="messages">
                                <Form.Label className="text-white">Write Your Messages*</Form.Label>
                                <Form.Control as="textarea" rows={3} name="message" />
                            </Form.Group>
                            <button variant="primary" type="submit" className="button w-100">
                                Send Massage
                            </button>
                        </form>
                    </Col>
                    <Col className="px-4">
                        <Row className="text-white py-2 contact-div mb-3">
                            <Col className="align-items-center d-flex justify-content-center">
                                <div>
                                    <i className="fas fa-location-arrow" style={{fontSize:"48px"}}></i>
                                </div>
                            </Col>
                            <Col xs={10}>
                                <div>
                                    <h3>Address</h3>
                                    <p>Cumilla, Bangladesh</p>
                                </div>
                            </Col>
                        </Row>
                        <Row className="text-white py-2 contact-div mb-3">
                            <Col className="align-items-center d-flex justify-content-center">
                                <div>
                                    <i className="far fa-envelope" style={{fontSize:"48px"}}></i>
                                </div>
                            </Col>
                            <Col xs={10}>
                                <div>
                                    <h3>Email</h3>
                                    <p>sanjida.kabir.srity@gmail.com</p>
                                </div>
                            </Col>
                        </Row>
                        <Row className="text-white py-2 contact-div mb-3">
                            <Col className="align-items-center d-flex justify-content-center">
                                <div>
                                    <i className="fas fa-globe" style={{fontSize:"48px"}}></i>
                                </div>
                            </Col>
                            <Col xs={10}>
                                <div>
                                    <h3>Social Media</h3>
                                    <p>
                                        <a href="https://www.facebook.com/sriteakter.srite.35/" rel="noreferrer" target="_blank" style={{textDecoration:"none"}} className="text-white">Facebook</a> | <a href="https://www.linkedin.com/in/sanjida-kabir-srity-1203/" rel="noreferrer" target="_blank" style={{textDecoration:"none"}} className="text-white">Linkedin</a> | <a href="https://github.com/sanjidaKabirSrity" rel="noreferrer" target="_blank" style={{textDecoration:"none"}} className="text-white">Github</a>
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Contact;