import React from "react";
import MyFace from "../components/images/MyFace.jpg";

function AboutMe(){
    return(
    <div>
        <h1>About Stephanie Otzoy</h1>
        <div className="AboutTheme">
        <p>Hello, I would like to start off by saying I am not out of school yet.
            I am currently enrolled in a bootcamp program called Lambda School. I also
            work for a contracting company, Apex, that is contracted by Dell EMC as a
            Help Desk Technician. I started freelancing as a way to learn more about 
            React and gain a better understanding of the concepts that I am learning
            in school.
        </p>
        <img src={MyFace} alt="Best I have" width="400px" />
        </div>
    </div>
    );
};


export default AboutMe;