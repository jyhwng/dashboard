import React, { Component } from 'react';
import { Menu, Icon, Dropdown } from 'semantic-ui-react';
import TopSearch from './TopSearch';
import MyMenu from './MyMenu';
import Notification from './Notification';
import './TopMenu.css';

class TopMenu extends Component {
  state = { activeItem: 'inbox' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    let iconStyle = {
      margin: '0 10px 0 0'
    };

    return (
      <Menu pointing secondary className="top-menu">
        <Menu.Menu postion="left" className="menu-logo">
          <Menu.Item>
            <h3>AllNone</h3>
          </Menu.Item>
        </Menu.Menu>

        <Menu.Menu className="center menu">
          <Menu.Item
            name="inbox"
            active={activeItem === 'inbox'}
            onClick={this.handleItemClick}
          >
            <Icon name="inbox" size="large" style={iconStyle} />
            <span>Home</span>
          </Menu.Item>

          <Menu.Item
            name="browser"
            active={activeItem === 'browser'}
            onClick={this.handleItemClick}
          >
            <Icon name="line chart" size="large" style={iconStyle} />
            <span>Datalab</span>
          </Menu.Item>

          <Menu.Item
            name="portfolio"
            active={activeItem === 'portfolio'}
            onClick={this.handleItemClick}
          >
            <Icon name="cubes" size="large" style={iconStyle} />
            <span>Portfolio</span>
            <Dropdown>
              <Dropdown.Menu>
                <Dropdown.Header>Categories</Dropdown.Header>
                <Dropdown.Item>Home Goods</Dropdown.Item>
                <Dropdown.Item>Bedroom</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Header>Order</Dropdown.Header>
                <Dropdown.Item>Status</Dropdown.Item>
                <Dropdown.Item>Cancellations</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        </Menu.Menu>

        <Menu.Menu position="right">
          <Menu.Item>
            <TopSearch />
          </Menu.Item>
          <Menu.Item name="notification" onClick={this.handleItemClick}>
            <Notification />
          </Menu.Item>
          <Menu.Item name="message" onClick={this.handleItemClick}>
            <Icon name="browser" size="large" style={iconStyle} />
          </Menu.Item>
          <Menu.Item name="setting" onClick={this.handleItemClick}>
            <MyMenu />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default TopMenu;
