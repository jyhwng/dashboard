import React, {Component} from 'react'
import {Grid, Menu, Header, Segment, Icon} from 'semantic-ui-react'
import Overview from '../containers/Overview'
import Footer from '../components/Footer'
import './styles/SideMenu.css'

class SideMenu extends Component {
    state = {
        activeItem: 'Dashboard',
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

        return (
            <Grid>
                <Grid.Column width={2}>
                    <Menu pointing secondary vertical className="side-menu">
                        <Menu.Item name='Dashboard' active={activeItem === 'Dashboard'} onClick={this.handleItemClick}>
                            <Icon name='home' size='large' style={iconStyle}/>
                            <span>Dashboard</span>
                        </Menu.Item>
                        <Menu.Item name='Calendar' active={activeItem === 'Calendar'} onClick={this.handleItemClick}>
                            <Icon name='block layout' size='large' style={iconStyle}/>
                            <span>Calendar</span>
                        </Menu.Item>
                        <Menu.Item name='Options' active={activeItem === 'Options'} onClick={this.handleItemClick}>
                            <Icon name='options' size='large' style={iconStyle}/>
                            <span>Options</span>
                        </Menu.Item>
                        <Menu.Item name='Report' active={activeItem === 'Report'} onClick={this.handleItemClick}>
                            <Icon name='checkmark box' size='large' style={iconStyle}/>
                            <span>Form</span>
                        </Menu.Item>
                        <Menu.Item name='Page' active={activeItem === 'Page'} onClick={this.handleItemClick}>
                            <Icon name='sticky note outline' size='large' style={iconStyle}/>
                            <span>Page</span>
                        </Menu.Item>
                    </Menu>
                </Grid.Column>
                <Grid.Column stretched width={14}>
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
