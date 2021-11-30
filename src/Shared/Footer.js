import React from 'react';
import { Container , Row , Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div style={{backgroundColor:"#202026"}}>
            <Container className="py-3">
                <Row className="d-flex align-items-center reverse-flex">
                    <Col className="text-white me-auto middle">
                        <small>Copyright©-2021. Created by Sanjida</small>
                    </Col>
                    <Col className="ms-auto">
                        <div className="d-flex ms-auto mid-flex">
                            <div className="px-3">
                                <a href="https://www.facebook.com/sriteakter.srite.35/" rel="noreferrer" target="_blank">
                                <i className="fab fa-facebook textGulapi"></i>
                                </a>
                            </div>
                            <div className="px-3">
                                <a href="https://www.linkedin.com/in/sanjida-kabir-srity-1203/" rel="noreferrer" target="_blank">
                                <i className="fab fa-linkedin-in textGulapi"></i>
                                </a>
                            </div>
                            <div className="px-3">
                                <a href="https://github.com/sanjidaKabirSrity" rel="noreferrer" target="_blank">
                                <i className="fab fa-github textGulapi"></i>
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;