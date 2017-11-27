import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FontAwesome from 'react-fontawesome';

const email = <FontAwesome name="envelope-open-o" className="fa-icons" />;
const github = <FontAwesome name="github" className="fa-icons" />;
const linkedIn = <FontAwesome name="linkedin-square" className="fa-icons" />;
const codepen = <FontAwesome name="codepen" className="fa-icons" />;

class SocialNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: null,
    };
  }

  select = index => this.setState({ selectedIndex: index });

  render() {
    return (
      <footer>
        <MuiThemeProvider>
          <div className="footer">
            <ul>
              <li>
                <a href="mailto:ajames20@gmail.com?Subject=Hello" className="footer-icons">
                  {email}
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/andrew-james-02b02113a/" className="footer-icons" target="_blank">
                  {linkedIn}
                </a>
              </li>
              <li>
                <a href="https://github.com/ajames20" className="footer-icons" target="_blank">
                  {github}
                </a>
              </li>
              <li>
                <a href="https://github.com/ajames20" className="footer-icons" target="_blank">
                  {codepen}
                </a>
              </li>
            </ul>
          </div>
        </MuiThemeProvider>
      </footer>
    );
  }
}

export default SocialNav;
