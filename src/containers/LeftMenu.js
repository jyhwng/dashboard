import React, { Component } from 'react';
import { Link } from 'react-router';

import { Menu, Icon } from 'semantic-ui-react';
import './LeftMenu.css';

class SubMenu extends Component {
  render() {
    let subMenu = this.props.submenu;
    let iconStyle = {
      marginRight: '10px'
    };

    return (
      <div>
        {subMenu.map(submenu => {
          return (
            <div key={submenu.name} className="sub-menu">
              <Link to={submenu.name}>
                <Icon name="plus" size="small" style={iconStyle} />
                <span>{submenu.name}</span>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

class LeftMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenu: 'Dashboard'
    };
  }

  handleItemClick = (e, { name }) => {
    if (this.state.activeMenu === name) {
      this.setState({ activeMenu: '' });
    } else {
      this.setState({ activeMenu: name });
    }
  };

  render() {
    const menuList = [
      {
        name: 'dashboard',
        icon: 'inbox',
        submenus: [{ name: 'dashboard' }, { name: 'status' }]
      },
      {
        name: 'form',
        icon: 'checkmark box',
        submenus: [{ name: 'form' }, { name: 'dropdown' }]
      },
      {
        name: 'calendar',
        icon: 'block layout',
        submenus: []
      },
      {
        name: 'options',
        icon: 'options',
        submenus: []
      },
      {
        name: 'page',
        icon: 'sticky note outline',
        submenus: []
      }
    ];

    let iconStyle = {
      marginRight: '10px'
    };

    return (
      <div className="left-menus">
        <Menu pointing secondary vertical className="side-menu">
          {menuList.map(item => {
            return (
              <div key={item.name}>
                <Menu.Item
                  name={item.name}
                  active={this.state.activeMenu === item.name}
                  onClick={this.handleItemClick}
                >
                  <Icon name={item.icon} size="large" style={iconStyle} />
                  <span>{item.name}</span>
                  {item.submenus.length === 0 ? null : (
                    <Icon name="angle down" className="side-menu-drop-down" />
                  )}
                </Menu.Item>
                <div
                  className={
                    'sub-menu-container ' +
                    (this.state.activeMenu === item.name ? 'active' : '')
                  }
                >
                  <SubMenu submenu={item.submenus} />
                </div>
              </div>
            );
          })}
        </Menu>
      </div>
    );
  }
}

export default LeftMenu;
