import React, { Component } from 'react';
import MainContainer from './MainContainer';
import { Segment, Grid } from 'semantic-ui-react';
import Activity from '../components/elements/Activity';
import Board from '../components/elements/Board';
import NameCard from '../components/elements/NameCard';
import Chart from '../components/Chart/Chart';
import './Dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <MainContainer>
        <Grid columns="equal">
          <Grid.Row>
            <Grid.Column width={5}>
              <Activity />
            </Grid.Column>
            <Grid.Column width={5}>
              <NameCard />
            </Grid.Column>
            <Grid.Column width={6}>
              <Segment className="chart-container">
                <Chart />
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Board />
      </MainContainer>
    );
  }
}

export default Dashboard;
