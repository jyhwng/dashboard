import React, { Component } from 'react';
import MainContainer from './MainContainer';
import { Segment, Grid } from 'semantic-ui-react';
import LineChartComponent from '../components/Chart/LineChartComponent';
import FullCalendar from '../components/Calendar/FullCalendar'
import './Dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <MainContainer>
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
      </MainContainer>
    );
  }
}

export default Dashboard;
