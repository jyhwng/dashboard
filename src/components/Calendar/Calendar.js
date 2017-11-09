import React, { Component } from 'react';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';
import momentPropTypes from 'react-moment-proptypes';
import PropTypes from 'prop-types';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: momentPropTypes.momentObj,
      focused: PropTypes.bool
    };
  }
  render() {
    return (
      <div />
      // <SingleDatePicker
      //   date={this.state.date} // momentPropTypes.momentObj or null
      //   onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
      //   focused={this.state.focused} // PropTypes.bool
      //   onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
      // />
    );
  }
}

export default Calendar;
