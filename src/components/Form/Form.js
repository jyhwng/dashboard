import React, { Component } from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import BasicForm from './BasicForm';
import TextareaForm from './TextareaForm';
import InputForm from './InputForm';
import Header from '../Header/Header';
import '../../containers/MainContainer.css';

class Forms extends Component {
  render() {
    return (
      <div className="main-container">
        <Header name="Form" />
        <Grid columns="equal">
          <Grid.Row>
            <Grid.Column width={8}>
              <Segment>
                <InputForm />
              </Segment>
            </Grid.Column>
            <Grid.Column width={8}>
              <Segment>
                <TextareaForm />
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16}>
              <Segment>
                <BasicForm />
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Forms;
