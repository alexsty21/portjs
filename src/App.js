import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import Navbar from './Components/Navbar';
import About from './Content/About'; 
import Home from './Content/Home';
import Education from './Content/Education';

function App() {  return (

    <Router>
    {/* route navbar */}
    <div className="App">

    <Navbar />

    {/* route 2 home */}
    <Route path="/Home">

    <Home/>

    </Route>

    {/* Route for About.js contents */}

    <Route path="/About">

    <About/>

    </Route>

     {/* route to widecard */}

     <Route path="/Education">

     <Education/>

     </Route>

    </div>

    </Router>

    )
}

export default App;
