import React, { Component } from 'react';
import { Header, Segment, Icon } from 'semantic-ui-react';
import Overview from './Overview';
import Form from '../components/Form/Form';
import Footer from '../components/Footer/Footer';
import Calendar from '../components/Calendar/Calendar';
import './MainContainer.css';

class MainContainer extends Component {
  render() {
    let dashboardTitle = (
      <Header as="h2">
        <Header.Content className="top-header">
          {this.props.activeMenu}
          <Header.Subheader>
            <Icon name="calendar outline" />
            {this.props.activeMenu} &emsp; / &emsp;
            <Icon name="calendar outline" />
            {this.props.activeMenu}
          </Header.Subheader>
        </Header.Content>
      </Header>
    );

    return (
      <div className="main-container">
        {dashboardTitle}
        <Segment basic>
          <Footer />
        </Segment>
      </div>
    );
  }
}

export default MainContainer;
