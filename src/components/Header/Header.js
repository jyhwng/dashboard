import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Icon } from 'semantic-ui-react';
import './Header.css';

class Header extends Component {
  render() {
    const title = browserHistory.getCurrentLocation().pathname.split('/')[1];
    return (
      <div className="header-container">
        <h2 className="top-header">{title}</h2>
        <div className="sub-header">
          <h5>
            <Icon name="calendar outline" />
            {title} &emsp; / &emsp;
            <Icon name="calendar outline" />
            {title}
          </h5>
        </div>
      </div>
    );
  }
}

export default Header;
