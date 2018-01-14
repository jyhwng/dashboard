import React, { Component } from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import Accordion from '../../components/Accordion/Accordion'
import Modal from '../../components/Modal/Modal'
import Notification from '../../components/Notification/Notification'
import Pagination from '../../components/Pagination/Pagination'

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
                <Pagination />
            </Segment>
            <Segment>
                <p>Badge</p>
                <Notification icon="wait" numOfNew={10} />
                <Notification icon="user outline" numOfNew={2} />
                <Notification icon="clone" numOfNew={4} />
                <Notification icon="talk outline" numOfNew={27} />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Layout;
