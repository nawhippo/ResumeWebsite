import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import instrumentSuiteImage from '../Image/InstrumentSuite.png';
import natebookImage from '../Image/Natebook.png';
import pillscannerImage from '../Image/Pillscanner.png';


function Projects() {

    const projectData = [
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
            projectLink: "https://instrumentsuite-frontend.onrender.com/"
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
            projectLink: "https://pillscannerfrontend.onrender.com/"
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
            projectLink: "https://natebookfrontend.onrender.com"
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
            projectLink: "https://github.com/HIMANSHIKUSHWAHA/SE-GROUP-16"
        },
];

    return (
        <Container fluid className="mt-4" style={{ maxHeight: '90vh', overflowY: 'scroll' }}>
            <h1 className="text-center mt-5">Projects</h1>
            {projectData.map((project, index) => (
                <Card className="mb-5 card-custom" key={index}>
                    {project.imageUrl && <Card.Img variant="top" src={project.imageUrl} alt={project.title} style={{maxWidth:"200px", maxHeight:"200px", width: "auto", height:"auto"}}/>}
                    <Card.Body>
                        <Card.Title>{project.title}</Card.Title>
                        <Card.Text><strong>Period:</strong> {project.period}</Card.Text>
                        <Card.Text><strong>Tech Stack:</strong> {project.techStack}</Card.Text>
                        {project.features.map((feature, featureIndex) => (
                            <Card.Text key={featureIndex}>- {feature}</Card.Text>
                        ))}
                        <Button variant="primary" href={project.projectLink}>Learn More</Button>
                    </Card.Body>
                </Card>
            ))}
        </Container>
    );
}

export default Projects;