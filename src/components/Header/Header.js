import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div>
        <h2 className="top-header">{this.props.name}</h2>
        <div className="sub-header">
          <h5>
            <Icon name="calendar outline" />
            {this.props.name} &emsp; / &emsp;
            <Icon name="calendar outline" />
            {this.props.name}
          </h5>
        </div>
      </div>
    );
  }
}

export default Header;
