import React from 'react';
import { Container , Row , Col } from 'react-bootstrap';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer';

const Portfolio = () => {
    return (
        <div>
            <Header></Header>
            <Container className="py-5">
                <div className="text-white text-center pt-5">
                    <h2 style={{fontSize:"48px"}}>My <span className="textGulapi">W</span>ork</h2>
                    <p>Check out some of my projects...</p>
                </div>
                <Row>
                    <Col>
                    </Col>
                    <Col className="px-4">
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Portfolio;