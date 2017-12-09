import React, { Component } from 'react';
import './App.css';
import LeftMenu from './components/LeftMenu/LeftMenu';
import TopMenu from './components/TopMenu/TopMenu';
import MainContainer from './pages/MainContainer'
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopMenu />
        <LeftMenu />
        <MainContainer>
          {this.props.children}
        </MainContainer>
        <Footer />
      </div>
    );
  }
}

export default App;
