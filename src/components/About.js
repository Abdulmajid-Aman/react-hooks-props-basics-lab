import React from "react";
import Links from "./Links";

function About(props) {
  let github = props.github
  let linkedin = props.linkedin
  let bio = props.bio
  console.log(github, linkedin);
    return (
    <>
    <div id="about">
      <h2>About Me</h2>
      {bio && <p>{bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links  github = {github} linkedin = {linkedin}/>
    </div>
    </>

    )
  }
  

export default About;
