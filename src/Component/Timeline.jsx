import React from "react";
import "./Timeline.css";

const Timeline = () => {
  const experiences = [
    {
      title: "UI Designer",
      duration: "July 2015 - Present",
      company: "Awesome Studio",
      description:
        "Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.",
    },
    {
      title: "Front-end Developer",
      duration: "July 2014 - June 2015",
      company: "Super Cool Agency",
      description:
        "Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt.",
    },
    {
      title: "Web Designer",
      duration: "May 2013 - June 2014",
      company: "Great Designs Studio",
      description:
        "Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt.",
    },
  ];

  return (
    <div className="timeline-container">
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-left">
              <h3>{exp.title}</h3>
              <p>{exp.duration}</p>
            </div>
            <div className="timeline-middle">
              <div className="icon">🎓</div>
            </div>
            <div className="timeline-right">
              <h3>{exp.company}</h3>
              <hr />
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
