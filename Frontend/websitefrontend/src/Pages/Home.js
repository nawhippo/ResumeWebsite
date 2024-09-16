import React, { useState, useEffect, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import laptopCat from '../Image/laptopCat.png';
import './Home.css';

// Function to generate a random letter
const getRandomLetter = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    return letters.charAt(Math.floor(Math.random() * letters.length));
};

// Function to create a scrambled version with random letters
const scrambleLetters = (originalWord) => {
    const length = originalWord.length;
    let scrambled = '';
    for (let i = 0; i < length; i++) {
        scrambled += getRandomLetter();
    }
    return scrambled;
};

const HomePage = () => {
    const words = [
        "Web Developer",
        "Software Engineer",
        "Designer",
        "Frontend Developer",
        "Backend Developer", 
        "Fullstack Developer"
    ];

    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayWord, setDisplayWord] = useState(scrambleLetters(words[0]));
    const [revealedIndex, setRevealedIndex] = useState(0);
    const [isComplete, setIsComplete] = useState(false);
    const intervalRef = useRef(null);
    const timeoutRef = useRef(null);
    const wordDuration = 2000; // Duration to display each word
    const scrambleInterval = 100; // Interval for scrambling effect
    const revealInterval = 100; // Interval to reveal each character

    useEffect(() => {
        const scrambleCurrentWord = () => {
            if (isComplete || currentWordIndex >= words.length) return;
            setDisplayWord(scrambleLetters(words[currentWordIndex]));
        };

        intervalRef.current = setInterval(scrambleCurrentWord, scrambleInterval);

        timeoutRef.current = setTimeout(() => {
            clearInterval(intervalRef.current);
            let index = 0;
            const revealId = setInterval(() => {
                setDisplayWord(prev => {
                    const newDisplayWord = words[currentWordIndex]
                        .split('')
                        .map((char, i) => i <= index ? char : getRandomLetter())
                        .join('');
                    return newDisplayWord;
                });
                index += 1;
                if (index >= words[currentWordIndex].length) {
                    clearInterval(revealId);
                    setDisplayWord(words[currentWordIndex]);
                    if (currentWordIndex < words.length - 1) {
                        setTimeout(() => {
                            setCurrentWordIndex(prevIndex => prevIndex + 1);
                        }, wordDuration);
                    } else {
                        setIsComplete(true);
                    }
                }
            }, revealInterval);
        }, wordDuration);

        return () => {
            clearInterval(intervalRef.current);
            clearTimeout(timeoutRef.current);
        };
    }, [currentWordIndex, isComplete]);

    return (
        <Container fluid>
            <Row>
                <Col className="text-center lg mt-4">
                    <img src={laptopCat} alt="candid" style={{ height: "300px" }} />
                    <p style={{ fontSize: "59px" }}>Nathan Whippo</p>
                    <div style={{flexDirection: "row"}}>
                        <p style={{fontSize: "59px"}}>
                            {displayWord}
                            {!isComplete && currentWordIndex >= words.length - 1 &&
                            <span className="flashing-underscore">_</span>}
                        </p>
                    </div>
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
