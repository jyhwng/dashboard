import React, { Component } from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import BasicForm from './BasicForm';
import InputOptions from './InputOptions';

class Forms extends Component {
  render() {
    return (
      <div>
        <Grid columns="equal">
          <Grid.Row>
            <Grid.Column width={16}>
              <Segment>
                <BasicForm />
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16}>
              <Segment>
                <InputOptions />
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Forms;
