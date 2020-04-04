import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Content/Home';
import About from './Content/About'; 
import Education from './Content/Education';
import Skills from './Content/Skills';
import Contact from './Content/Contact';

function App() {  return (

    <Router>
    {/* route navbar */}
    <div className="App">

    <Navbar/>

    {/* route 2 home */}
    <Route exact path="/">

    <Home/>

    </Route>

    {/* Route for About */}

    <Route path="/About">

    <About/>

    </Route>

     {/* route to widecard */}

     <Route path="/Education">

     <Education/>

     </Route>

     {/* Route for Skills */}

    <Route path="/skills">

    <Skills/>

    </Route>

    {/* Route for contact */}

    <Route path="/Contact">

    <Contact/>

    </Route>

    </div>

    </Router>

    )
}

export default App;
