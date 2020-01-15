import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import {Route} from "react-router-dom";
import Home from "./components/Home"
import AboutMe from "./components/AboutMe"
import Prices from "./components/Prices"
import WorkExperience from './components/WorkExperience';
import SideImage from './components/images/SideImage.png';

function App() {
  return (
    <div className="TopImage">
      <img src={SideImage} />
    <div className="container">
    <div className="App"> 
        <h1 className="Title">Stephanie's Portfolio</h1>
        <NavBar />
    </div>

    <Route exact path="/about-me" component={AboutMe} />
    <Route exact path="/work-experience" component={WorkExperience} />
    <Route exact path="/prices" component={Prices} />
    <Route exact path="/" component={Home} />
    </div>
    </div>
  );
}
export default App;
