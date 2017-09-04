import React, { Component } from 'react';
import SocialNav from './SocialNav';
import me from '../img/me2.jpg';

class Profile extends Component {
  render() {
    return (
      <section className="information-section">
        <div className="about-section">
          <div className="profile-photo">
            <img src={me} alt="me" />
          </div>
          <div className="profile-section">
            <div className="profile-info">
              <span className="speech-bubble">Hello</span>
              <h1 className="profile-title">
                <span style={{ fontWeight: 100 }}>I'm</span> Andrew James
              </h1>
              <h2 className="profile-description">Aspiring FullStack Developer</h2>
            </div>
            <div className="profile-list">
              <ul>
                <li>
                  <strong>location</strong>
                  <span className="profile-list-item">Helsinki, Finland</span>
                </li>
                <li>
                  <strong>email</strong>
                  <span className="profile-list-item">ajames20@gmail.com</span>
                </li>
                <li>
                  <strong>phone</strong>
                  <span className="profile-list-item">+358469390400</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="profile-nav">
          <SocialNav />
        </div>
        <div className="resume-section">
          <a
            href="https://docs.google.com/document/d/1EjiOCe7oS2ErT1Aah3jjNqMf963PCjxDaDoidYaNIcA/export?format=pdf"
            download
          >
            <p className="resume-button">Download Resume</p>
          </a>
          <p>
            Hello, I'm Andrew, a Junior Web Developer specializing in front end development. I am currently located in
            Helsinki, Finland. I like building responsive, accessible, semantic, fast websites. I spend my days typing
            in modern JavaScript and I am currently looking for an entry-level React developer position.
          </p>
        </div>
      </section>
    );
  }
}

export default Profile;
