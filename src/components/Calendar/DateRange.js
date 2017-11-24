import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

BigCalendar.momentLocalizer(moment);

class DateRange extends Component {
  render() {
    let myEventsList = [];
    return (
      <div>
        <BigCalendar
          events={myEventsList}
          startAccessor="startDate"
          endAccessor="endDate"
        />
      </div>
    );
  }
}

export default DateRange;
