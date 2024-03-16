import React from 'react';
import {Container} from "react-bootstrap";

function About() {
    return (
        <Container className="mt-5">
        <div style={{ textAlign: 'center'}}>
            <h1>About Me</h1>
            <p>
                I graduated from Indiana University, Luddy School of Informatics, Computing, and Engineering in Bloomington, Indiana, in December 2023, with  a Bachelor of Science in Computer Science, specializing in software engineering. My education has equipped me with a solid foundation in various areas of computer science and software development.
            </p>
            <p>
                Relevant coursework throughout my degree includes data structures and algorithms, computer structures, professional writing, network programming, software design, algorithm analysis, computer networks, and database design. These courses have provided me with a strong theoretical and practical understanding of the key concepts in computer science and software engineering at both a high and low level perspective.
            </p>
            <p>
                To learn more about my hands-on experience and the projects I've worked on, please visit my projects page
            </p>
        </div>
        </Container>
    );
}

export default About;