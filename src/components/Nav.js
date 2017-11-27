import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CardWithAvatar from './Card';
import About from './About';
import Skills from './Skills';

const Nav = () => {
  return (
    <div>
      <Router>
        <div className="profile-footer">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
          </ul>
          <Route exact path="/" component={About} />
          <Route exact path="/projects" component={CardWithAvatar} />
          <Route exact path="/skills" component={Skills} />
        </div>
      </Router>
    </div>
  );
};

export default Nav;
