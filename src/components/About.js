import React from 'react';

const About = () => {
  return (
    <div className="resume-section">
      <p>
        Hello, I'm Andrew, a Junior Web Developer specializing in front end development. I am currently located in
        Helsinki, Finland. I like building responsive, accessible, semantic, fast websites. I spend my days typing in
        modern JavaScript and I am currently looking for an entry-level React developer position.
      </p>
      <a
        href="https://docs.google.com/document/d/1EjiOCe7oS2ErT1Aah3jjNqMf963PCjxDaDoidYaNIcA/export?format=pdf"
        download
      >
        <p className="resume-button">Download Resume</p>
      </a>
    </div>
  );
};

export default About;
