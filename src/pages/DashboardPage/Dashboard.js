import React, { Component } from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import LineChartComponent from '../../components/Chart/LineChartComponent';
import FullCalendar from '../../components/Calendar/FullCalendar'
import './Dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <Grid columns="equal">
        <Grid.Row>
          <Grid.Column width={8}>
            <Segment>
              <FullCalendar/>
            </Segment>
          </Grid.Column>
          <Grid.Column width={8}>
            <Segment className="chart-container">
              <LineChartComponent />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Dashboard;
