import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import barbell from '../Image/barbell.png';

const Skills = () => {

    const skills = {
        programmingLanguages: [
            "Java 🍵", "React ⚛️", "Node.js 🟩", "Javascript 📜", "Python 🐍", "C #️⃣", "HTML 🏗️", "CSS 🎨", "R 📊", "Racket 🚀"
        ],
        databases: ["PostgreSQL 🐘", "PL/SQL 💾"],
        platforms: ["Linux 🐧", "Windows 🪟"],
        softwareSkills: [
            "Spring (Security, Data JPA, Spring Boot) 🍃", "Git 🔧", "Agile Development 🏃‍♂️", "Jira 📋",
            "Microsoft Excel 📊", "Microsoft Access 🔑", "Docker 🐳", "Bootstrap 👢"
        ]
    };

    const renderSkillsList = (skillsList) => {
        return skillsList.map(skill => <li key={skill}>{skill}</li>);
    };

    return (
        <Container className="mt-5">
            <Row>
            <Col>
            <h1>Skills 💪</h1>
            <div>
                <h3>Programming Languages 💻</h3>
                <ul>{renderSkillsList(skills.programmingLanguages)}</ul>
            </div>
            <div>
                <h3>Databases 🗃️</h3>
                <ul>{renderSkillsList(skills.databases)}</ul>
            </div>
            <div>
                <h3>Platforms 🖥️</h3>
                <ul>{renderSkillsList(skills.platforms)}</ul>
            </div>
            <div>
                <h3>Software Skills 🛠️</h3>
                <ul>{renderSkillsList(skills.softwareSkills)}</ul>
            </div>
            </Col>
            <Col>
                <img src={barbell} alt="candid" style={{ height: "500px" }}/>
            </Col>
            </Row>
        </Container>
    );
};

export default Skills;