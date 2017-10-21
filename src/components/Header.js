import React, {Component} from 'react';
import {Menu, Grid, Segment} from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'
import Content from '../containers/Content'

class MainHeader extends Component {
    state = {activeItem: 'home'}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state

        let iconStyle = {
            margin: '0 10px'
        }

        return (
            <div>
                <Menu pointing secondary>
                    <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
                        <Icon name='home' size='large' style={iconStyle} />
                    </Menu.Item>
                    <Menu.Item name='inbox' active={activeItem === 'inbox'} onClick={this.handleItemClick}>
                        <Icon name='inbox' size='large' style={iconStyle} />
                    </Menu.Item>
                    <Menu.Item name='browser' active={activeItem === 'browser'} onClick={this.handleItemClick}>
                        <Icon name='browser' size='large' style={iconStyle} />
                    </Menu.Item>
                    <Menu.Item name='comment' active={activeItem === 'comment'} onClick={this.handleItemClick}>
                        <Icon name='comment' size='large' style={iconStyle} />
                    </Menu.Item>

                    <Menu.Menu position='right'>
                        <Menu.Item name='setting' active={activeItem === 'setting'} onClick={this.handleItemClick}>
                            <Icon name='setting' size='large' style={iconStyle} />
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

export default MainHeader;
