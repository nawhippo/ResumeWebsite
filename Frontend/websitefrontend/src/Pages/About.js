import React from 'react';
import {Container, Row} from "react-bootstrap";
import waving from "../Image/waving.png";

function About() {
    return (
        <Container className="mt-5">
            <Row>
        <div style={{ textAlign: 'center'}}>
            <h1>About Me</h1>
            <p>
                I graduated from Indiana University, Luddy School of Informatics, Computing, and Engineering in Bloomington, Indiana, in December 2023, with  a Bachelor of Science in Computer Science, specializing in software engineering. My education has equipped me with a solid foundation in various areas of computer science and software development.
            </p>
            <p>
                To learn more about my hands-on experience and the projects I've worked on, please visit my projects page
            </p>
        </div>
            </Row>
            <img src={waving} alt="candid" style={{ height: "600px", paddingLeft: "400px" }}/>
        </Container>

    );
}

export default About;