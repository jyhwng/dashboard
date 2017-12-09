import React, { Component } from 'react';
import { Segment, Grid, Divider } from 'semantic-ui-react';
import BasicForm from '../../components/Form/BasicForm';
import BasicInput from '../../components/Form/BasicInput'
import ActionInput from '../../components/Form/ActionInput'
import IconInput from '../../components/Form/IconInput'

class Forms extends Component {
  render() {
    return (
      <Grid columns="equal" className="blendx_input">
        <Grid.Row>
          <Grid.Column width={8}>
            <Segment>
              <BasicInput disabled={false} />
              <Divider hidden/>
              <ActionInput actionPosition="left" />
              <Divider hidden/>
              <IconInput />
              <Divider hidden/>
              <BasicInput disabled={true} />
            </Segment>
          </Grid.Column>
          <Grid.Column width={8}>
            <Segment>
              <BasicForm/>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Forms;
