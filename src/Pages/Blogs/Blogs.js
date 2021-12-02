import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer';

const Blogs = () => {
    return (
        <div>
            <Header></Header>
            <Container className="py-5">
                <div className="text-white text-center pt-5">
                    <h2 style={{fontSize:"48px"}}>My <span className="textGulapi">B</span>logs</h2>
                    <p>Here is my blogs</p>
                </div>
                <div>
                    <h3 className="text-white">Cooming Soon....</h3>
                </div>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;