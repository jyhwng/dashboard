import React, { Component } from 'react';
import './App.css';
import LeftMenu from './components/LeftMenu/LeftMenu';
import TopMenu from './components/TopMenu/TopMenu';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopMenu />
        <LeftMenu />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;
