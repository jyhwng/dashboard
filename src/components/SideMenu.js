import React, {Component} from 'react'
import {Grid, Menu, Header, Segment, Icon} from 'semantic-ui-react'
import Overview from '../containers/Overview'
import Footer from '../components/Footer'
import './styles/SideMenu.css'

class SideMenu extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeItem: 'Dashboard',
        }
    }

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state

        let iconStyle = {
            marginRight: '10px'
        }

        let segmentContent;
        switch (this.state.activeItem) {
            case 'Dashboard':
                segmentContent = (
                    <Overview/>
                )
                break
            default:
                segmentContent = (
                    this.state.activeItem
                )
        }

        const leftMenuList = [
            { 'name': 'Dashboard', 'icon': 'home' },
            { 'name': 'Calendar', 'icon': 'block layout' },
            { 'name': 'Options', 'icon': 'options' },
            { 'name': 'Report', 'icon': 'checkmark box' },
            { 'name': 'Page', 'icon': 'sticky note outline' },
        ]

        let leftMenus = (
            <div>
                {leftMenuList.map((item) => {
                    return (
                        <Menu.Item name={item['name']} active={activeItem === item['name']}
                            key={item['name']}
                            onClick={this.handleItemClick}>
                            <Icon name={item['icon']} size='large' style={iconStyle}/>
                            <span>{item['name']}</span>
                        </Menu.Item>
                    )
                })}
            </div>
        )

        let dashboardHeader = (
            <Header as="h2">
                <Header.Content className="top-header">{this.state.activeItem}
                    <Header.Subheader>
                        <Icon name='calendar outline'/>
                        Dashboard &emsp; / &emsp;
                        <Icon name='calendar outline'/>
                        Dashboard
                    </Header.Subheader>
                </Header.Content>
            </Header>
        )

        return (
            <Grid>
                <Grid.Column width={2}>
                    <Menu pointing secondary vertical className="side-menu">
                    {leftMenus}
                    </Menu>
                </Grid.Column>
                <Grid.Column stretched width={14}>
                    {dashboardHeader}
                    <Segment basic>
                        {segmentContent}
                    </Segment>
                    <Footer/>
                </Grid.Column>
            </Grid>
        )
    }
}

export default SideMenu;
