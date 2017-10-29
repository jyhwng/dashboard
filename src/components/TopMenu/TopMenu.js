import React, {Component} from 'react';
import {Menu, Grid, Icon} from 'semantic-ui-react'
import './Header.css'
import TopSearch from './TopSearch'
import MyPage from './MyPage'
import './TopMenu.css'

class TopMenu extends Component {
    state = {activeItem: 'toggle'}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state

        let iconStyle = {
            margin: '0 10px 0 0'
        }

        return (
            <div>
                <Menu pointing secondary>
                    <Menu.Menu postion="left" className="menu-logo">
                        <Menu.Item>
                            <span>LOGO</span>
                        </Menu.Item>
                    </Menu.Menu>

                    <Menu.Menu className="center menu">
                        <Menu.Item name='inbox' active={activeItem === 'inbox'} onClick={this.handleItemClick}>
                            <Icon name='inbox' size='large' style={iconStyle}/>
                            <span>Home</span>
                        </Menu.Item>
                        <Menu.Item name='browser' active={activeItem === 'browser'} onClick={this.handleItemClick}>
                            <Icon name='browser' size='large' style={iconStyle}/>
                            <span>Datalab</span>
                        </Menu.Item>
                        <Menu.Item name='comment' active={activeItem === 'comment'} onClick={this.handleItemClick}>
                            <Icon name='comment' size='large' style={iconStyle}/>
                            <span>Portfolio</span>
                        </Menu.Item>
                    </Menu.Menu>

                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <TopSearch/>
                        </Menu.Item>
                        <Menu.Item name='notification' onClick={this.handleItemClick}>
                            <Icon name='alarm outline' size='large' style={iconStyle}/>
                        </Menu.Item>
                        <Menu.Item name='message' onClick={this.handleItemClick}>
                            <Icon name='comments outline' size='large' style={iconStyle}/>
                        </Menu.Item>
                        <Menu.Item name='setting' onClick={this.handleItemClick}>
                            <MyPage/>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
                <Grid>
                    <Grid.Column>

                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default TopMenu;
