import React, { Component } from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import Accordion from '../../components/Accordion/Accordion'
import Modal from '../../components/Modal/Modal'
// import Pagination from '../../components/Pagination/Pagination'

class Layout extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <Segment>
                <Accordion/>
            </Segment>
          </Grid.Column>
          <Grid.Column width={8}>
            <Segment>
                <Modal />
            </Segment>
            <Segment>
                <p>Pagination</p>
            </Segment>
            <Segment>
                <p>Badge</p>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Layout;
