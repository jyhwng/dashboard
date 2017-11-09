import React, { Component } from 'react';
import { Icon, Dropdown } from 'semantic-ui-react';
import './Notification.css';

class Notification extends Component {
  state = { new: 3 };
  render() {
    const menuDropdownStyle = {
      marginRight: '-65px'
    };
    const iconStyle = {
      margin: '0 10px 0 0'
    };
    let newNotification = (
      <div className="new-notification">
        <span>{this.state.new}</span>
      </div>
    );
    const trigger = (
      <div>
        <Icon name="alarm outline" size="large" style={iconStyle} />
        {this.state.new > 0 ? newNotification : null}
      </div>
    );
    return (
      <Dropdown trigger={trigger} icon={false} pointing>
        <Dropdown.Menu style={menuDropdownStyle}>
          <Dropdown.Header icon="tags" content="Filter by tag" />
          <Dropdown.Divider />
          <Dropdown.Item>
            <Icon name="attention" className="right floated" />
            Important
          </Dropdown.Item>
          <Dropdown.Item>
            <Icon name="comment" className="right floated" />
            Announcement
          </Dropdown.Item>
          <Dropdown.Item>
            <Icon name="conversation" className="right floated" />
            Discussion
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default Notification;
