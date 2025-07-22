import React from 'react';
import './About.css';

function About() {
  return (
    <div className="abtcont" id="about">
      <div className="abtleft">
        <p className="abttitle">About me</p>
        <div className="innercontainer">
          <p>I'm Mohamed Islaam K A,</p>
          <p>I'm a B.Tech IT student at Ramco Institute of Technology (2022-2026), with a strong interest in web & app development. I'm focused on building my skills in programming and web technologies, aiming to create innovative web solutions in the near future</p>
          <p><b>Email:</b> mohamedislaam87@gmail.com</p>
          <p><b>Location:</b> kadayanallur,Tamil Nadu</p>
          <a href="Resume.pdf" download>Resume</a>
        </div>
      </div>
      <div className="sbtright">
        <div className="webcont">
          <div>
            <p>Web Developer</p>
            <a href="#asweb">Projects</a>
          </div>
          <span>{"</>"}</span>
        </div>
        <div className="webcont">
          <div>
            <p>App Developer</p>
            <a href="#asapp">Projects</a>
          </div>
          <span>{"{}"}</span>

        </div>
      </div>
    </div>
  )
}

export default About