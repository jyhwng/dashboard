import React, {Component} from 'react'
import {Menu, Header, Segment, Icon} from 'semantic-ui-react'
import Overview from '../containers/Overview'
import Forms from '../containers/Forms'
import Footer from '../components/Footer'
import './Content.css'

class Content extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeMenu: 'Dashboard',
        }
    }

    handleItemClick = (e, {name}) => this.setState({activeMenu: name})

    render() {
        const {activeMenu} = this.state

        const menuList = [
            { 'name': 'Dashboard', 'icon': 'home' },
            { 'name': 'Forms', 'icon': 'checkmark box' },
            { 'name': 'Calendar', 'icon': 'block layout' },
            { 'name': 'Options', 'icon': 'options' },
            { 'name': 'Page', 'icon': 'sticky note outline' },
        ]

        let iconStyle = {
            marginRight: '10px'
        }

        let segmentContent;
        switch (this.state.activeMenu) {
            case 'Dashboard':
                segmentContent = (
                    <Overview/>
                )
                break
            case 'Forms':
                segmentContent = (
                    <Forms/>
                )
                break
            default:
                segmentContent = (
                    this.state.activeMenu
                )
        }

        let leftMenus = (
            <Menu pointing secondary vertical className="side-menu">
                {menuList.map((item) => {
                    return (
                        <Menu.Item name={item['name']} active={activeMenu === item['name']}
                            key={item['name']}
                            onClick={this.handleItemClick}>
                            <Icon name={item['icon']} size='large' style={iconStyle}/>
                            <span>{item['name']}</span>
                            <Icon name='angle down' className="side-menu-drop-down" />
                        </Menu.Item>
                    )
                })}
            </Menu>
        )

        let dashboardTitle = (
            <Header as="h2">
                <Header.Content className="top-header">{this.state.activeMenu}
                    <Header.Subheader>
                        <Icon name='calendar outline'/>
                        {this.state.activeMenu} &emsp; / &emsp;
                        <Icon name='calendar outline'/>
                        {this.state.activeMenu}
                    </Header.Subheader>
                </Header.Content>
            </Header>
        )

        return (
            <div>
                <div className="left-menus">
                    {leftMenus}
                </div>
                <div className="main-container">
                    {dashboardTitle}
                    <Segment basic>
                        {segmentContent}
                    </Segment>
                    <Footer/>
                </div>
            </div>
        )
    }
}

export default Content;
