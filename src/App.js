import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import SideMenu from './components/Menu'

import { Container } from 'semantic-ui-react'

class App extends Component {
  render() {
    let containerStyle = {
        marginTop: '40px'
    }
    return (
      <div className="App">
        <Container style={containerStyle}>
            <Header />
            <SideMenu />
        </Container>
      </div>
    );
  }
}

export default App;
