import React, { Component } from 'react';
import MainContainer from '../../containers/MainContainer';
import { Segment, Grid } from 'semantic-ui-react';
import Accordion from './Accordion'
import Modal from './Modal'
import './Layout.css';

class Layout extends Component {
  render() {
    return (
      <MainContainer>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <Segment>
                  <Accordion/>
              </Segment>
            </Grid.Column>
            <Grid.Column width={8}>
              <Segment>
                <Modal/>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </MainContainer>
    )
  }
}

export default Layout;
