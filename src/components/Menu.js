import React, { Component } from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'

class SideMenu extends Component {
  state = { activeItem: 'Trend' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    let GridStyle = {
        marginTop: '30px'
    }

    return (
      <Grid style={GridStyle}>
        <Grid.Column width={2}>
          <Menu fluid vertical tabular>
            <Menu.Item name='Trend' active={activeItem === 'Trend'} onClick={this.handleItemClick} />
            <Menu.Item name='Calendar' active={activeItem === 'Calendar'} onClick={this.handleItemClick} />
            <Menu.Item name='Activities' active={activeItem === 'Activities'} onClick={this.handleItemClick} />
            <Menu.Item name='Report' active={activeItem === 'Report'} onClick={this.handleItemClick} />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={14}>
          <Segment>
            { this.state.activeItem }
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

export default SideMenu;
