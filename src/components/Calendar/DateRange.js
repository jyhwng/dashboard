import React, { Component } from 'react';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';
import momentPropTypes from 'react-moment-proptypes';
import PropTypes from 'prop-types';
import 'react-dates/lib/css/_datepicker.css';
import { Icon } from 'semantic-ui-react';
import './DateRange.css';

class DateRange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null
    };
  }
  render() {
    const PrevIcon = (
      <div>
        <Icon name="chevron circle left" size="medium" />
      </div>
    );
    const NextIcon = (
      <div>
        <Icon name="chevron circle right" size="medium" />
      </div>
    );
    return (
      <DateRangePicker
        numberOfMonths={1}
        keepOpenOnDateSelect
        navPrev={PrevIcon}
        navNext={NextIcon}
        startDate={this.state.startDate} // momentPropTypes.momentObj or null,
        endDate={this.state.endDate} // momentPropTypes.momentObj or null,
        onDatesChange={({ startDate, endDate }) =>
          this.setState({ startDate, endDate })
        } // PropTypes.func.isRequired,
        focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
      />
    );
  }
}

export default DateRange;
