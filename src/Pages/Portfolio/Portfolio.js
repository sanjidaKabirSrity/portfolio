import React from 'react';
import { Container , Row , Col, Carousel, Modal, Button } from 'react-bootstrap';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
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
                                <div key={idx} onClick={() => handleShow(v)} className="px-2 pt-3 pb-2 mx-1 mb-2 bg-white project" style={{borderRadius:"12px"}}>
                                    <div className="projectImgDiv">
                                        <img src={project.projectFullImg} alt="" className="img-fluid projectImg" />
                                    </div>
                                    <p className="textGulapi pt-3 text-center" style={{fontWeight:"600", fontSize:"20px"}}>{project.projectName} <span style={{color:"#100e17"}}>{project.projectTitle}</span></p>
                                </div>
                            ))}
                            <Modal className="modal text-white" show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                                <Modal.Header closeButton>
                                <Link to="/home" className="text-white">
                                    <Button variant="white"><i class="fas fa-arrow-left text-white"></i></Button>
                                </Link>
                                <Modal.Title className="textGulapi">
                                    <h3>{project.projectName} - <span className="text-white">{project.projectNameTile} {project.projectTitle}</span></h3>
                                </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Row className="px-2 py-1 d-flex align-items-center reverse-flex">
                                        <Col xs={12} md={6}>
                                            <div>
                                                <p className="text-white">{project.projectDetails[0]}</p>
                                                <p className="text-white">{project.projectDetails[1]}</p>
                                            </div>
                                            <div className="py-3">
                                                {
                                                    project.techUsed.map(buton => <div className="miniBtn me-2 mb-2">
                                                        <span className="text-white">{buton}</span>
                                                    </div>)
                                                }
                                            </div>
                                            <Row className="pb-3">
                                                {
                                                    project.link.map(linkItem => <Col xs={12} md={6} lg={4}>
                                                        <a href={linkItem.live} rel="noreferrer" target="_blank">
                                                            <button className="button my-3 w-100">{linkItem.liveTitle}</button>
                                                        </a>
                                                    </Col>)
                                                }
                                            </Row>
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