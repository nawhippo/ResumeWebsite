import React from 'react';
import {BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom';
import HomePage from "./Pages/Home";
import NavBar from "./Component/NavBar";
import './index.css';
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
function App() {
    return (
        <Router>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <NavBar />
                <div>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/skills" element={<Skills />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}


export default App;