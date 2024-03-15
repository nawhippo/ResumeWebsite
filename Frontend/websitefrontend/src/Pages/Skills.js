import React from 'react';
import {Container} from "react-bootstrap";

const Skills = () => {
    // Skills data structure
    const skills = {
        programmingLanguages: [
            "Java 🍵", "React ⚛️", "Node.js 🟩", "Javascript 📜", "Python 🐍", "C #️⃣", "HTML 🏗️", "CSS 🎨", "R 📊", "Racket 🚀"
        ],
        databases: ["PostgreSQL 🐘", "SQL 💾"],
        platforms: ["Linux 🐧", "Windows 🪟"],
        softwareSkills: [
            "Spring Boot 🍃", "Git 🔧", "Agile Development 🏃‍♂️", "Jira 📋",
            "Microsoft Excel 📊", "Microsoft Access 🔑", "Docker 🐳", "Bootstrap 👢"
        ]
    };

    const renderSkillsList = (skillsList) => {
        return skillsList.map(skill => <li key={skill}>{skill}</li>);
    };

    return (
        <Container className="mt-5">
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
        </Container>
    );
};

export default Skills;