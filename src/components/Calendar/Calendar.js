import React, { Component } from 'react';
import MainContainer from '../../containers/MainContainer';
import { Segment, Grid } from 'semantic-ui-react';
import DateRange from './DateRange';
import FullCalendar from './FullCalendar';
import './Calendar.css';

class Calendar extends Component {
  render() {
    return (
      <MainContainer>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <Segment className="date-range-wrapper">
                <DateRange />
              </Segment>
            </Grid.Column>
            <Grid.Column width={8}>
              <Segment className="full-calendar-wrapper">
                <FullCalendar />
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Segment className="full-calendar-wrapper">
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
