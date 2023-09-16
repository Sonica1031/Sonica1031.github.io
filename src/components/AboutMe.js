import React from "react";
import Me from "../components/images/Me.jpg";

function AboutMe(){
    return(
    <div>
        <h1>About Stephanie Otzoy</h1>
        <div className="AboutTheme">
        <p>
            I am currently 32 years old. I work at a company called BankOnIT and have been there for 2 years. Collectively I have more than 3 years experience with help desk environments. I love solving puzzels and working with code. While at Dell I helped develop training websites during covid. I now work on troubleshooting application issues. I also make the prep documents for updating those applications. I am constantly striving to continue to learn and develop my skills.
        </p>
        <img src={Me} alt="Best I have" width="400px" />
        </div>
    </div>
    );
};


export default AboutMe;