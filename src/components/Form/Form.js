import React, { Component } from 'react';
import MainContainer from '../../containers/MainContainer';
import { Segment, Grid } from 'semantic-ui-react';
import BasicForm from './BasicForm';
// import TextareaForm from './TextareaForm';
import InputForm from './InputForm';

class Forms extends Component {
  render() {
    return (
      <MainContainer>
        <Grid columns="equal">
          <Grid.Row>
            <Grid.Column width={8}>
              <Segment>
                <InputForm />
              </Segment>
            </Grid.Column>
            <Grid.Column width={8}>
              <Segment>
                <BasicForm />
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </MainContainer>
    );
  }
}

export default Forms;
