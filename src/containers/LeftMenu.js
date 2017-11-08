import React, {Component} from 'react'
import {Menu, Icon} from 'semantic-ui-react'
import MainContainer from './MainContainer'
import './LeftMenu.css'

class LeftMenu extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeMenu: 'Dashboard',
        }
    }

    handleItemClick = (e, {name}) => this.setState({activeMenu: name})

    render() {
        const menuList = [
          { 'name': 'Dashboard',
            'icon' : 'home',
            'submenus': ['update', 'status']
          },
          { 'name': 'Form',
            'icon' : 'checkmark box',
            'submenus': ['test', 'calendar']
          },
          { 'name': 'Calendar', 'icon': 'block layout' },
          { 'name': 'Options', 'icon': 'options' },
          { 'name': 'Page', 'icon': 'sticky note outline' },
        ]

        let iconStyle = {
            marginRight: '10px'
        }

        return (
          <div>
            <div className="left-menus">
              <Menu pointing secondary vertical className="side-menu">
                {menuList.map((item) => {
                  return (
                    <Menu.Item name={item['name']} active={this.state.activeMenu === item['name']}
                      key={item['name']}
                      onClick={this.handleItemClick}>
                      <Icon name={item['icon']} size='large' style={iconStyle}/>
                      <span>{item['name']}</span>
                      <Icon name='angle down' className="side-menu-drop-down" />
                    </Menu.Item>
                  )
                })}
              </Menu>
            </div>
            <MainContainer activeMenu={this.state.activeMenu}/>
          </div>
        )
    }
}

export default LeftMenu;
