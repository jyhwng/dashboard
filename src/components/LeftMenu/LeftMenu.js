import React, { Component } from 'react';
import { Link } from 'react-router';
import { Icon } from 'semantic-ui-react';
import './LeftMenu.css';

class SubMenu extends Component {
  render() {
    let subMenu = this.props.submenu;

    if (subMenu !== null) {
      return (
        <div>
          {subMenu.map(submenu => {
            return (
              <div key={submenu.name} className="sub-menu">
                <Link to={submenu.name}>
                  <Icon name="plus" size="small"/>
                  <span>{submenu.name}</span>
                </Link>
              </div>
            );
          })}
        </div>
      );
    } else {
      return <div></div>
    }
  }
}

class LeftMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenu: 'dashboard'
    };
  }

  render() {
    const menuList = [
      {
        name: 'dashboard',
        icon: 'inbox',
      },
      {
        name: 'form',
        icon: 'checkmark box',
        submenus: [
          { name: 'form' },
          { name: 'dropdowns' },
          { name: 'range-picker' }
        ]
      },
      {
        name: 'calendar',
        icon: 'calendar check',
      },
      {
        name: 'layout',
        icon: 'grid layout',
        submenus: [
          { name: 'accordion' },
          { name: 'pagination' },
          { name: 'badge' },
          { name: 'modal' }
        ]
      },
      {
        name: 'chart',
        icon: 'bar chart',
      }
    ];

    return (
      <div className="left-menus">
        {menuList.map(item => {
          if (item.submenus) {
            return (
              <div key={item.name}
                className={this.state.activeMenu === item.name ? 'menu active' : 'menu' }
                onClick={() => this.setState({ activeMenu: item.name })}>
                  <Icon name={item.icon} size="large"/>
                  <span>{item.name}</span>
                  <Icon name={this.state.activeMenu === item.name ? "angle up" : "angle down" }/>
                <div className="">
                  <div className={ 'sub-menu-container ' +
                      (this.state.activeMenu === item.name ? 'active' : '') } >
                    <SubMenu submenu={item.submenus} menu={item} />
                  </div>
                </div>
              </div>
            )
          } else {
            return (
              <Link to={item.name} name={item.name} key={item.name}
                className={this.state.activeMenu === item.name ? 'menu active' : 'menu' }
                onClick={() => this.setState({ activeMenu: item.name })}
                >
                <Icon name={item.icon} size="large"/>
                <span>{item.name}</span>
              </Link>
            )
          }
        })}
      </div>
    );
  }
}

export default LeftMenu;
