import React, { Component } from 'react';
import { Segment, Grid, Divider } from 'semantic-ui-react';
import DateRange from '../../components/Calendar/DateRange';
import FullCalendar from '../../components/Calendar/FullCalendar';
import TimePicker from '../../components/Calendar/TimePicker';
import './Calendar.css';

class Calendar extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <Segment>
              <p>Date Picker</p>
              <DateRange />
              <Divider hidden/>
              <p>Time Picker</p>
              <TimePicker/>
            </Segment>
          </Grid.Column>
          <Grid.Column width={8}>
            <Segment>
              <FullCalendar />
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Segment>
              <FullCalendar />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Calendar;
