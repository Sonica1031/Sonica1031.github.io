import React from "react";

function Samples(){
    return(
    <div>
        <h1>Stephanie's Samples</h1>
        <div className="linking-links">
        <div>
        <a className="link-tag" href="https://custom-hooks.netlify.com/">Custom Hooks</a>
        <p className="pTagWidth">
            I created this as a project for my school.
            It's using custom hooks to store if darkmode
            is on/off in local storage and a custom
            hook to change the background to darkmode. </p>
        </div>
        <div>
        <a className="link-tag" href="https://yourtodos.netlify.com/">Todo List</a>
        <p className="pTagWidth">
            I created this as a project for my school.
            It's a simple, but effective app. The background
            was created by me.
        </p>
        </div>
        <div>
        <a className="link-tag" href="https://puff-palace.netlify.com/">Side Project</a>
        <p className="pTagWidth">
            I created this project for my school, but also I made
            this for my sister-in-laws dispensary. It's using the
            same custom hooks as in my dark mode app, but it also
            is the beginnings to a shopping website. I haven't yet
            learned back-end, but my goal is to make this a fully
            functional shopping app.
        </p>
        </div>
        </div>
    </div>
    );
};


export default Samples;