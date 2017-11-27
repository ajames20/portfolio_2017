import React, { Component } from 'react';
import SocialNav from './SocialNav';
import Nav from './Nav';
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
        <Nav />
      </section>
    );
  }
}

export default Profile;
