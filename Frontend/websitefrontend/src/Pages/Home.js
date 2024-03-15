import React from 'react';
import {Container} from "react-bootstrap";
import soyfinch from '../Image/soyfinch.png';
const HomePage = () => {
    return (
        <Container fluid>
            <>

                <div className="text-center lg mt-4">
                    <img src={soyfinch} alt="candid" style={{borderRadius: "1000px", backgroundColor:"black", height:"300px"}}/>
                    <p style={{fontSize: "59px"}}>Nathan Whippo</p>
                </div>
            </>
        </Container>
    );
};

export default HomePage;