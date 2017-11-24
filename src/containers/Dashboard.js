import React, { Component } from 'react';
import MainContainer from './MainContainer';
import { Segment, Grid } from 'semantic-ui-react';
import Chart from '../components/Chart/Chart';
import './Dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <MainContainer>
        <Grid columns="equal">
          <Grid.Row>
            <Grid.Column width={5} />
            <Grid.Column width={5} />
            <Grid.Column width={6}>
              <Segment className="chart-container">
                <Chart />
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </MainContainer>
    );
  }
}

export default Dashboard;
