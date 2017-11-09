import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import MainContainer from './MainContainer';
import './LeftMenu.css';

class SubMenu extends Component {
  render() {
    let menuList = this.props.menu;

    let iconStyle = {
      marginRight: '10px'
    };

    return (
      <div>
        {menuList.map(menu => {
          return (
            <div key={menu['name']} className="sub-menu">
              <Icon name="plus" size="small" style={iconStyle} />
              <span>{menu['name']}</span>
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
      activeMenu: ''
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
        name: 'Dashboard',
        icon: 'inbox',
        submenus: [{ name: 'Update' }, { name: 'Status' }]
      },
      {
        name: 'Form',
        icon: 'checkmark box',
        submenus: [{ name: 'Form1' }, { name: 'Form2' }]
      },
      {
        name: 'Calendar',
        icon: 'block layout',
        submenus: []
      },
      {
        name: 'Options',
        icon: 'options',
        submenus: []
      },
      {
        name: 'Page',
        icon: 'sticky note outline',
        submenus: []
      }
    ];

    let iconStyle = {
      marginRight: '10px'
    };

    return (
      <div>
        <div className="left-menus">
          <Menu pointing secondary vertical className="side-menu">
            {menuList.map(item => {
              return (
                <div key={item['name']}>
                  <Menu.Item
                    name={item['name']}
                    active={this.state.activeMenu === item['name']}
                    onClick={this.handleItemClick}
                  >
                    <Icon name={item['icon']} size="large" style={iconStyle} />
                    <span>{item['name']}</span>
                    <Icon name="angle down" className="side-menu-drop-down" />
                  </Menu.Item>
                  <div
                    className={
                      'sub-menu-container ' +
                      (this.state.activeMenu === item['name'] ? 'active' : '')
                    }
                  >
                    <SubMenu menu={item['submenus']} />
                  </div>
                </div>
              );
            })}
          </Menu>
        </div>
        <MainContainer activeMenu={this.state.activeMenu} />
      </div>
    );
  }
}

export default LeftMenu;
