import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import MainContainer from '../../pages/MainContainer';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <MainContainer>
        <Grid className="fixed-footer">
          <Grid.Column width={8}>
            <h1>CHECK OUT PRESELECTED DEMOS</h1>
            <Grid>
              <Grid.Column width={8}>Vertical Menu (Default)</Grid.Column>
              <Grid.Column width={8}>
                Horizontal Menu + Boxed Container
              </Grid.Column>
            </Grid>
          </Grid.Column>
          <Grid.Column width={8}>
            <h1>CHECK OUT PRESELECTED DEMOS</h1>
            <Grid.Row columns={2}>
              <Grid.Column>
                Clean UI – a modern professional admin template, based on
                Bootstrap 4 framework. Clean UI is a powerful and super flexible
                tool, which suits best for any kind of web application: Web
                Applications; CRM; CMS; Admin Panels; Dashboards; etc. Clean UI
                is fully responsive, which means that it looks perfect on
                mobiles and tablets
              </Grid.Column>
            </Grid.Row>
          </Grid.Column>
          <Grid.Row columns={1}>
            <Grid.Column>
              © 2016 Mediatec Software All rights reserved
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </MainContainer>
    );
  }
}

export default Footer;
