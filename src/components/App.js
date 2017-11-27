import React from 'react';
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
      </div>
      <ScrollToTopButton />
    </div>
    <SocialNav className="footer" />
  </main>
);

export default App;
