import React from 'react';
import { Container , Row , Col, Carousel, Modal, CloseButton } from 'react-bootstrap';
import { useEffect, useState } from "react";
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer';

const Portfolio = () => {
    // get data
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch("./projectData.json")
        .then((res) => res.json())
        .then((data) => setProjects(data));
    }, []);

    // Modal
    const values = [true];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    return (
        <div>
            <Header></Header>
            <Container className="py-5">
                <div className="text-white text-center pt-5">
                    <h2 style={{fontSize:"48px"}}>My <span className="textGulapi">W</span>ork</h2>
                    <p>Check out some of my projects...</p>
                </div>
                <Row className="py-4">
                    {
                        projects.map(project => <Col key={project.id} xs={12} md={6} xl={4}>
                            {values.map((v, idx) => (
                                <div key={idx} onClick={() => handleShow(v)} className="px-2 pt-3 pb-2 bg-white" style={{borderRadius:"12px"}}>
                                    <img src={project.projectImage[0]} alt="" className="img-fluid projectImg" />
                                    <p className="textGulapi pt-3 text-center" style={{fontWeight:"600", fontSize:"20px"}}>{project.projectName} <span style={{color:"#100e17"}}>{project.projectTitle}</span></p>
                                </div>
                            ))}
                            <Modal className="modal text-white" show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                                <Modal.Header closeButton as={CloseButton} variant="white">
                                {/* <CloseButton variant="white" /> */}
                                <Modal.Title className="textGulapi">
                                    <h3>{project.projectName} - <span className="text-white">{project.projectNameTile} {project.projectTitle}</span></h3>
                                </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Row>
                                        <Col xs={12} md={6}>
                                            <div>
                                                <p className="text-white">{project.projectDetails[0]}</p>
                                                <p className="text-white">{project.projectDetails[1]}</p>
                                            </div>
                                        </Col>
                                        <Col xs={12} md={6}>
                                            <Carousel className="h-100">
                                                {
                                                    project.projectImage.map(img => <Carousel.Item>
                                                        <img
                                                        className="d-block h-100 img-fluid"
                                                        src={img}
                                                        alt="First slide"
                                                        />
                                                    </Carousel.Item>)
                                                }
                                            </Carousel>
                                        </Col>
                                    </Row>
                                </Modal.Body>
                            </Modal>
                        </Col>)
                    }
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Portfolio;