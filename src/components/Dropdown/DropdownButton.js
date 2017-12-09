import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
import './DropdownButton.css'

export default class DropdownButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false,
    }
  }

  render() {
    const options = [
      {key: 1, content: 'option 1'},
      {key: 2, content: 'option 2'},
      {key: 3, content: 'option 3'},
    ]

    const dropdown = (
      <div className="dropdown-options">
        {options.map((option)=>{
          return (
            <div className="option" key={option.key}>{option.content}</div>
          )
        })}
      </div>
    )

    return (
      <div className="dropdown-button">
        <button onClick={() => this.setState({ clicked: !this.state.clicked })} style={this.props.style}>
          <span>Button</span>
          <Icon name={ this.state.clicked ? "angle up" : "angle down"}/>
        </button>
        {this.state.clicked ? dropdown: null}
      </div>
    )
  }
}
