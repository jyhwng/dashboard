import React, { Component } from 'react';
import './App.css';
import LeftMenu from './containers/LeftMenu';
import TopMenu from './components/TopMenu/TopMenu';
import Footer from './components/Footer/Footer';
import 'react-dates/initialize';

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
