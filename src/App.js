import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import {Route} from "react-router-dom";
import Home from "./components/Home"
import AboutMe from "./components/AboutMe"
import Samples from "./components/Samples"
import WorkExperience from './components/WorkExperience';

function App() {
  return (

    <div className="container">
    <div className="App"> 
        <h1 className="Title">Stephanie's Portfolio</h1>
        <NavBar />
    </div>

    <Route exact path="/about-me" component={AboutMe} />
    <Route exact path="/work-experience" component={WorkExperience} />
    <Route exact path="/samples" component={Samples} />
    <Route exact path="/" component={Home} />

    <div className="attribution">Image by <a href="https://www.freepik.com/free-photo/beautiful-sunflower-studio-still-life_37882247.htm#query=sunflower&position=2&from_view=search&track=sph">Freepik</a></div>
    </div>

  );
}
export default App;
