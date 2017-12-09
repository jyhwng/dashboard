import React, { Component } from 'react';
import { Segment, Grid, Divider } from 'semantic-ui-react';
import PitRangePicker from '../../components/Form/PitRangePicker'
import DefaultRangePicker from '../../components/Form/DefaultRangePicker'
// https://github.com/airbnb/rheostat

class RangePickers extends Component {
  render() {
    return (
      <Grid columns="equal">
        <Grid.Row>
          <Grid.Column width={8}>
            <Segment>
              <p>Default Range picker</p>
              <DefaultRangePicker/>
              <Divider hidden/>
              <p>Range picker with scale</p>
              <PitRangePicker/>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default RangePickers;