import React, { Component } from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import Updates from '../components/elements/Updates';
import Activity from '../components/elements/Activity';
import Board from '../components/elements/Board';
import NameCard from '../components/elements/NameCard';
import Chart from '../components/Chart/Chart';
import Header from '../components/Header/Header';
import './Overview.css';
import './MainContainer.css';

class Overview extends Component {
  render() {
    let pathname = this.props.location.pathname;
    return (
      <div className="main-container">
        <Header name={pathname} />
        <Grid columns="equal">
          <Updates />
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
      </div>
    );
  }
}

export default Overview;
