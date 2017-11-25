import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './DateRange.css';

BigCalendar.momentLocalizer(moment);

class DateRange extends Component {
  render() {
    let events = [];
    const views = ['month'];
    const messages = {
      previous: 'back',
      next: 'next'
    };
    let formats = {};

    //   weekdayFormat: (date, culture, local) => {
    //     local.format(date.getDay(), 'DD', 'ko')
    //     // return date.getDay()
    //   },
    //   eventTimeRangeFormat: ({ start, end }, culture, local) =>
    //     local.format(start, 'HH:mm', culture) + '-' +
    //     local.format(end, 'HH:mm', culture),
    //   dayFormat: 'MM-DD' + ' ' + '星期' + 'dd',
    // }

    return (
      <div className="date-range-wrapper">
        <BigCalendar
          events={events}
          formats={formats}
          startAccessor="startDate"
          endAccessor="endDate"
          views={views}
          defaultView="month"
          // slotPropGetter={}
          messages={messages}
          selectable
          onSelectEvent={event => alert(event.title)}
          onSelectSlot={selected => console.log(selected.slots)}
        />
      </div>
    );
  }
}

export default DateRange;
