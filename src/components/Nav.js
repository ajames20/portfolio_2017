import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CardWithAvatar from './Card';
import About from './About';

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
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
          <Route exact path="/" component={About} />
          <Route exact path="/projects" component={CardWithAvatar} />
        </div>
      </Router>
    </div>
  );
};

export default Nav;
