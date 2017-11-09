import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import './Header.css';

class Header extends Component {
  render() {
    let title = this.props.name;
    return (
      <div>
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
