import React from 'react';
import { Container , Row , Col } from 'react-bootstrap';
import Header from '../../Shared/Header/Header';
import myImage from '../../Images/myimage.png'
import Footer from '../../Shared/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Container className="py-5">
                <Row className="d-flex align-items-center reverse-flex">
                    <Col className="text-white middle">
                        <h3>Front End Developer</h3>
                        <h1 style={{fontSize:"50px"}}>I'm <span className="textGulapi">Sanjida Kabir Srity</span></h1>
                        <p>Expert in Web design, Web development, and Problem solving</p>
                        <a href="https://drive.google.com/file/d/1pO4J6oK98L5nuAgjbQAgpRJNuHp4le5J/view?usp=sharing" rel="noreferrer" target="_blank">
                            <button className="button my-3">Download Resume</button>
                        </a>
                    </Col>
                    <Col className="py-5 mt-5 ps-3">
                        <div className="myImage h-100">
                            <img src={myImage} alt="" className="img-fluid" />
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Home;