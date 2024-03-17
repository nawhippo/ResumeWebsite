import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import laptopCat from '../Image/laptopCat.png';
import './Home.css';
const HomePage = () => {


    const big = {
        fontSize: "50px",
        marginRight: "30px",
        color: "#FFA500"
    };

    const footerStyle = {
        marginTop: 'bottom',
        textAlign: 'center',
        padding: '20px 0'
    };

    return (
        <Container fluid style={{paddingLeft: '160px'}}>
            <Row>
                <Col className="text-center lg mt-4">
                    <img src={laptopCat} alt="candid" style={{ height: "300px" }}/>
                    <p style={{ fontSize: "59px" }}>Nathan Whippo<span className="flashing-underscore">_</span></p>
                </Col>
                <Col style={{ display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",}}>
                    <p>
                        I'm a recent Indiana University grad with a passion for application development and problem solving.
                        I thrive on challenges and constantly seek opportunities to learn and improve my skills.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};


export default HomePage;