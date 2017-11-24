import React, { Component } from 'react';
import MainContainer from '../../containers/MainContainer';
import { Segment, Grid } from 'semantic-ui-react';
import DateRange from './DateRange';
import SingleDate from './SingleDate';
import './Calendar.css';

class Calendar extends Component {
  render() {
    return (
      <MainContainer>
        <Grid columns="equal">
          <Grid.Row>
            <Grid.Column>
              <Segment className="single-date-picker-wrapper">
                <SingleDate />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment className="single-date-picker-wrapper">
                <DateRange />
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </MainContainer>
    );
  }
}

export default Calendar;
