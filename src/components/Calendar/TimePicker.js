import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import './TimePicker.css';
import moment from 'moment';

class TimePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: moment()
    };
  }

  subtractHour = () => {
    this.setState({time:this.state.time.subtract(1, 'hours')})
  }
  subtractMinute = () => {
    this.setState({time:this.state.time.subtract(10, 'minutes')})
  }
  addHour = () => {
    this.setState({time:this.state.time.add(1, 'hours')})
  }
  addMinute = () => {
    this.setState({time:this.state.time.add(10, 'minutes')})
  }

  render() {
    let hour = this.state.time.format('h')
    let minute = this.state.time.format('mm')
    let period = this.state.time.format('a')
    return (
      <div className="time-picker">
        <div className="subtracters">
          <div className="icon-wrapper"><Icon onClick={this.subtractHour} name="angle up"/></div>
          <div className="icon-wrapper"><Icon onClick={this.subtractMinute} name="angle up"/></div>
        </div>
        <div className="time">
          <span className="hour">{hour}</span>
          <span>:</span>
          <span className="minute">{minute}</span>
          <div className="period">
            {period}
          </div>
        </div>
        <div className="adders">
          <div className="icon-wrapper"><Icon onClick={this.addHour} name="angle down"/></div>
          <div className="icon-wrapper"><Icon onClick={this.addMinute} name="angle down"/></div>
        </div>
      </div>
    )
  }
}

export default TimePicker;
