import React from 'react';
import {Container, Card, Button, Row, Col} from 'react-bootstrap';
import instrumentSuiteImage from '../Image/InstrumentSuite.png';
import natebookImage from '../Image/Natebook.png';
import pillscannerImage from '../Image/Pillscanner.png';
import {FaGithub} from "react-icons/fa";


function Projects() {

    const projectData = [
        {title: "JobHelper",
            period: "December 2024 - Current",
            techStack: "Python, Selenium",
            features: [ 
            "Created ChatGpt Integration for Resume Tailoring System",
            "Scripted adaptable Selenium based website interaction",
            "Created dynamic tech skills tracker, for skill popularity analysis for job listings",
            "Working on optimizaions and statistics display"
            ]
        },
        {
            title: "Gameboy Emulator",
            period: "September 2024 - Current",
            techStack: "C++",
            features: [ 
            "Designed Processor Abstraction and Opcodes",
            "Working on memory loading and graphical displays"
            ]


        },
        {
            title: "Instrument Practicing Application",
            period: "February 2024 - March 2024",
            techStack: "Java, Spring, SpringBoot, Docker, React.js, Render.com (Hosting), Bootstrap",
            features: [
                "Created real-time tuning feature with socket programming.",
                "Designed chord practicing interface with configurable tempo.",
                "Built chord constructor with a fretboard generator based on instrument tuning."
            ],
            imageUrl: instrumentSuiteImage,
            projectLink: "https://instrumentsuite-frontend.onrender.com/",
            githubBackend: "https://github.com/nawhippo/InstrumentSuiteBackend",
            githubFrontend: "https://github.com/nawhippo/InstrumentSuiteFrontend"
        },
        {
            title: "Summer Camp Medication Distribution Application",
            period: "January 2024 - January 2024",
            techStack: "Java, Spring, SpringBoot, Docker, React.js, Render.com (Hosting), Bootstrap",
            features: [
                "Established a dual-verification employee authentication mechanism for secure medication dispensation.",
                "Developed a comprehensive medication inventory monitoring system, equipped with critical low-stock notifications.",
                "Instituted automated medication dispensing alerts coupled with a progress monitoring feature for enhanced operational efficiency.",
                "Introduced a detailed medication information portal, inclusive of a flexible prescription management module."
            ],
            imageUrl: pillscannerImage,
            projectLink: "https://pillscannerfrontend.onrender.com/",
            githubBackend: "https://github.com/nawhippo/PillScanner",
            githubFrontend: "https://github.com/nawhippo/PillScannerFrontend"
        },
        {
            title: "Social Media Application",
            period: "August 2023 - January 2024",
            techStack: "Java, Spring, SpringBoot, Docker, React.js, Render.com (Hosting)",
            features: [
                "Enhanced user experience with an interactive Live-feed, inclusive of search, rating, and follow functionalities.",
                "Developed real-time notification and comprehensive messaging systems for effective user communication.",
                "Implemented JWT-based Spring Security to ensure application integrity and user data protection.",
                "Dockerized for streamlined deployment.",
                "Integrated a sophisticated image management system with photo compression capabilities."
            ],
            imageUrl: natebookImage,
            projectLink: "https://natebookfrontend.onrender.com",
            githubBackend: "https://github.com/nawhippo/WebsiteProject"
        },
        {
            title: "Fitness Application Group Project",
            period: "August 2023 - December 2023",
            techStack: "Node.js, MongoDB, React.js, DigitalOcean (Hosting), Jira, NeonDB, Bootstrap",
            features: [
                "Created search engine for meal plans, fitness plans, and fitness content creators.",
                "Enabled user subscriptions to fitness professionals to receive updates about contents.",
                "Implemented a customizable user calendar, based on meal and exercise plans.",
                "Adopted Agile development practices, working in two-week sprints for continuous improvement and timely delivery in a team setting.",
                "Documented development process with design documents, progress reports, testing plans, and code documentation."
            ],
            githubBackend: "https://github.com/HIMANSHIKUSHWAHA/SE-GROUP-16",
        },
];

    return (
        <Container fluid className="mt-4" style={{ maxHeight: '90vh', maxWidth:'150vh'}}>
            <h1 className="text-center">Projects</h1>
            {projectData.map((project, index) => (
                <Card className="mb-5 card-custom" key={index}>
                    <Card.Body>
                        <Card.Title>{project.title}</Card.Title>
                        <Card.Text><strong>Period:</strong> {project.period}</Card.Text>
                        <Card.Text><strong>Tech Stack:</strong> {project.techStack}</Card.Text>
                        {project.features.map((feature, featureIndex) => (
                            <Card.Text key={featureIndex}>- {feature}</Card.Text>
                        ))}

{project.imageUrl && <Card.Img variant="top" src={project.imageUrl} alt={project.title} style={{ maxWidth: "50%", maxHeight: "10%", width: "auto", height: "auto", marginTop: '2.5%', marginBottom:"1.5%"}} />}
                        <Row>
                        {project.projectLink && (
                             <Col>
                        <a href={project.projectLink} className="me-2">Visit Site</a>
                            </Col>
                        )
                        }
                            <Col>
                        {project.githubFrontend && (
                            <a href={project.githubFrontend} className="me-2" title="GitHub Frontend">
                                <FaGithub /> Frontend
                            </a>
                        )}
                            </Col>
                            <Col>
                        {project.githubBackend && (
                            <a href={project.githubBackend} title="GitHub Backend">
                                <FaGithub /> Backend
                            </a>
                        )}
                        
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            ))}
        </Container>
    );
}

export default Projects;