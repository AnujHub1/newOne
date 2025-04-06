import React from "react";
import "./About.css";
import profilePic from "../assets/profile-pic.jpg";
export default function About() {
  const skills = [
    { name: "HTML5", level: "90%" },
    { name: "CSS3", level: "85%" },
    { name: "JQUERY", level: "70%" },
    { name: "PHP", level: "95%" },
    { name: "WORDPRESS", level: "75%" },
  ];

  return (
    <div className="about-container">
      <div className="about-container1">
        <p id="about-heading">About</p>
        <h3>Let me introduce myself.</h3>
      </div>
      <div className="about-container2">
        <img src={profilePic} alt="" />
        <p className="aboutdes">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus ea explicabo deleniti maxime est eum eius? Quaerat
          dignissimos eius tempora tenetur officiis vero velit, harum culpa
          beatae animi et aliquid.
        </p>
      </div>
      <div className="about-container3">
        <div className="profile">
          <h3>FULLNAME:</h3>
          <p>Juan Dela Cruz</p>
          <h3>BIRTH DATE:</h3>
          <p>September 28, 1987</p>
          <h3>JOB:</h3>
          <p>Freelancer, Frontend Developer</p>
          <h3>WEBSITE:</h3>
          <p>www.kardswebsite.com</p>
          <h3>EMAIL:</h3>
          <p>me@kardswebsite.com</p>
        </div>

        <div className="skills">
          {skills.map((skill, index) => (
            <div key={index} className="skill">
              <h4>{skill.name}</h4>
              <div className="progress-bar">
                <div className="progress" style={{ width: skill.level }}>
                  <span>{skill.level}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
