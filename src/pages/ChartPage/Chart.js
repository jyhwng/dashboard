import React, { Component } from 'react';
import LineChartComponent from '../../components/Chart/LineChartComponent'
import { Segment, Grid } from 'semantic-ui-react';
import './Chart.css'
import AreaChartComponent from '../../components/Chart/AreaChartComponent';
// http://recharts.org/

class Chart extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <Segment className="chart-container">
              <LineChartComponent />
            </Segment>
          </Grid.Column>
          <Grid.Column width={8}>
            <Segment className="chart-container">
              <AreaChartComponent />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Chart;
