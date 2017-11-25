import React, { Component } from 'react';
import MainContainer from '../../containers/MainContainer';
import { Segment, Grid, Divider } from 'semantic-ui-react';
import DateRange from './DateRange';
import FullCalendar from './FullCalendar';
import TimePicker from './TimePicker';
import './Calendar.css';

class Calendar extends Component {
  render() {
    return (
      <MainContainer>
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
      </MainContainer>
    );
  }
}

export default Calendar;
