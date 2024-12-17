import React from 'react';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import franticPhone from '../Image/franticPhone.png';
function Contact() {

    const big = {
        fontSize: "50px",
        marginRight: "30px",
        color: "#FFA500"
    };



    return (
        <div style={{ textAlign: 'center', marginTop: '50px'}}>
            <h1>Contact Me</h1>
            <p>Feel free to reach out through any of the following platforms.</p>
            <div style={{marginLeft: '25px'}}>
                <a href="https://www.linkedin.com/in/nathan-whippo-802326221/"  style={big}>
                    <FaLinkedin />
                </a>
                <a  href="mailto:nathan.whippo@gmail.com"  style={big}>
                    <MdEmail />
                </a>
                <a href="https://github.com/nawhippo" style={big}>
                    <FaGithub />
                </a>
            </div>
            <img src={franticPhone} alt="phone" style={{height: "500px"}} />
        </div>
    );
}

export default Contact;