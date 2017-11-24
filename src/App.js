import React, { Component } from 'react';
import './App.css';
import LeftMenu from './components/LeftMenu/LeftMenu';
import TopMenu from './components/TopMenu/TopMenu';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import 'react-dates/initialize';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopMenu />
        <LeftMenu />
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;
