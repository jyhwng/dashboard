import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './FullCalendar.css';
import events from './events';

BigCalendar.momentLocalizer(moment);

class FullCalendar extends Component {
  render() {
    let views = ['month', 'week', 'day'];
    let messages = {
      previous: 'back',
      next: 'next'
    };

    return (
      <div>
        <BigCalendar
          events={events}
          startAccessor="startDate"
          endAccessor="endDate"
          views={views}
          defaultView="month"
          messages={messages}
          selectable
          onSelectEvent={event => alert(event.title)}
          onSelectSlot={slotInfo =>
            alert(
              `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
                `\nend: ${slotInfo.end.toLocaleString()}` +
                `\naction: ${slotInfo.action}`
            )
          }
        />
      </div>
    );
  }
}

export default FullCalendar;
