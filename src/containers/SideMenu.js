import React, {Component} from 'react'
import {Grid, Menu, Segment, Input} from 'semantic-ui-react'
import Header from '../components/Header';
import Stats from '../components/Stats'
import Status from '../components/Status'
import Chart from '../components/Chart'

class SideMenu extends Component {
    state = {activeItem: 'Trend'}
    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        let segmentStyle = {
            border: 'none',
            'box-shadow': 'none'
        }

        const {activeItem} = this.state
        let gridStyle = {
            marginTop: '30px'
        }

        let segmentContent;
        if (this.state.activeItem === 'Trend') {
            segmentContent = (
                <div>
                    <Grid columns='equal'>
                        <Grid.Row>
                            <Grid.Column>
                                <Stats/>
                            </Grid.Column>
                            <Grid.Column width={10}>
                                <Chart/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Status/>
                </div>
            )
        } else {
            segmentContent = this.state.activeItem
        }

        return (
            <Grid style={gridStyle}>
                <Grid.Column width={3}>
                    <Menu fluid vertical tabular>
                        <Menu.Item name='My Dashboard' />
                        <Menu.Item name='Trend' active={activeItem === 'Trend'} onClick={this.handleItemClick}/>
                        <Menu.Item name='Calendar' active={activeItem === 'Calendar'} onClick={this.handleItemClick}/>
                        <Menu.Item name='Activities' active={activeItem === 'Activities'}
                                   onClick={this.handleItemClick}/>
                        <Menu.Item name='Report' active={activeItem === 'Report'} onClick={this.handleItemClick}/>
                        <Menu.Item>
                            <Input icon='search' placeholder='Search...'/>
                        </Menu.Item>
                    </Menu>
                </Grid.Column>
                <Grid.Column stretched width={13}>
                    <Header/>
                    <Segment style={segmentStyle}>
                        {segmentContent}
                    </Segment>
                </Grid.Column>
            </Grid>
        )
    }
}

export default SideMenu;
