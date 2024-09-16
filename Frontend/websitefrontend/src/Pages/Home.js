import React, { useState, useEffect, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import laptopCat from '../Image/laptopCat.png';
import './Home.css';
import { wait } from '@testing-library/user-event/dist/utils';

// Function to scramble letters
const scrambleLetters = (letters) => {
    return letters
        .split('')
        .sort(() => Math.random() - 0.5)
        .join('');
};

const HomePage = () => {
    const words = [
        "Web Developer",
        "Software Engineer",
        "Designer",
        "Frontend Developer",
        "Backend Developer"
    ];
    
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayWord, setDisplayWord] = useState(scrambleLetters(words[0]));
    const [isComplete, setIsComplete] = useState(false);
    const intervalRef = useRef(null);
    const timeoutRef = useRef(null);
    const wordDuration = 2000; // Duration for each word in milliseconds

    useEffect(() => {
        const scrambleCurrentWord = () => {
            if (isComplete || currentWordIndex >= words.length) return;

            setDisplayWord(scrambleLetters(words[currentWordIndex]));
        };

        intervalRef.current = setInterval(scrambleCurrentWord, 100);

        timeoutRef.current = setTimeout(() => {
            clearInterval(intervalRef.current);

            setDisplayWord(words[currentWordIndex]);

            if (currentWordIndex < words.length - 1) {
                setTimeout(() => {
                    setCurrentWordIndex(prevIndex => prevIndex + 1);
                    setDisplayWord(scrambleLetters(words[currentWordIndex + 1]));
                    intervalRef.current = setInterval(scrambleCurrentWord, 1000);
                }, wordDuration);
            } else {
                setIsComplete(true);
                setCurrentWordIndex(currentWordIndex + 1);
            }
        }, wordDuration);

        return () => {
            clearInterval(intervalRef.current);
            clearTimeout(timeoutRef.current);
        };
    }, [currentWordIndex, words, wordDuration, isComplete]);

    return (
        <Container fluid>
            <Row>
                <Col className="text-center lg mt-4">
                    <img src={laptopCat} alt="candid" style={{ height: "300px" }} />
                    <p style={{ fontSize: "59px" }}>Nathan Whippo<span className="flashing-underscore">_</span></p>
                    <p>{displayWord}</p>
                </Col>
                <Col style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
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
