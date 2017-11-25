import React, { Component } from 'react';
import LineChartComponent from './LineChartComponent'
import AreaChartComponent from './AreaChartComponent'
import { Segment, Grid } from 'semantic-ui-react';
import { MainContainer } from '../../containers/MainContainer';
import './Chart.css'

class Chart extends Component {
  render() {
    return (
      <MainContainer>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <Segment className="chart-container">
                <LineChartComponent />
              </Segment>
            </Grid.Column>
            <Grid.Column width={8}>
              <Segment>
                <AreaChartComponent />
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </MainContainer>
    )
  }
}

export default Chart;
