import React from 'react';
import { Container , Row , Col } from 'react-bootstrap';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer';
import gifImage from '../../Images/output-onlinegiftools.gif'
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <Header></Header>
            <Container className="py-5">
                <div className="text-white text-center pt-5">
                    <h2 style={{fontSize:"48px"}}>About <span className="textGulapi">M</span>e</h2>
                </div>
                <Row className="d-flex align-items-center row-reverse-flex">
                    <Col className="pb-5 mt-4">
                        <div className="gifImage h-100">
                            <img src={gifImage} alt="" className="img-fluid" />
                        </div>
                    </Col>
                    <Col className="text-white middle">
                        <h2><span className="textGulapi">W</span>ho I am?</h2>
                        <p>I am Sanjida Kabir Srity. Introducing myself as a passionate and junior front-end web developer. I have developed a huge number of web applications. Most comfortable with javascript. Familiar with frameworks like... Bootstrap, Tailwind CSS, react.js, node js.</p>
                        <div>
                            <div className="miniBtn me-2 mb-2">
                                <span className="text-white">HTML5</span>
                            </div>
                            <div className="miniBtn me-2 mb-2">
                                <span className="text-white">CSS3</span>
                            </div>
                            <div className="miniBtn me-2 mb-2">
                                <span className="text-white">Javascript</span>
                            </div>
                            <div className="miniBtn me-2 mb-2">
                                <span className="text-white">React js</span>
                            </div>
                            <div className="miniBtn me-2 mb-2">
                                <span className="text-white">Bootstrap</span>
                            </div>
                            <div className="miniBtn me-2 mb-2">
                                <span className="text-white">Material UI</span>
                            </div>
                            <div className="miniBtn me-2 mb-2">
                                <span className="text-white">Firebase</span>
                            </div>
                        </div>
                        <Link to="/contact">
                            <button className="button my-3">Hire Me</button>
                        </Link>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default About;