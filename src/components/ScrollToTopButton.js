import React, { Component } from 'react';
import ScrollToTop from 'react-scroll-up';
import FontAwesome from 'react-fontawesome';

const upArrow = <FontAwesome name="arrow-up" className="scroll-to-top" style={{ color: '#FFA500', height: 37, width: 37, fontSize: 27, paddingLeft: 5.75, paddingTop: 3.75 }} />;

class ScrollToTopButton extends Component {
  render() {
    return (
      <ScrollToTop
        showUnder={100}
        style={{
          position: 'fixed',
          bottom: 100,
          right: 15,
          cursor: 'pointer',
          transitionDuration: '0.2s',
          transitionTimingFunction: 'linear',
          transitionDelay: '0s',
          border: '1px solid #FFA500',
          borderRadius: '50%',
          zIndex: 100,
        }}
      >
        {upArrow}
      </ScrollToTop >
    );
  }
}

export default ScrollToTopButton;
