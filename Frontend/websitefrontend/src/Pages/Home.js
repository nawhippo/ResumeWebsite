import React, { useState, useEffect, useReducer } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import laptopCat from '../Image/laptopCat.png';
import './Home.css';

const HomePage = () => {
    const [jobTitle, setJobTitle] = useState('HEY');
    const [currentWordInd, setCurrentWordInd] = useState(0);
    const [currentWord, setCurrentWord] = useState(scrambleLetters(words[0]));
    const [isComplete, setIsComplete] = useState(false);
    const intervaltime = useRef(null);
    const timeoutref = useRef(null);
    const positions = [
        "Web Developer",
        "Software Engineer",
        "Designer",
        "Frontend Developer",
        "Backend Developer"
    ];


    const scrambleLetters = (letters) => {
        return letters
          .split('')
          .sort(() => Math.random() - 0.5)
          .join('');
      };

      useEffect(() => {
        const scrambleCurrentWord = () => {
          if (isComplete || currentWordIndex >= words.length) return;
    
          setDisplayWord(scrambleLetters(words[currentWordIndex]));
        };
    
        // Start scrambling words
        intervalRef.current = setInterval(scrambleCurrentWord, 100);
    
        // Show the correct word after `wordDuration`
        timeoutRef.current = setTimeout(() => {
          clearInterval(intervalRef.current);
    
          // Move to the next word
          setDisplayWord(words[currentWordIndex]);
    
          if (currentWordIndex < words.length - 1) {
            // Move to the next word after `wordDuration`
            setTimeout(() => {
              setCurrentWordInd(prevIndex => prevIndex + 1);
              setDisplayWord(scrambleLetters(words[currentWordIndex + 1]));
              intervalRef.current = setInterval(scrambleCurrentWord, 100);
            }, wordDuration);
          } else {
            // Finish the animation after `duration`
            setIsComplete(true);
          }
        }, wordDuration)

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
                    <p>{jobTitle}</p>
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
