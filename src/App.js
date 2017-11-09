import React, { Component } from 'react';
import './App.css';
import LeftMenu from './containers/LeftMenu';
import TopMenu from './components/TopMenu/TopMenu';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import 'react-dates/initialize';

class App extends Component {
  render() {
    const pathname = this.props.children.type.name;
    return (
      <div className="App">
        <TopMenu />
        <LeftMenu />
        <Header name={pathname} />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;
