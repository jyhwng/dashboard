import React, {Component} from 'react'
import {Grid, Menu, Header, Segment, Icon} from 'semantic-ui-react'
import Overview from '../containers/Overview'
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

        const leftMenuList = [
            { 'name': 'Dashboard', 'icon': 'home' },
            { 'name': 'Calendar', 'icon': 'block layout' },
            { 'name': 'Options', 'icon': 'options' },
            { 'name': 'Report', 'icon': 'checkmark box' },
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
            default:
                segmentContent = (
                    this.state.activeMenu
                )
        }

        let leftMenus = (
            <Menu pointing secondary vertical className="side-menu">
                {leftMenuList.map((item) => {
                    return (
                        <Menu.Item name={item['name']} active={activeMenu === item['name']}
                            key={item['name']}
                            onClick={this.handleItemClick}>
                            <Icon name={item['icon']} size='large' style={iconStyle}/>
                            <span>{item['name']}</span>
                        </Menu.Item>
                    )
                })}
            </Menu>
        )

        let dashboardHeader = (
            <Header as="h2">
                <Header.Content className="top-header">{this.state.activeMenu}
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
                    {leftMenus}
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

export default Content;
