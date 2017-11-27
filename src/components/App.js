import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import SocialNav from './SocialNav';
import CardWithAvatar from './Card';
import Header from './Header';
import Profile from './Profile';
import ScrollToTopButton from './ScrollToTopButton';

injectTapEventPlugin();

const App = () => (
  <main>
    <Header />
    <div className="content">
      <div className="container">
        <Profile />
        <CardWithAvatar />
      </div>
      <ScrollToTopButton />
    </div>
    <SocialNav className="footer" />
  </main>
);

export default App;
